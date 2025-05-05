import * as React from 'react'
import {
    Bot,
    ChartNoAxesColumnDecreasing,
    SquareTerminal,
    LayoutDashboard,
    ArrowLeftRight,
} from 'lucide-react'

import { NavMain } from '@/components/nav-main'
// import { NavProjects } from '@/components/nav-projects'
// import { NavUser } from '@/components/nav-user'
// import { TeamSwitcher } from '@/components/team-switcher'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    // SidebarHeader,
    SidebarRail,
} from '@/components/ui/sidebar'
import { Button } from './ui/button'

// This is sample data.
const data = {
    // user: {
    //     name: 'shadcn',
    //     email: 'm@example.com',
    //     avatar: '/avatars/shadcn.jpg',
    // },
    // teams: [
    //     {
    //         name: 'Acme Inc',
    //         logo: GalleryVerticalEnd,
    //         plan: 'Enterprise',
    //     },
    //     {
    //         name: 'Acme Corp.',
    //         logo: AudioWaveform,
    //         plan: 'Startup',
    //     },
    //     {
    //         name: 'Evil Corp.',
    //         logo: Command,
    //         plan: 'Free',
    //     },
    // ],
    navMain: [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: LayoutDashboard,
            isActive: true,
        },
        {
            title: 'Agenti',
            url: '/agenti',
            icon: Bot,
            items: [
                {
                    title: 'Genesis',
                    url: '#',
                },
                {
                    title: 'Explorer',
                    url: '#',
                },
                {
                    title: 'Quantum',
                    url: '#',
                },
            ],
        },
        {
            title: 'Tranzactii',
            url: '/tranzactii',
            icon: ArrowLeftRight,
            items: [
                {
                    title: 'Introduction',
                    url: '#',
                },
                {
                    title: 'Get Started',
                    url: '#',
                },
                {
                    title: 'Tutorials',
                    url: '#',
                },
                {
                    title: 'Changelog',
                    url: '#',
                },
            ],
        },
        {
            title: 'Statistici Individuale',
            url: '/individ',
            icon: ChartNoAxesColumnDecreasing,
            items: [
                {
                    title: 'General',
                    url: '#',
                },
                {
                    title: 'Team',
                    url: '#',
                },
                {
                    title: 'Billing',
                    url: '#',
                },
                {
                    title: 'Limits',
                    url: '#',
                },
            ],
        },
    ],
    // projects: [
    //     {
    //         name: 'Design Engineering',
    //         url: '#',
    //         icon: Frame,
    //     },
    //     {
    //         name: 'Sales & Marketing',
    //         url: '#',
    //         icon: PieChart,
    //     },
    //     {
    //         name: 'Travel',
    //         url: '#',
    //         icon: Map,
    //     },
    // ],
}

export function AppSidebar({ ...props }) {
    return (
        <Sidebar collapsible="icon" {...props}>
            {/* <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader> */}
            <SidebarContent>
                <NavMain items={data.navMain} />
                {/* <NavProjects projects={data.projects} /> */}
            </SidebarContent>
            <SidebarFooter>
                <Button className="border border-indigo-500 bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-slate-800">
                    Adaugare Date ➕
                </Button>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
