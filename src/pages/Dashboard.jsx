// import { useMemo } from 'react'
import { DifFataDeEchilibru } from '@/features/Dashboard/DifFataDeEchilibru'
import { EficientaAlocativa } from '@/features/Dashboard/EficientaAlocativa'
import HeaderStatisticCard from '@/features/Dashboard/HeaderStatisticCard'
import { RataTranzactionare } from '@/features/Dashboard/RataTranzactionare'
import StatisticCard from '@/ui/StatisticCard'
import { VolatilitatePreturi } from '@/features/Dashboard/VolatilitatePreturi'
import {
    ArrowRightLeft,
    ArrowUp10,
    HandCoins,
    HeartHandshake,
} from 'lucide-react'
import { useDashboards } from '@/features/Dashboard/useGetDashboard'
import { useModelContext } from '@/context/ContextSimulare'
import {
    // calculeazaEficientePiataPeRunda,
    calculeazaRaportSatisfactie,
} from '@/lib/helpers'
import { useAgents } from '@/features/Agenti/useGetAgents'
import { useTransactionsAndDashboard } from '@/features/Tranzactii/useGetTranzactiiAndDashboard'
// import { useCreateDashboard } from '@/features/Dashboard/useCreateDashboard'

function Dashboard() {
    const { model } = useModelContext()
    const { dashboard, isLoading } = useDashboards(model)
    // const { isCreating: isCreatingDashboard, createDashboardEntry } =
    //     useCreateDashboard

    const { isLoading: isLoadingAgents, agents } = useAgents(model)
    const { isLoading: isLoadingTransactions, transactions } =
        useTransactionsAndDashboard(model)

    // const eficiente = useMemo(() => {
    //     if (!transactions || !agents) return []

    //     const cantitatiDorite = agents
    //         .filter((a) => a.rol === 'cumparator')
    //         .map((a) => ({ agent_id: a.id, cantitate_initiala: a.cantitate }))

    //     const tranzactiiPeRunda = {}
    //     for (const t of transactions) {
    //         if (!tranzactiiPeRunda[t.runda]) tranzactiiPeRunda[t.runda] = []
    //         tranzactiiPeRunda[t.runda].push(t)
    //     }

    //     return Object.entries(tranzactiiPeRunda).map(([runda, tranz]) =>
    //         calculeazaEficientePiataPeRunda(
    //             Number(runda),
    //             tranz,
    //             cantitatiDorite
    //         )
    //     )
    // }, [transactions, agents])
    // console.log('eficiente', eficiente)

    if (isLoading || isLoadingTransactions || isLoadingAgents) {
        return (
            <div className="flex h-full w-full items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900"></div>
            </div>
        )
    }
    if (!dashboard)
        return (
            <div className="tabland:px-8 flex flex-1 flex-col gap-4 px-4 py-4 pt-0">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-medium">Nu sunt date</h2>
                </div>
            </div>
        )

    const maxRunde = transactions?.reduce((max, tx) => {
        return tx.runda > max ? tx.runda : max
    }, 0)
    console.log('maxRunde', maxRunde)

    const medieTranzactiiPerRunda = (transactions?.length / maxRunde).toFixed(2)
    const totalTranzactii = transactions?.length
    const procentTranzactiiRundaPerTotal = (
        (medieTranzactiiPerRunda / totalTranzactii) *
        100
    ).toFixed(2)

    const medieCantitatePerRunda = (
        transactions?.reduce((acc, tx) => {
            return acc + tx.cantitate
        }, 0) / maxRunde
    ).toFixed(2)
    const totalCantitate = transactions?.reduce((acc, tx) => {
        return acc + tx.cantitate
    }, 0)
    const procentCantitateRundaPerTotal = (
        (medieCantitatePerRunda / totalCantitate) *
        100
    ).toFixed(2)

    const mediePretPerRunda = (
        transactions?.reduce((acc, tx) => {
            return acc + tx.pret
        }, 0) / maxRunde
    ).toFixed(2)
    const totalPret = transactions?.reduce((acc, tx) => {
        return acc + tx.pret
    }, 0)
    const procentPretRundaPerTotal = (
        (mediePretPerRunda / totalPret) *
        100
    ).toFixed(2)

    const { satisfacutiCumparatori, satisfacutiVanzatori } =
        calculeazaRaportSatisfactie(agents, transactions)

    // console.log('dashboard', dashboard)
    const eficientaAlocativa = dashboard.map((dashboard) => {
        return { date: dashboard.eficienta_alocativa, runda: dashboard.runda }
    })
    const rataTranzactionare = dashboard.map((dashboard) => {
        return { date: dashboard.rata_tranzactionare, runda: dashboard.runda }
    })
    const volatilitatePreturi = dashboard.map((dashboard) => {
        return { date: dashboard.volatilitate_pret, runda: dashboard.runda }
    })
    const difFataDeEchilibru = dashboard.map((dashboard) => {
        return {
            date: dashboard.diferenta_echilibru,
            runda: dashboard.runda,
            pretEchilibru: dashboard.pret_echilibru,
            delta_semnat: dashboard.delta_semnat,
        }
    })

    const Header = <HeaderStatisticCard></HeaderStatisticCard>

    return (
        <div className="tabland:px-8 flex flex-1 flex-col gap-4 px-4 py-4 pt-0">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-medium">Dashboard</h2>
            </div>
            <div className="tabport:grid-cols-4 grid auto-rows-min grid-cols-2 gap-4">
                {/* <div className="aspect-video rounded-xl bg-slate-50" />
                <div className="aspect-video rounded-xl bg-slate-50" />
                <div className="aspect-video rounded-xl bg-slate-50" /> */}
                <StatisticCard
                    Header={
                        <HeaderStatisticCard
                            IconStats={ArrowRightLeft}
                            status={`${procentTranzactiiRundaPerTotal}%`}
                        />
                    }
                    Content={
                        <div className="text-center text-sm text-slate-400">
                            Tranzactii per runda/Tranzactii Totale
                        </div>
                    }
                    Footer={
                        <div className="text-md w-full text-center font-medium text-slate-600">
                            {medieTranzactiiPerRunda}/{totalTranzactii}
                        </div>
                    }
                ></StatisticCard>
                <StatisticCard
                    Header={
                        <HeaderStatisticCard
                            IconStats={ArrowUp10}
                            status={`${procentCantitateRundaPerTotal}%`}
                        />
                    }
                    Content={
                        <div className="text-center text-sm text-slate-400">
                            Cantitate per runda/Cantitate Totala
                        </div>
                    }
                    Footer={
                        <div className="text-md w-full text-center font-medium text-slate-600">
                            {medieCantitatePerRunda}/{totalCantitate}
                        </div>
                    }
                ></StatisticCard>{' '}
                <StatisticCard
                    Header={
                        <HeaderStatisticCard
                            IconStats={HandCoins}
                            status={`${procentPretRundaPerTotal}%`}
                        />
                    }
                    Content={
                        <div className="text-center text-sm text-slate-400">
                            Pret per Runda/Pret Total Runde
                        </div>
                    }
                    Footer={
                        <div className="text-md w-full text-center font-medium text-slate-600">
                            {mediePretPerRunda}/{totalPret}
                        </div>
                    }
                ></StatisticCard>{' '}
                <StatisticCard
                    Header={
                        <HeaderStatisticCard
                            IconStats={HeartHandshake}
                            status="__%"
                        />
                    }
                    Content={
                        <div className="break-after-all text-center text-sm text-slate-400">
                            Satisfacere (cumparator/vanzator)
                        </div>
                    }
                    Footer={
                        <div className="text-md w-full text-center font-medium text-slate-600">
                            {satisfacutiCumparatori}/{satisfacutiVanzatori}
                        </div>
                    }
                ></StatisticCard>
            </div>
            <div className="tabport:grid tabport:grid-cols-2 flex flex-1 flex-col gap-4 rounded-xl bg-slate-50 p-4">
                <EficientaAlocativa
                    eficientaAlocativa={eficientaAlocativa}
                    runde={maxRunde}
                ></EficientaAlocativa>
                <RataTranzactionare
                    rataTranzactionare={rataTranzactionare}
                    runde={maxRunde}
                ></RataTranzactionare>
                <VolatilitatePreturi
                    volatilitatePreturi={volatilitatePreturi}
                    runde={maxRunde}
                ></VolatilitatePreturi>
                <DifFataDeEchilibru
                    difFataDeEchilibru={difFataDeEchilibru}
                    runde={maxRunde}
                ></DifFataDeEchilibru>
            </div>
        </div>
    )
}

export default Dashboard
