import ContentStatisticCardAgent from '@/ui/ContentStatisticCard'
import HeaderStatisticCardAgent from '@/ui/HeaderStatisticCard'
import TabelTranzactii from '@/features/Tranzactii/TabelTranzactii'
import StatisticCard from '@/ui/StatisticCard'
import {
    Snail,
    SquareStack,
    BetweenVerticalStart,
    DecimalsArrowLeft,
    Stethoscope,
} from 'lucide-react'
import { useTransactions } from '@/features/Tranzactii/useGetTranzactii'
import Empty from '@/ui/Empty'
import { useModelContext } from '@/context/ContextSimulare'

function Tranzactii() {
    const { model } = useModelContext()
    const { isLoading, transactions } = useTransactions(model)

    if (isLoading) {
        return (
            <div className="flex h-full w-full items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900"></div>
            </div>
        )
    }
    if (!transactions) return <Empty resource="tranzactii" />

    return (
        <div className="tabland:px-8 flex flex-1 flex-col gap-4 px-4 py-4 pt-0">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-medium">Tranzactii</h2>
            </div>
            <div className="tabport:grid-cols-4 grid auto-rows-min grid-cols-2 gap-4">
                <StatisticCard
                    Header={
                        <HeaderStatisticCardAgent
                            IconStats={Stethoscope}
                            title={'Eficienta Comportamentului'}
                        ></HeaderStatisticCardAgent>
                    }
                    Content={
                        <ContentStatisticCardAgent
                            IconStats={BetweenVerticalStart}
                            stat1={7}
                            info={
                                'Aceasta arata eficienta comportamentului agentilor in cadrul simulatiei, de-a lungul etapelor de simulare.'
                            }
                        ></ContentStatisticCardAgent>
                    }
                ></StatisticCard>
                <StatisticCard
                    Header={
                        <HeaderStatisticCardAgent
                            IconStats={DecimalsArrowLeft}
                            title={'Eficienta pe cantitate/pret'}
                        ></HeaderStatisticCardAgent>
                    }
                    Content={
                        <ContentStatisticCardAgent
                            IconStats={BetweenVerticalStart}
                            stat1={7}
                            stat2={3}
                            isSplit={false}
                            info={
                                'Aceasta arata eficienta pe cantitate/pret a agentilor in cadrul simulatiei.'
                            }
                        ></ContentStatisticCardAgent>
                    }
                ></StatisticCard>
                <StatisticCard
                    Header={
                        <HeaderStatisticCardAgent
                            IconStats={Snail}
                            title={'Eficienta pe viteza'}
                        ></HeaderStatisticCardAgent>
                    }
                    Content={
                        <ContentStatisticCardAgent
                            IconStats={BetweenVerticalStart}
                            stat1={7}
                            info={
                                'Aceasta arata eficienta pe viteza a agentilor in cadrul simulatiei.'
                            }
                        ></ContentStatisticCardAgent>
                    }
                ></StatisticCard>
                <StatisticCard
                    Header={
                        <HeaderStatisticCardAgent
                            IconStats={SquareStack}
                            title={'Eficienta Istorica/Trend'}
                        ></HeaderStatisticCardAgent>
                    }
                    Content={
                        <ContentStatisticCardAgent
                            IconStats={BetweenVerticalStart}
                            stat1={7}
                            stat2={3}
                            isSplit={false}
                            info={
                                'Aceasta arata eficienta istorica a agentilor in cadrul simulatiei, dar si eficienta trendului, de-a lungul etapelor de simulare.'
                            }
                        ></ContentStatisticCardAgent>
                    }
                ></StatisticCard>
            </div>
            <TabelTranzactii transactions={transactions}></TabelTranzactii>
        </div>
    )
}

export default Tranzactii
