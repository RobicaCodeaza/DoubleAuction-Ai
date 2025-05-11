import {
    Snail,
    SquareStack,
    BetweenVerticalStart,
    DecimalsArrowLeft,
    Stethoscope,
} from 'lucide-react'
import TabelStatisticiIndividuale from '@/features/StatisticiIndividuale/TabelStatisticiIndividuale'

function StatisticiIndividuale() {
    return (
        <div className="tabland:px-8 flex flex-1 flex-col gap-4 px-4 py-4 pt-0">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-medium">Statistici Individuale</h2>
            </div>
            <TabelStatisticiIndividuale></TabelStatisticiIndividuale>
        </div>
    )
}

export default StatisticiIndividuale
