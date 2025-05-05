import Icon from '@/ui/Icon'
import { ChevronRight } from 'lucide-react'

function HeaderStatisticCard({ IconStats, status }) {
    return (
        <div className="flex justify-between">
            <div className="flex items-center justify-center rounded-md border border-slate-300 bg-slate-50 px-2 py-2">
                <Icon size="sm">
                    <IconStats></IconStats>
                </Icon>
            </div>
            <div className="flex items-center gap-2 rounded-md border border-slate-300 bg-slate-50 px-2 py-2 text-sm">
                <Icon size="sm" className="ml-2" otherClasses="text-red-500">
                    <ChevronRight></ChevronRight>
                </Icon>
                <span className="font-medium text-slate-700">{status}</span>
            </div>
        </div>
    )
}

export default HeaderStatisticCard
