import { Button } from '@/components/ui/button'
import {
    Drawer,
    DrawerClose,
    // DrawerClose,
    DrawerContent,
    // DrawerDescription,
    // DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { useForm } from 'react-hook-form'
import { useCreateAgent } from './useCreateAgent'
import toast from 'react-hot-toast'
import { useModelContext } from '@/context/ContextSimulare'

function CreareAgent({ Trigger, agentNumber }) {
    const { model } = useModelContext()
    const { isCreating, createAgent } = useCreateAgent()
    const form = useForm()
    // const { register, handleSubmit, reset, getValues, formState } = form
    const { handleSubmit, reset } = form
    // const { errors } = formState

    function onSubmit(data) {
        console.log(data)
        const cleanData = {
            nume: '1' + data.tipAgentAi,
            model_id: model.id,
            tip: data.tipAgentAi,
            rol: data.tipAgentPiata,
            produs: data.produs,
            pret: Number(data.pret),
            cantitate: Number(data.cantitate),
            prioritate: data.prioritate,
            comportament: data.comportament,
            sensibil_la_trend: data.sensibilitateTrend === 'da' ? true : false,
            memorie_istoric: data.considerareIstoric === 'da' ? true : false,
        }
        createAgent(
            { ...cleanData },
            {
                onSuccess: (data) => {
                    console.log(data)
                    reset()
                },
            }
        )
    }

    function onError(errors) {
        console.log(errors)
        toast.error('Check your form inputs')
    }
    return (
        <Drawer className="">
            <DrawerTrigger asChild>
                <span className="flex">{Trigger}</span>
            </DrawerTrigger>
            <DrawerContent className="bg-slate-50">
                <div className="tabland:px-20 phone:px-12 phone:text-md phone:mb-12 mx-auto my-12 mb-24 w-full max-w-max rounded-md border border-indigo-100 bg-white px-4 py-6 text-sm shadow-lg ring-1 shadow-indigo-900/5 ring-indigo-900/10">
                    <DrawerHeader className={'mb-4'}>
                        <DrawerTitle className={'text-center'}>
                            Numar Agent - {agentNumber}
                        </DrawerTitle>
                        {/* <DrawerDescription>
                            Acesta este agentul tau de tip{' '}
                            <span className="font-bold text-slate-500">
                                {agentType}
                            </span>
                            .
                        </DrawerDescription> */}
                    </DrawerHeader>

                    <Form {...form}>
                        <form
                            onSubmit={handleSubmit(onSubmit, onError)}
                            className="tabland:gap-10 phone:gap-8 phone:grid flex w-full grid-cols-2 flex-col gap-6"
                        >
                            <FormField
                                control={form.control}
                                name="tipAgentAi"
                                // eslint-disable-next-line no-unused-vars
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Selecteaza agent(AI)
                                        </FormLabel>
                                        {/* <Input
                                                placeholder="shadcn"
                                                type={'select'}
                                                {...field}
                                            /> */}
                                        <Select
                                            value={field.value ?? ''}
                                            disabled={isCreating}
                                            onValueChange={field.onChange}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Tip agent AI" />
                                                </SelectTrigger>
                                            </FormControl>

                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        AI
                                                    </SelectLabel>
                                                    <SelectItem value="llm">
                                                        LLM
                                                    </SelectItem>
                                                    <SelectItem value="fuzzy">
                                                        Fuzzy
                                                    </SelectItem>
                                                    <SelectItem value="comportamentAdaptiv">
                                                        Comportament Adaptiv
                                                    </SelectItem>
                                                    <SelectItem value="algoritmSimplu">
                                                        Algoritmul simplu de
                                                        invatare
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Tipul de agent pe care il
                                            doresti(AI).
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="tipAgentPiata"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Selecteaza Agent(piata)
                                        </FormLabel>
                                        <Select
                                            value={field.value ?? ''}
                                            onValueChange={field.onChange}
                                            disabled={isCreating}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Tip agent" />
                                                </SelectTrigger>
                                            </FormControl>

                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="vanzator">
                                                        Vanzator
                                                    </SelectItem>
                                                    <SelectItem value="cumparator">
                                                        Cumparator
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Tipul de agent pe care il
                                            doresti(piata).
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="produs"
                                render={({ field }) => (
                                    <FormItem className="col-span-2">
                                        <FormLabel>
                                            Selecteaza produsul
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type={'text'}
                                                placeholder="PR1"
                                                {...field}
                                                value={field.value ?? ''}
                                                disabled={isCreating}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Produsul dorit de agentul tau.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pret"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Pretul Cerut/Rezerva
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type={'number'}
                                                placeholder="50"
                                                {...field}
                                                disabled={isCreating}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Pretul cerut de agentul tau.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="cantitate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Cantitatea Ceruta/Oferita
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type={'number'}
                                                placeholder="10"
                                                {...field}
                                                disabled={isCreating}
                                                value={field.value ?? ''}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Cantitatea ceruta de agentul tau.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="sensibilitateTrend"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Sensibilitatea la trend
                                        </FormLabel>
                                        <Select
                                            value={field.value ?? ''}
                                            disabled={isCreating}
                                            onValueChange={field.onChange}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Tip sensibilitate" />
                                                </SelectTrigger>
                                            </FormControl>

                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="da">
                                                        Da
                                                    </SelectItem>
                                                    <SelectItem value="nu">
                                                        Nu
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Sensibilitatea agentului tau la
                                            trendul pietei.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="considerareIstoric"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Ia in considerare istoricul
                                        </FormLabel>
                                        <Select
                                            value={field.value ?? ''}
                                            disabled={isCreating}
                                            onValueChange={field.onChange}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Considerare istoric" />
                                                </SelectTrigger>
                                            </FormControl>

                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="da">
                                                        Da
                                                    </SelectItem>
                                                    <SelectItem value="nu">
                                                        Nu
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Agentul tau va lua sau nu in
                                            considerare istoricul pietei.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="comportament"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tip comportament</FormLabel>
                                        <Select
                                            value={field.value ?? ''}
                                            disabled={isCreating}
                                            onValueChange={field.onChange}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Comportamentul agentului" />
                                                </SelectTrigger>
                                            </FormControl>

                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="pasiv">
                                                        Pasiv
                                                    </SelectItem>
                                                    <SelectItem value="agresiv">
                                                        Agresiv
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Comportamentul agentului tau.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="prioritate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Prioritate agent</FormLabel>

                                        <Select
                                            value={field.value ?? ''}
                                            disabled={isCreating}
                                            onValueChange={field.onChange}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Prioritate" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="pret">
                                                        Pret
                                                    </SelectItem>
                                                    <SelectItem value="cantitate">
                                                        Cantitate
                                                    </SelectItem>
                                                    <SelectItem value="agresiv">
                                                        Viteza
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Prioritatea agentului tau in piata.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <DrawerClose asChild>
                                <Button
                                    type="submit"
                                    className={
                                        'col-span-2 w-full bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700'
                                    }
                                >
                                    Creare Model
                                </Button>
                            </DrawerClose>
                        </form>
                    </Form>
                    {/* <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter> */}
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default CreareAgent
