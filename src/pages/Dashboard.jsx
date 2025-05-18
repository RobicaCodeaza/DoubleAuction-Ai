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
function Dashboard() {
    const { model } = useModelContext()
    const { dashboard, isLoading } = useDashboards(model)

    if (isLoading) {
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
                            status="24%"
                        />
                    }
                    Content={
                        <div className="text-center text-sm text-slate-400">
                            Tranzactii per runda/Tranzactii Totale
                        </div>
                    }
                    Footer={
                        <div className="text-md w-full text-center font-medium text-slate-600">
                            24/24
                        </div>
                    }
                ></StatisticCard>
                <StatisticCard
                    Header={
                        <HeaderStatisticCard
                            IconStats={ArrowUp10}
                            status="24%"
                        />
                    }
                    Content={
                        <div className="text-center text-sm text-slate-400">
                            Cantitate per runda/Cantitate Totala
                        </div>
                    }
                    Footer={
                        <div className="text-md w-full text-center font-medium text-slate-600">
                            24/24
                        </div>
                    }
                ></StatisticCard>{' '}
                <StatisticCard
                    Header={
                        <HeaderStatisticCard
                            IconStats={HandCoins}
                            status="24%"
                        />
                    }
                    Content={
                        <div className="text-center text-sm text-slate-400">
                            Pret per Runda/Pret Total Runde
                        </div>
                    }
                    Footer={
                        <div className="text-md w-full text-center font-medium text-slate-600">
                            24/24
                        </div>
                    }
                ></StatisticCard>{' '}
                <StatisticCard
                    Header={
                        <HeaderStatisticCard
                            IconStats={HeartHandshake}
                            status="24%"
                        />
                    }
                    Content={
                        <div className="break-after-all text-center text-sm text-slate-400">
                            Satisfacere (cumparator/vanzator)
                        </div>
                    }
                    Footer={
                        <div className="text-md w-full text-center font-medium text-slate-600">
                            24/24
                        </div>
                    }
                ></StatisticCard>
            </div>
            <div className="tabport:grid tabport:grid-cols-2 flex flex-1 flex-col gap-4 rounded-xl bg-slate-50 p-4">
                <EficientaAlocativa
                    eficientaAlocativa={eficientaAlocativa}
                ></EficientaAlocativa>
                <RataTranzactionare
                    rataTranzactionare={rataTranzactionare}
                ></RataTranzactionare>
                <VolatilitatePreturi
                    volatilitatePreturi={volatilitatePreturi}
                ></VolatilitatePreturi>
                <DifFataDeEchilibru
                    difFataDeEchilibru={difFataDeEchilibru}
                ></DifFataDeEchilibru>
            </div>
        </div>
    )
}

export default Dashboard
