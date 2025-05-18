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

    // const reportIstoricOrientant = agents.reduce(
    //     (acc, agent) => {
    //         if (agent.memorie_istoric === true) acc.orientant += 1
    //         if (agent.memorie_istoric === false) acc.neorientant += 1
    //         return acc
    //     },
    //     { orientat: 0, neorientat: 0 }
    // )

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

    const reportVzCump = agents.reduce(
        (acc, agent) => {
            if (agent.rol === 'vanzator') acc.vz += 1
            if (agent.rol === 'cumparator') acc.cump += 1
            return acc
        },
        { vz: 0, cump: 0 }
    )
    const reportPasivAgresiv = agents.reduce(
        (acc, agent) => {
            if (agent.comportament === 'pasiv') acc.pasiv += 1
            if (agent.comportament === 'agresiv') acc.agresiv += 1
            return acc
        },
        { pasiv: 0, agresiv: 0 }
    )
    const reportSensibilLaTrend = agents.reduce(
        (acc, agent) => {
            if (agent.sensibil_la_trend === true) acc.sensibil += 1
            if (agent.sensibil_la_trend === false) acc.insensibil += 1
            return acc
        },
        { sensibil: 0, insensibil: 0 }
    )

    const reportIstoricOrientant = agents.reduce(
        (acc, agent) => {
            if (agent.memorie_istoric === true) acc.orientat += 1
            if (agent.memorie_istoric === false) acc.neorientat += 1
            return acc
        },
        { orientat: 0, neorientat: 0 }
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
                                    stat1={reportVzCump.vz}
                                    stat2={reportVzCump.cump}
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
                                    stat1={reportPasivAgresiv.pasiv}
                                    stat2={reportPasivAgresiv.agresiv}
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
                                    stat1={reportSensibilLaTrend.sensibil}
                                    stat2={reportSensibilLaTrend.insensibil}
                                ></ContentStatisticCardAgent>
                            }
                        ></StatisticCard>
                        <StatisticCard
                            Header={
                                <HeaderStatisticCardAgent
                                    IconStats={SquareStack}
                                    title={'Istoric Orientat/Neorientat'}
                                ></HeaderStatisticCardAgent>
                            }
                            Content={
                                <ContentStatisticCardAgent
                                    IconStats={SquareSplitHorizontal}
                                    stat1={reportIstoricOrientant.orientat}
                                    stat2={reportIstoricOrientant.neorientat}
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
