export function analizeazaTranzactii(tranzactii) {
    let totalCantitate = 0
    let totalValoare = 0
    let tranzactiiCount = 0
    if (!tranzactii)
        return {
            numarTranzactii: 0,
            totalCantitate: 0,
            totalValoare: 0,
            mediePret: 0,
        }
    for (const t of tranzactii) {
        const valoare = t.pret * t.cantitate

        totalCantitate += t.cantitate
        totalValoare += valoare
        tranzactiiCount += 1
    }

    return {
        numarTranzactii: tranzactiiCount,
        totalCantitate,
        totalValoare,
        mediePret: tranzactiiCount > 0 ? totalValoare / totalCantitate : 0,
    }
}

function calculeazaSatisfactia(agent, tranzactii) {
    const isCumparator = agent.rol === 'cumparator'
    const id = agent.id

    const relevante = tranzactii.filter((t) =>
        isCumparator ? t.cumparator === id : t.vanzator === id
    )

    // 🛑 Dacă nu există tranzacții relevante
    if (!relevante.length) return 0

    const cantitateInitiala = agent.cantitate
    const pretInitial = agent.pret

    // ⚠️ Protecție la împărțire la 0
    if (!cantitateInitiala || !pretInitial) return 0

    const cantitateTotala = relevante.reduce(
        (sum, t) => sum + (t.cantitate || 0),
        0
    )
    const pretMediu =
        relevante.reduce((sum, t) => sum + (t.pret || 0), 0) / relevante.length

    const procentCantitate = Math.min(1, cantitateTotala / cantitateInitiala)

    const diferentaPret = (pretMediu - pretInitial) / pretInitial

    let scorPret
    if (isCumparator) {
        // mai mic = mai bun
        scorPret = 1 - Math.max(0, diferentaPret)
    } else {
        // mai mare = mai bun
        scorPret = 1 + Math.min(0, diferentaPret)
    }

    // clamp între 0 și 1
    scorPret = Math.max(0, Math.min(1, scorPret))

    const scorFinal = ((procentCantitate + scorPret) / 2) * 100

    return Math.round(scorFinal)
}

export function calculeazaRaportSatisfactie(agenti, tranzactii) {
    const rezultate = agenti.map((agent) => {
        const scor = calculeazaSatisfactia(agent, tranzactii)
        return {
            ...agent,
            satisfactie: scor,
        }
    })

    const satisfacutiCumparatori = rezultate.filter(
        (a) => a.rol === 'cumparator' && a.satisfactie >= 70
    ).length
    const satisfacutiVanzatori = rezultate.filter(
        (a) => a.rol === 'vanzator' && a.satisfactie >= 70
    ).length

    return {
        satisfacutiCumparatori,
        satisfacutiVanzatori,
        raport:
            satisfacutiVanzatori > 0
                ? (satisfacutiCumparatori / satisfacutiVanzatori).toFixed(2)
                : '∞',
        rezultate, // listă cu scorul fiecărui agent
    }
}

