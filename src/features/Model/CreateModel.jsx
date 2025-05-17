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
import { useCreateModel } from './useCreateModel'
import toast from 'react-hot-toast'

function CreateModel({ Trigger }) {
    const { isCreating, createModel } = useCreateModel()
    const form = useForm()
    // const { register, handleSubmit, reset, getValues, formState } = form
    const { handleSubmit, reset } = form
    // const { errors } = formState

    function onSubmit(data) {
        const cleanData = {
            nume: data.Nume,
            numar_agenti: parseInt(data.agentAlgoritmSimplu),
            ordine_ag_ml: parseInt(data.agentComportamentAdaptiv),
            ordine_ag_fuzzy: parseInt(data.agentFuzzy),
            ordine_ag_adap: parseInt(data.numarAgenti),
        }
        createModel(
            { ...cleanData },
            {
                onSuccess: (data) => {
                    console.log(data)
                    reset()
                },
            }
        )
        console.log(cleanData)
    }

    function onError(errors) {
        console.log(errors)
        toast.error('Check your form inputs')
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
                            onSubmit={handleSubmit(onSubmit, onError)}
                            className="w-full space-y-8"
                        >
                            <FormField
                                control={form.control}
                                name="Nume"
                                disabled={isCreating}
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
                                disabled={isCreating}
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
                                disabled={isCreating}
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
                                disabled={isCreating}
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
                                disabled={isCreating}
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
                            <DrawerClose asChild>
                                <Button
                                    type="submit"
                                    className={
                                        'w-full bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700'
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

export default CreateModel
