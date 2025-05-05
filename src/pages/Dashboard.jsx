import { Outlet } from 'react-router'

function Dashboard() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-slate-50" />
                <div className="aspect-video rounded-xl bg-slate-50" />
                <div className="aspect-video rounded-xl bg-slate-50" />
            </div>
            <div className="flex-1 rounded-xl bg-slate-50 md:min-h-min">
                Dashboard
            </div>
        </div>
    )
}

export default Dashboard
