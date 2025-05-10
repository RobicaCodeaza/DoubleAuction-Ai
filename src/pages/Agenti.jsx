import { Button } from '@/components/ui/button'
import ContentStatisticCardAgent from '@/features/Agenti/ContentStatisticCardAgent'
import HeaderStatisticCardAgent from '@/features/Agenti/HeaderStatisticCardAgent'
import TableAgenti from '@/features/Agenti/TableAgenti'
import StatisticCard from '@/ui/StatisticCard'
import {
    ShoppingCart,
    SquareSplitHorizontal,
    MessageSquareWarning,
    Activity,
    SquareStack,
} from 'lucide-react'

function Agenti() {
    return (
        <div className="tabland:px-8 flex flex-1 flex-col gap-4 px-4 py-4 pt-0">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-medium">Agenti</h2>
                <Button
                    variant="outline"
                    className="flex items-center gap-2 border border-teal-500 text-teal-700 hover:bg-teal-500 hover:text-white"
                >
                    Adauga Agent
                </Button>
            </div>
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
            <TableAgenti></TableAgenti>
        </div>
    )
}

export default Agenti
