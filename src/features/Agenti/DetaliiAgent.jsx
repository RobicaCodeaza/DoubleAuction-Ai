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
import { analizeazaTranzactii } from '@/lib/helpers'
import { useAgentTransactii } from './useGetAgentTransaction'
// import Empty from '@/ui/Empty'
export function DetaliiAgent({
    nume,
    comportament,
    ascultaTrend,
    invataIstoric,
    prioritate,
    rol,
    agentId,
    modelId,
}) {
    const agent = {
        nume,
        comportament,
        ascultaTrend,
        invataIstoric,
        prioritate,
        rol,
        agentId,
    }
    console.log('agentId', agentId)

    const { tranzactiiAgent, isLoading } = useAgentTransactii(modelId, agentId)

    if (isLoading) {
        return (
            <div className="flex h-full w-full items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900"></div>
            </div>
        )
    }

    // if (!tranzactiiAgent)
    //     return <Empty resource="Tranzactii" Component={<></>} />

    const { numarTranzactii, totalCantitate, totalValoare, mediePret } =
        analizeazaTranzactii(tranzactiiAgent)
    console.log(
        'numarTranzactii',
        numarTranzactii,
        'totalCantitate',
        totalCantitate,
        'totalValoare',
        totalValoare,
        'mediePret',
        mediePret
    )

    const badgeColor = (key, value) => {
        switch (key) {
            case 'comportament':
                return value === 'agresiv' ? 'destructive' : 'secondary'
            case 'ascultaTrend': {
                return value === true ? 'cyan' : 'muted'
            }
            case 'invataIstoric': {
                return value === true ? 'violet' : 'outline'
            }
            case 'prioritate':
                return value === 'pret'
                    ? 'indigo'
                    : value === 'cantitate'
                      ? 'lime'
                      : 'rose'
            default: {
                return 'default'
            }
        }
    }
    const eficienta = {
        comportament: 72,
        pret: 85,
        cantitate: 65,
        viteza: 90,
        trend: 78,
        istoric: 69,
    }

    const efficiencyBadge = (value) => {
        if (value >= 80) return 'success'
        if (value > 60 && value < 80) return 'second-success'
        if (value <= 60) return 'no-success'
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
                    <DialogTitle className="text-cyan-600">
                        Detalii agent -{' '}
                        <span className="font-semibold text-cyan-700 uppercase">
                            {rol}
                        </span>
                    </DialogTitle>
                    <DialogDescription
                        className={'mt-2 flex items-center gap-2'}
                    >
                        <Badge
                            className={
                                agent.rol === 'vanzator'
                                    ? 'bg-cyan-500 text-white'
                                    : 'bg-rose-500 text-white'
                            }
                        >
                            Tranzactionat: {totalValoare} RON
                        </Badge>
                        <Badge className="border border-slate-300 bg-slate-100 text-slate-700">
                            Preț: {mediePret}
                        </Badge>
                        <Badge className="border border-slate-300 bg-slate-100 text-slate-700">
                            Cantitate: {totalCantitate}
                        </Badge>
                    </DialogDescription>
                </DialogHeader>
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
                                {value === true
                                    ? 'Da'
                                    : value === false
                                      ? 'Nu'
                                      : value}
                            </Badge>
                        </div>
                    ))}
                </div>
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
                <DialogFooter>
                    {/* <Button variant="secondary" disabled>
                        Închis
                    </Button> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
