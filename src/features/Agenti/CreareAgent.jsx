import { Button } from '@/components/ui/button'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
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

function CreareAgent({ Trigger, agentNumber }) {
    const form = useForm()
    console.log('CreareAgent', Trigger)
    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
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
                            onSubmit={form.handleSubmit(onSubmit)}
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
                                        <FormControl>
                                            {/* <Input
                                                placeholder="shadcn"
                                                type={'select'}
                                                {...field}
                                            /> */}
                                            <Select
                                                value={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Tip agent AI" />
                                                </SelectTrigger>
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
                                        </FormControl>
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
                                        <FormControl>
                                            <Select
                                                value={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Tip agent" />
                                                </SelectTrigger>
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
                                        </FormControl>
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
                                        <FormControl>
                                            <Select
                                                value={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Tip sensibilitate" />
                                                </SelectTrigger>
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
                                        </FormControl>
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
                                        <FormControl>
                                            <Select
                                                value={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Considerare istoric" />
                                                </SelectTrigger>
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
                                        </FormControl>
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
                                        <FormControl>
                                            <Select
                                                value={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Comportamentul agentului" />
                                                </SelectTrigger>
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
                                        </FormControl>
                                        <FormDescription>
                                            Comportamentul agentului tau.
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
                                        <FormLabel>Prioritate agent</FormLabel>
                                        <FormControl>
                                            <Select
                                                value={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Prioritate" />
                                                </SelectTrigger>
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
                                        </FormControl>
                                        <FormDescription>
                                            Prioritatea agentului tau in piata.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className={
                                    'col-span-2 w-full bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700'
                                }
                            >
                                Creare Model
                            </Button>
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
