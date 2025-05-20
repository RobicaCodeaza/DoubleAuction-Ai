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
    console.log(
        'totalCantitate',
        totalCantitate,
        'totalValoare',
        totalValoare,
        'tranzactiiCount',
        tranzactiiCount
    )

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
