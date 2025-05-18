import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

export function DetaliiAgent({
    nume,
    comportament,
    ascultaTrend,
    invataIstoric,
    prioritate,
}) {
    const agent = {
        nume,
        comportament,
        ascultaTrend,
        invataIstoric,
        prioritate,
    }
    console.log('agent', agent)

    const badgeColor = (key, value) => {
        switch (key) {
            case 'comportament':
                return value === 'Agresiv' ? 'destructive' : 'secondary'
            case 'ascultaTrend': {
                console.log('ascultaTrend', value === true, value)
                return value === true ? 'cyan' : 'muted'
            }
            case 'invataIstoric':
                return value === 'true' ? 'violet' : 'outline'
            case 'prioritate':
                return value === 'pret'
                    ? 'indigo'
                    : value === 'cantitate'
                      ? 'lime'
                      : 'rose'
            default: {
                console.log('badgeColor', key, value)
                return 'default'
            }
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <span className="flex">
                    <Button variant="outline">Detalii</Button>
                </span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[520px]">
                <DialogHeader>
                    <DialogTitle className="text-indigo-600">
                        Detalii agent
                    </DialogTitle>
                    <DialogDescription>
                        Aici sunt afișate trăsăturile de bază ale
                        comportamentului acestui agent.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {Object.entries(agent).map(([key, value]) => (
                        <div
                            key={key}
                            className="flex items-center justify-between border-b pb-2"
                        >
                            <Label className="text-muted-foreground text-sm capitalize">
                                {key.replace(/([A-Z])/g, ' $1')}
                            </Label>
                            <Badge
                                variant={badgeColor(key, value)}
                                className="px-3 py-1 text-sm"
                            >
                                {value === true
                                    ? 'Da'
                                    : value === false
                                      ? 'Nu'
                                      : value}
                            </Badge>
                        </div>
                    ))}
                </div>
                <DialogFooter>
                    {/* <Button variant="secondary" disabled>
                        Închis
                    </Button> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
