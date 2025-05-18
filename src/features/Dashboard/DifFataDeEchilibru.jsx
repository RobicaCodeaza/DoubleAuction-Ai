'use client'

import { TrendingUp } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart'

// 🔢 PASUL 1 – datele reale (preț real vs preț echilibru)
// const chartData = [
//     { round: 1, realPrice: 42, eqPrice: 45 },
//     { round: 2, realPrice: 47, eqPrice: 48 },
//     { round: 3, realPrice: 51, eqPrice: 50 },
//     { round: 4, realPrice: 49, eqPrice: 50 },
//     { round: 5, realPrice: 52, eqPrice: 51 },
//     { round: 6, realPrice: 54, eqPrice: 52 },
// ]

// 🔧 PASUL 2 – legendă și culori (violet + blue)
const chartConfig = {
    realPrice: {
        label: 'Preț real',
        color: '#3b82f6', // blue-500
    },
    eqPrice: {
        label: 'Preț echilibru',
        color: '#8b5cf6', // violet-500
    },
}

export function DifFataDeEchilibru({ difFataDeEchilibru }) {
    // console.log('difFataDeEchilibru', difFataDeEchilibru)

    return (
        <Card>
            <CardHeader>
                <CardTitle>Diferența față de prețul de echilibru</CardTitle>
                <CardDescription>
                    Compară prețul real al tranzacțiilor cu cel teoretic de
                    echilibru, indicând deviațiile sistemice ale pieței.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        data={difFataDeEchilibru}
                        margin={{ left: 12, right: 12 }}
                    >
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis
                            dataKey="runda"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={3}
                            label={{
                                value: 'Rundă',
                                position: 'insideBottom',
                                offset: 0,
                            }}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            label={{
                                value: 'date',
                                angle: -90,
                                position: 'insideLeft',
                            }}
                        />
                        <ChartTooltip
                            cursor={{ strokeDasharray: '3 3' }}
                            content={<ChartTooltipContent />}
                        />

                        <Area
                            dataKey="date"
                            type="monotone"
                            stroke="#3b82f6"
                            fill="#3b82f6"
                            fillOpacity={0.2}
                            strokeWidth={2}
                        />
                        <Area
                            dataKey="pretEchilibru"
                            type="monotone"
                            stroke="#8b5cf6"
                            fill="#8b5cf6"
                            fillOpacity={0.1}
                            strokeDasharray="5 5"
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium text-lime-500">
                    Deviația față de echilibru s-a redus cu 2 unități
                    <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                    Simulare: runde 1–6
                </div>
            </CardFooter>
        </Card>
    )
}
