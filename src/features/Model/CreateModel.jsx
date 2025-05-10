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
import { useForm } from 'react-hook-form'

function CreateModel({ Trigger }) {
    const form = useForm()
    console.log('CreateModel', Trigger)
    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <span className="flex">{Trigger}</span>
            </DrawerTrigger>
            <DrawerContent className="bg-slate-50">
                <div className="mx-auto my-10 w-full max-w-max rounded-md border border-indigo-100 bg-white px-24 py-6 shadow-lg ring-1 shadow-indigo-900/5 ring-indigo-900/10">
                    {/* <DrawerHeader>
                        <DrawerTitle>Move Goal</DrawerTitle>
                        <DrawerDescription>
                            Set your daily activity goal.
                        </DrawerDescription>
                    </DrawerHeader> */}

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="w-full space-y-8"
                        >
                            <FormField
                                control={form.control}
                                name="Nume"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nume</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="shadcn"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Numele modelului tau.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="numarAgenti"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Numar Agenti</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="shadcn"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Numarul de agenti din model.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="agentFuzzy"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Agent - Fuzzy</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="shadcn"
                                                type={'number'}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Ordinea lui de executie in model.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="agentAlgoritmSimplu"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Agent - Algoritm simplu de invatare
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="shadcn"
                                                type={'number'}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Ordinea lui de executie in model.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="agentComportamentAdaptiv"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Agent - Comportament adaptiv
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type={'number'}
                                                placeholder="shadcn"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className={
                                    'w-full bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700'
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

export default CreateModel
