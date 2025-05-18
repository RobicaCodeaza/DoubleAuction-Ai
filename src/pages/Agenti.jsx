import { Button } from '@/components/ui/button'
import ContentStatisticCardAgent from '@/ui/ContentStatisticCard'
import CreareAgent from '@/features/Agenti/CreareAgent'
import HeaderStatisticCardAgent from '@/ui/HeaderStatisticCard'
import TableAgenti from '@/features/Agenti/TableAgenti'
import StatisticCard from '@/ui/StatisticCard'
import {
    ShoppingCart,
    SquareSplitHorizontal,
    MessageSquareWarning,
    Activity,
    SquareStack,
} from 'lucide-react'
import { useModelContext } from '@/context/ContextSimulare'
import { useAgents } from '@/features/Agenti/useGetAgents'
import Empty from '@/ui/Empty'

function Agenti() {
    const { model } = useModelContext()
    const { isLoading, agents } = useAgents(model)

    if (isLoading) {
        return (
            <div className="flex h-full w-full items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900"></div>
            </div>
        )
    }
    if (!agents)
        return (
            <Empty
                resource="Agenti"
                Component={
                    <CreareAgent
                        agentNumber={1}
                        agentType={'Vanzator'}
                        Trigger={
                            <Button
                                variant="outline"
                                className="flex items-center gap-2 border border-teal-500 text-teal-700 hover:bg-teal-500 hover:text-white"
                            >
                                Adauga Agent
                            </Button>
                        }
                    ></CreareAgent>
                }
            />
        )

    return (
        <div className="tabland:px-8 flex flex-1 flex-col gap-4 px-4 py-4 pt-0">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-medium">Agenti</h2>
                <CreareAgent
                    agentNumber={1}
                    agentType={'Vanzator'}
                    Trigger={
                        <Button
                            variant="outline"
                            className="flex items-center gap-2 border border-teal-500 text-teal-700 hover:bg-teal-500 hover:text-white"
                        >
                            Adauga Agent
                        </Button>
                    }
                ></CreareAgent>
            </div>
            {agents && (
                <>
                    <div className="tabport:grid-cols-4 grid auto-rows-min grid-cols-2 gap-4">
                        <StatisticCard
                            Header={
                                <HeaderStatisticCardAgent
                                    IconStats={ShoppingCart}
                                    title={'Vanzator/Cumparator'}
                                ></HeaderStatisticCardAgent>
                            }
                            Content={
                                <ContentStatisticCardAgent
                                    IconStats={SquareSplitHorizontal}
                                    stat1={7}
                                    stat2={3}
                                ></ContentStatisticCardAgent>
                            }
                        ></StatisticCard>
                        <StatisticCard
                            Header={
                                <HeaderStatisticCardAgent
                                    IconStats={MessageSquareWarning}
                                    title={'Pasiv/Agresiv'}
                                ></HeaderStatisticCardAgent>
                            }
                            Content={
                                <ContentStatisticCardAgent
                                    IconStats={SquareSplitHorizontal}
                                    stat1={7}
                                    stat2={3}
                                ></ContentStatisticCardAgent>
                            }
                        ></StatisticCard>
                        <StatisticCard
                            Header={
                                <HeaderStatisticCardAgent
                                    IconStats={Activity}
                                    title={'Sensibil la trend/Insensibil'}
                                ></HeaderStatisticCardAgent>
                            }
                            Content={
                                <ContentStatisticCardAgent
                                    IconStats={SquareSplitHorizontal}
                                    stat1={7}
                                    stat2={3}
                                ></ContentStatisticCardAgent>
                            }
                        ></StatisticCard>
                        <StatisticCard
                            Header={
                                <HeaderStatisticCardAgent
                                    IconStats={SquareStack}
                                    title={'Istoric Orientant/Neorientant'}
                                ></HeaderStatisticCardAgent>
                            }
                            Content={
                                <ContentStatisticCardAgent
                                    IconStats={SquareSplitHorizontal}
                                    stat1={7}
                                    stat2={3}
                                ></ContentStatisticCardAgent>
                            }
                        ></StatisticCard>
                    </div>
                    <TableAgenti agents={agents}></TableAgenti>
                </>
            )}
        </div>
    )
}

export default Agenti
