import Icon from '@/ui/Icon'

function HeaderStatisticCardAgent({ IconStats, title }) {
    return (
        <div className="flex w-full items-center justify-between border-b border-slate-300 px-2 py-2 text-sm">
            <Icon
                size="lg"
                className="ml-2"
                otherClasses="text-cyan-600 bg-slate-100 px-2 py-2 rounded-md"
            >
                <IconStats></IconStats>
            </Icon>
            <div className="text-sm tracking-tight text-teal-700 uppercase">
                {title}
            </div>
        </div>
    )
}

export default HeaderStatisticCardAgent