export function calculeazaEficientePiataPeRunda(
    runda,
    tranzactii,
    cantitatiDorite,
    propuneriTotalePeRunda = 5,
    modelId
) {
    const n = tranzactii.length
    if (n === 0) {
        return {
            runda,
            eficienta_alocativa: 0,
            rata_tranzactionare: 0,
            volatilitate_pret: 0,
            diferenta_echilibru: 0,
            pret_echilibru: 0,
            pret_real_mediu: 0,
        }
    }

    const preturi = tranzactii.map((t) => t.pret)
    const totalCantitate = tranzactii.reduce((sum, t) => sum + t.cantitate, 0)
    const mediePret = preturi.reduce((a, b) => a + b, 0) / n

    const totalPretCantitate = tranzactii.reduce(
        (sum, t) => sum + t.pret * t.cantitate,
        0
    )
    const pretEchilibru =
        totalCantitate > 0 ? totalPretCantitate / totalCantitate : 0

    const cumparatori = [...new Set(tranzactii.map((t) => t.cumparator))]
    const cantitateDorita = cantitatiDorite
        .filter((a) => cumparatori.includes(a.agent_id))
        .reduce((sum, a) => sum + a.cantitate_initiala, 0)

    const eficienta_alocativa =
        cantitateDorita > 0 ? (totalCantitate / cantitateDorita) * 100 : 0

    const rata_tranzactionare = (n / propuneriTotalePeRunda) * 100

    const std_pret = Math.sqrt(
        preturi.reduce((sum, p) => sum + Math.pow(p - mediePret, 2), 0) / n
    )

    const delta_p =
        preturi.reduce((sum, p) => sum + Math.abs(p - pretEchilibru), 0) / n

    // ➕ Media reală a prețurilor tranzacționate (practic e același mediePret)

    const delta_semnat =
        preturi.reduce((sum, p) => sum + (p - pretEchilibru), 0) / n
    const model_id = modelId

    return {
        runda,
        model_id,
        eficienta_alocativa: Number(eficienta_alocativa.toFixed(2)),
        rata_tranzactionare: Number(rata_tranzactionare.toFixed(2)),
        volatilitate_pret: Number(std_pret.toFixed(2)),
        diferenta_echilibru: Number(delta_p.toFixed(2)), // Δp absolut
        delta_semnat: Number(delta_semnat.toFixed(2)), // Δp semnat
        pret_echilibru: Number(pretEchilibru.toFixed(2)),
    }
}

export function calculeazaTrendSiIstoricAgent(agent, tranzactiiPerRunda) {
    const runde = Object.keys(tranzactiiPerRunda)
        .map(Number)
        .sort((a, b) => a - b)

    let trenduriDetectate = 0
    let deciziiCorecte = 0
    let imbunatatiri = 0

    let ultimaMediePret = null

    for (let i = 1; i < runde.length; i++) {
        const pretAnterior = tranzactiiPerRunda[runde[i - 1]].map((t) => t.pret)
        const pretCurent = tranzactiiPerRunda[runde[i]].map((t) => t.pret)

        const medieAnterioara =
            pretAnterior.reduce((a, b) => a + b, 0) / pretAnterior.length
        const medieCurenta =
            pretCurent.reduce((a, b) => a + b, 0) / pretCurent.length

        const trend =
            medieCurenta > medieAnterioara
                ? 'up'
                : medieCurenta < medieAnterioara
                  ? 'down'
                  : 'flat'
        trenduriDetectate++

        const agentTranzactionat = tranzactiiPerRunda[runde[i]].some(
            (t) => t.cumparator === agent.id || t.vanzator === agent.id
        )

        if (agentTranzactionat) {
            if (
                (agent.rol === 'vanzator' && trend === 'up') ||
                (agent.rol === 'cumparator' && trend === 'down')
            ) {
                deciziiCorecte++
            }
        }

        // Eficiența istorică: doar dacă agentul a avut tranzacții
        const preturiAgentCurent = tranzactiiPerRunda[runde[i]]
            .filter((t) => t.cumparator === agent.id || t.vanzator === agent.id)
            .map((t) => t.pret)

        if (preturiAgentCurent.length > 0) {
            const medieAgentCurent =
                preturiAgentCurent.reduce((a, b) => a + b, 0) /
                preturiAgentCurent.length

            if (
                ultimaMediePret !== null &&
                ((agent.rol === 'vanzator' &&
                    medieAgentCurent > ultimaMediePret) ||
                    (agent.rol === 'cumparator' &&
                        medieAgentCurent < ultimaMediePret))
            ) {
                imbunatatiri++
            }

            ultimaMediePret = medieAgentCurent
        }
    }

    const totalComparatii = runde.length - 1

    return {
        eficientaTrend:
            trenduriDetectate > 0
                ? Number(
                      ((deciziiCorecte / trenduriDetectate) * 100).toFixed(2)
                  )
                : 0,
        eficientaIstoric:
            totalComparatii > 0
                ? Number(((imbunatatiri / totalComparatii) * 100).toFixed(2))
                : 0,
    }
}

