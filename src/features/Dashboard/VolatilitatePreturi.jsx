'use client'

import { TrendingUp } from 'lucide-react'
import {
    CartesianGrid,
    LabelList,
    Line,
    LineChart,
    XAxis,
    YAxis,
} from 'recharts'

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

// 🔢 PASUL 1 – date corecte: coeficient de variație (0–1)
// const chartData = [
//     { round: 1, volatility: 0.32 },
//     { round: 2, volatility: 0.28 },
//     { round: 3, volatility: 0.24 },
//     { round: 4, volatility: 0.29 },
//     { round: 5, volatility: 0.22 },
//     { round: 6, volatility: 0.18 },
// ]

// 🔧 PASUL 2 – legendă/culoare
const chartConfig = {
    volatility: {
        label: 'Coeficient de variație',
        color: '#f59e0b', // amber-500
    },
}

export function VolatilitatePreturi({ volatilitatePreturi, runde }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Volatilitatea prețurilor</CardTitle>
                <CardDescription>
                    Măsoară instabilitatea prețurilor prin coeficientul de
                    variație (CV), raport între deviația standard și media
                    prețurilor într-o rundă.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        data={volatilitatePreturi}
                        margin={{ top: 20, left: 12, right: 12 }}
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
                            domain={[0, 0.5]}
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            label={{
                                value: 'CV',
                                angle: -90,
                                position: 'insideLeft',
                            }}
                            tickFormatter={(val) => val.toFixed(2)}
                        />
                        <ChartTooltip
                            cursor={{ strokeDasharray: '3 3' }}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Line
                            dataKey="date"
                            type="monotone"
                            stroke="#f59e0b"
                            strokeWidth={2}
                            dot={{ fill: '#f59e0b' }}
                            activeDot={{ r: 6 }}
                        >
                            <LabelList
                                dataKey="date"
                                position="top"
                                offset={12}
                                fill="#f59e0b"
                                fontSize={12}
                                formatter={(val) => val.toFixed(2)}
                            />
                        </Line>
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium text-lime-500">
                    Volatilitatea a scăzut cu 0.14 unități
                    <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                    Simulare: runde 1–{runde}
                </div>
            </CardFooter>
        </Card>
    )
}
