import { AppSidebar } from '@/components/app-sidebar'
import { Separator } from '@/components/ui/separator'
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { StepForward, StepBack } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Outlet } from 'react-router'
import Icon from './../ui/Icon'
import CreateModel from '@/features/Model/CreateModel'
import { useModels } from '@/features/Model/useGetModels'
import { useModelContext } from '@/context/ContextSimulare'

export default function AppLayout() {
    const { models } = useModels()
    const { model, selecteazaModel } = useModelContext()

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="tabport:px-8 flex items-center justify-between gap-2 px-4 py-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-auto">
                    <div className="tabport:px-4 flex items-center px-2">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                    </div>
                    <div className="flex flex-1 items-center justify-between">
                        <Select
                            className="w-24"
                            value={model?.id.toString()}
                            onValueChange={(val) =>
                                selecteazaModel(Number(val))
                            }
                        >
                            <SelectTrigger className="phone:w-[180px] w-[100px]">
                                <SelectValue placeholder="Selecteaza un model" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectGroup>
                                        <SelectLabel>Modele</SelectLabel>
                                        {models?.map((model) => (
                                            <SelectItem
                                                key={model.id}
                                                value={model.id.toString()}
                                            >
                                                {model.nume}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <div className="tabland:flex-row flex flex-col items-center gap-2">
                            <CreateModel
                                Trigger={
                                    <Button
                                        size={'sm'}
                                        className="border border-indigo-500 bg-white text-slate-700 hover:bg-indigo-50 hover:text-slate-800 active:bg-indigo-100"
                                    >
                                        Adauga Model ➕
                                    </Button>
                                }
                            ></CreateModel>
                            <Button
                                size={'sm'}
                                className="my-0 border border-indigo-500 bg-white text-slate-700 hover:bg-indigo-50 hover:text-slate-800 active:bg-indigo-100"
                            >
                                Adauga Data ➕
                            </Button>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-sm text-slate-500">
                                Etapa simulare
                            </span>

                            <div className="flex gap-1">
                                <Button
                                    size="sm"
                                    className="bg-indigo-200 text-indigo-800 hover:bg-indigo-300 active:bg-indigo-400"
                                >
                                    <Icon>
                                        <StepBack></StepBack>
                                    </Icon>
                                </Button>
                                <Button
                                    size="sm"
                                    className={
                                        'bg-indigo-200 text-indigo-800 hover:bg-indigo-300 active:bg-indigo-400'
                                    }
                                >
                                    <Icon>
                                        <StepForward></StepForward>
                                    </Icon>
                                </Button>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="phone:p-4 mt-4 flex flex-1 flex-col gap-4 border-t border-t-slate-200 p-2 py-4 dark:border-t-slate-700">
                    <Outlet></Outlet>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
