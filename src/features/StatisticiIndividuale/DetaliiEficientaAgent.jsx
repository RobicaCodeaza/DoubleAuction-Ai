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

export function DetaliiEficientaAgent() {
    const agent = {
        nume: 'Agent 7',
        comportament: 'Agresiv',
        ascultaTrend: 'Ridicat',
        invataIstoric: 'Da',
        prioritate: 'Preț',
    }

    const eficienta = {
        comportament: 72,
        pret: 85,
        cantitate: 65,
        viteza: 90,
        trend: 78,
        istoric: 69,
    }

    const badgeColor = (key, value) => {
        switch (key) {
            case 'comportament':
                return value === 'Agresiv' ? 'destructive' : 'secondary'
            case 'ascultaTrend':
                return value === 'Ridicat' ? 'cyan' : 'muted'
            case 'invataIstoric':
                return value === 'Da' ? 'violet' : 'outline'
            case 'prioritate':
                return value === 'Preț'
                    ? 'indigo'
                    : value === 'Cantitate'
                      ? 'lime'
                      : 'rose'
            default:
                return 'default'
        }
    }

    const efficiencyBadge = (value) => {
        if (value >= 80) return 'success'
        if (value >= 60) return 'secondary'
        return 'destructive'
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
                        Aici sunt afișate trăsăturile de bază și eficiențele
                        acestui agent.
                    </DialogDescription>
                </DialogHeader>

                {/* Statistici comportament */}
                <div className="grid gap-4 py-4">
                    <h4 className="text-sm font-medium text-slate-600 uppercase">
                        Profil Comportamental
                    </h4>
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
                                {value}
                            </Badge>
                        </div>
                    ))}
                </div>

                {/* Eficiențe */}
                <div className="py-2">
                    <h4 className="mb-2 text-sm font-medium text-slate-600 uppercase">
                        Statistici de Eficiență
                    </h4>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {Object.entries(eficienta).map(([key, value]) => (
                            <div
                                key={key}
                                className="flex items-center justify-between rounded-md border px-3 py-2"
                            >
                                <Label className="text-muted-foreground text-sm capitalize">
                                    {key}
                                </Label>
                                <Badge
                                    variant={efficiencyBadge(value)}
                                    className="px-3 py-1 text-sm"
                                >
                                    {value}%
                                </Badge>
                            </div>
                        ))}
                    </div>
                </div>

                {/* <DialogFooter>
                    <Button variant="secondary">Închide</Button>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>
    )
}
