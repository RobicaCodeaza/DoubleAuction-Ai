import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Icon from '@/ui/Icon'

/**
 * A simple demo of a dialog, showcasing the basic usage of the Dialog component,
 * along with some of its sub-components like DialogTrigger, DialogContent, DialogHeader,
 * DialogFooter, DialogTitle, DialogDescription, and Label.
 *
 * @example
 * <DialogDemo />
 */
export function StergereAgent() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Icon>
                        <Trash className="mr-2 h-4 w-4" />
                    </Icon>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Stergere Agent</DialogTitle>
                    <DialogDescription>
                        Esti sigur ca vrei sa stergi acest agent? Aceasta
                        actiune nu poate fi anulata.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button type="submit">Sterge</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
