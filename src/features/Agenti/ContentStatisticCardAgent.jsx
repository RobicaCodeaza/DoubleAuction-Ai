import Icon from '@/ui/Icon'

function ContentStatisticCardAgent({ IconStats, stat1, stat2 }) {
    return (
        <div className="flex justify-around">
            <div className="text-[1.4rem] text-cyan-500">
                {stat1}/{stat2}
            </div>
            <div className="flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-[1.2rem] text-cyan-700">
                {(stat1 * 100) / (stat1 + stat2)}%{' '}
                <Icon size="sm" otherClasses={'text-cyan-600'}>
                    <IconStats></IconStats>
                </Icon>{' '}
                {(stat2 * 100) / (stat1 + stat2)}
            </div>
        </div>
    )
}

export default ContentStatisticCardAgent
