import { Badge } from '@/components/ui/badge'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { DetaliiEficientaAgent } from './DetaliiEficientaAgent'

const agents = [
    {
        id: 'Agent_01',
        role: 'vanzator',
        action: 'vanzare',
        amount: 50,
        price: 250,
        round: 1,
    },
    {
        id: 'Agent_02',
        role: 'cumparator',
        action: 'achizitie',
        amount: 30,
        price: 240,
        round: 1,
    },
    {
        id: 'Agent_03',
        role: 'vanzator',
        action: 'vanzare',
        amount: 40,
        price: 245,
        round: 2,
    },
    {
        id: 'Agent_04',
        role: 'cumparator',
        action: 'achizitie',
        amount: 60,
        price: 255,
        round: 2,
    },
]

export default function TabelStatisticiIndividuale() {
    return (
        <div className="tabland:[&>div]:max-h-[800px] tabport:[&>div]:max-h-[600px] phone:[&>div]:max-h-[400px] grid w-full [&>div]:max-h-[300px] [&>div]:rounded-lg [&>div]:border">
            <Table>
                <TableHeader>
                    <TableRow className="sticky top-0 bg-white after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-stone-200 dark:bg-stone-950 dark:after:bg-stone-800 [&>*]:whitespace-nowrap">
                        <TableHead className="pl-4">Agent</TableHead>
                        <TableHead>Tip</TableHead>
                        <TableHead>Achiziție/Vânzare</TableHead>
                        <TableHead>Valoare (RON)</TableHead>
                        <TableHead>Tranzacție</TableHead>
                        <TableHead>Runda</TableHead>
                        <TableHead>Statistici</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {agents.map((agent, idx) => (
                        <TableRow
                            key={idx}
                            className="odd:bg-stone-100/50 dark:odd:bg-stone-800/50 [&>*]:whitespace-nowrap"
                        >
                            <TableCell className="pl-4 font-medium">
                                {agent.id}
                            </TableCell>

                            <TableCell>
                                <Badge
                                    className={
                                        agent.role === 'vanzator'
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-lime-500 text-white'
                                    }
                                >
                                    {agent.role.charAt(0).toUpperCase() +
                                        agent.role.slice(1)}
                                </Badge>
                            </TableCell>

                            <TableCell>
                                <Badge className="bg-slate-500 text-white">
                                    {agent.action}
                                </Badge>
                            </TableCell>

                            <TableCell>
                                <Badge
                                    className={
                                        agent.role === 'vanzator'
                                            ? 'bg-cyan-500 text-white'
                                            : 'bg-rose-500 text-white'
                                    }
                                >
                                    {agent.price * agent.amount} RON
                                </Badge>
                            </TableCell>

                            <TableCell className="flex items-center gap-2">
                                <Badge className="border border-slate-300 bg-slate-100 text-slate-700">
                                    Preț: {agent.price}
                                </Badge>
                                <Badge className="border border-slate-300 bg-slate-100 text-slate-700">
                                    Cantitate: {agent.amount}
                                </Badge>
                            </TableCell>

                            <TableCell>
                                <Badge className="border border-slate-300 bg-slate-100 text-slate-700">
                                    Runda {agent.round}
                                </Badge>
                            </TableCell>

                            <TableCell>
                                <DetaliiEficientaAgent />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
