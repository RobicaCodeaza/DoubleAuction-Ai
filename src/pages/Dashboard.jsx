import { DifFataDeEchilibru } from '@/features/Dashboard/DifFataDeEchilibru'
import { EficientaAlocativa } from '@/features/Dashboard/EficientaAlocativa'
import HeaderStatisticCard from '@/features/Dashboard/HeaderStatisticCard'
import { RataTranzactionare } from '@/features/Dashboard/RataTranzactionare'
import StatisticCard from '@/features/Dashboard/StatisticCard'
import { VolatilitatePreturi } from '@/features/Dashboard/VolatilitatePreturi'
import {
    ArrowRightLeft,
    ArrowUp10,
    HandCoins,
    HeartHandshake,
} from 'lucide-react'
function Dashboard() {
    const Header = <HeaderStatisticCard></HeaderStatisticCard>

    return (
        <div className="tabland:px-8 flex flex-1 flex-col gap-4 px-4 py-4 pt-0">
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
                <EficientaAlocativa></EficientaAlocativa>
                <RataTranzactionare></RataTranzactionare>
                <VolatilitatePreturi></VolatilitatePreturi>
                <DifFataDeEchilibru></DifFataDeEchilibru>
            </div>
        </div>
    )
}

export default Dashboard
