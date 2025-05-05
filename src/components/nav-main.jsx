'use client'

import { ChevronRight } from 'lucide-react'

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import { NavLink } from 'react-router-dom'

export function NavMain({ items }) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel className="py-8 text-center text-sm font-medium">
                Double Auction
            </SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <Collapsible
                        asChild
                        defaultOpen={item.isActive}
                        className="group/collapsible"
                        key={item.title}
                    >
                        <NavLink to={item.url}>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    c
                                    tooltip={item.title}
                                    to={item.url}
                                >
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </NavLink>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}
