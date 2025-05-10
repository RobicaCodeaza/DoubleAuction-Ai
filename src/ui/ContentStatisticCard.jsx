import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card'
import Icon from '@/ui/Icon'
import { Info } from 'lucide-react'

function ContentStatisticCard({
    IconStats,
    stat1,
    stat2,
    info = false,
    isSplit = true,
}) {
    return (
        <div className="flex items-center justify-around">
            {isSplit ? (
                stat1 && stat2 ? (
                    <div className="text-[1.4rem] text-cyan-500">
                        {stat1}/{stat2}
                    </div>
                ) : (
                    <>
                        <div className="rounded-md border border-cyan-500 bg-slate-50 px-2 py-1 text-[1.1rem]">
                            {stat1 || stat2}
                        </div>
                    </>
                )
            ) : (
                <div className="flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-[1.2rem] text-cyan-700">
                    {stat1}
                    <Icon size="sm" otherClasses="text-cyan-600">
                        <IconStats />
                    </Icon>{' '}
                    {stat2}
                </div>
            )}
            {isSplit ? (
                stat1 && stat2 ? (
                    <div className="flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-[1.2rem] text-cyan-700">
                        {((stat1 * 100) / (stat1 + stat2)).toFixed(0)}%{' '}
                        <Icon size="sm" otherClasses="text-cyan-600">
                            <IconStats />
                        </Icon>{' '}
                        {((stat2 * 100) / (stat1 + stat2)).toFixed(0)}%
                    </div>
                ) : null
            ) : null}
            {info && (
                <HoverCard>
                    <HoverCardTrigger>
                        <Icon otherClasses="text-cyan-600">
                            <Info></Info>
                        </Icon>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <div className="text-sm text-slate-500">{info}</div>
                    </HoverCardContent>
                </HoverCard>
            )}
        </div>
    )
}

export default ContentStatisticCard