export function calculeazaEficientaAgentului(agent, transactions, proposals) {
    const pretRezerva = agent.pret
    const cantitateTotala = agent.cantitate

    const tranzactiiAgent = transactions.filter(
        (t) => t.cumparator === agent.id || t.vanzator === agent.id
    )

    const propuneriAgent = proposals.filter((p) => p.agent_id === agent.id)

    // ➡ Grupăm tranzacțiile pe rundă (pt trend și istoric)
    const tranzactiiPerRunda = {}
    for (const t of transactions) {
        if (!tranzactiiPerRunda[t.runda]) tranzactiiPerRunda[t.runda] = []
        tranzactiiPerRunda[t.runda].push(t)
    }

    const { eficientaTrend, eficientaIstoric } = calculeazaTrendSiIstoricAgent(
        agent,
        tranzactiiPerRunda
    )

    if (tranzactiiAgent.length === 0) {
        if (propuneriAgent.length === 0) {
            return {
                rataSuccess: 0,
                mediePropuneriPeRunda: 0,
                scorEfort: 0,
                maxRunda: 0,
                maxPretPropus: 0,
                maxCantitatePropusa: 0,
                tipEficienta: 'fara_propuneri',
            }
        }

        const totalPropuneri = propuneriAgent.length
        const rundeUnice = [...new Set(propuneriAgent.map((p) => p.runda))]
        const mediePropuneriPeRunda = totalPropuneri / rundeUnice.length

        const scorEfort = propuneriAgent.reduce(
            (sum, p) => sum + p.cantitate_propusa * p.pret_propus,
            0
        )

        const maxRunda = Math.max(...propuneriAgent.map((p) => p.runda))
        const maxPretPropus = Math.max(
            ...propuneriAgent.map((p) => p.pret_propus)
        )
        const maxCantitatePropusa = Math.max(
            ...propuneriAgent.map((p) => p.cantitate_propusa)
        )

        return {
            rataSucces: 0,
            mediePropuneriPeRunda: Number(mediePropuneriPeRunda.toFixed(2)),
            scorEfort: Number(scorEfort.toFixed(2)),
            maxRunda,
            maxPretPropus: Number(maxPretPropus.toFixed(2)),
            maxCantitatePropusa,
            tipEficienta: 'fara_tranzactii',
        }
    }

    // ✅ Are tranzacții → calculează metrice clasice
    const preturiTranzactii = tranzactiiAgent.map((t) => t.pret)
    const cantitatiTranzactii = tranzactiiAgent.map((t) => t.cantitate)

    const mediaPretTranz = preturiTranzactii.length
        ? preturiTranzactii.reduce((a, b) => a + b, 0) /
          preturiTranzactii.length
        : 0

    const totalCantTranz = cantitatiTranzactii.reduce((a, b) => a + b, 0)
    const primaRunda = Math.min(...tranzactiiAgent.map((t) => t.runda))
    const T = primaRunda - 1

    const rezultat = {
        eficientaCantitate: cantitateTotala
            ? Number(((totalCantTranz / cantitateTotala) * 100).toFixed(2))
            : 0,

        eficientaPret: pretRezerva
            ? Number(((mediaPretTranz / pretRezerva) * 100).toFixed(2))
            : 0,

        eficientaViteza: Number(((1 / (T + 1)) * 100).toFixed(2)),

        tipEficienta: 'cu_tranzactii',

        eficientaTrend,
        eficientaIstoric,
    }

    if (agent.comportament === 'pasiv') {
        rezultat.eficientaPasiv = pretRezerva
            ? Number(
                  (
                      (1 -
                          Math.abs(pretRezerva - mediaPretTranz) /
                              pretRezerva) *
                      100
                  ).toFixed(2)
              )
            : 0
    }

    if (agent.comportament === 'agresiv') {
        rezultat.eficientaAgresiv = pretRezerva
            ? Number(
                  (
                      (1 / (T + 1)) *
                      (Math.abs(pretRezerva - mediaPretTranz) / pretRezerva) *
                      100
                  ).toFixed(2)
              )
            : 0
    }

    return rezultat
}
