'use client'

import { TrendingUp } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts'

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

// 🔢 PASUL 1 – date corecte: proporția agenților care tranzacționează în fiecare rundă
const chartData = [
    { round: 1, tradeRate: 0.45 },
    { round: 2, tradeRate: 0.52 },
    { round: 3, tradeRate: 0.63 },
    { round: 4, tradeRate: 0.68 },
    { round: 5, tradeRate: 0.72 },
    { round: 6, tradeRate: 0.77 },
]

// 🔧 PASUL 2 – configurare grafic
const chartConfig = {
    tradeRate: {
        label: 'Rată tranzacționare',
        color: '#0d9488', // teal-600
    },
}

export function RataTranzactionare() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Rata de tranzacționare</CardTitle>
                <CardDescription>
                    Proporția agenților care au efectuat cel puțin o tranzacție
                    în fiecare rundă de simulare.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart data={chartData} margin={{ top: 20 }}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis
                            dataKey="round"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            label={{
                                value: 'Rundă',
                                position: 'insideBottom',
                                offset: 0,
                            }}
                        />
                        <YAxis
                            domain={[0, 1]}
                            tickMargin={8}
                            tickLine={false}
                            axisLine={false}
                            label={{
                                value: 'Rată',
                                angle: -90,
                                position: 'insideLeft',
                            }}
                            tickFormatter={(val) =>
                                `${(val * 100).toFixed(0)}%`
                            }
                        />
                        <ChartTooltip
                            cursor={{ fill: 'transparent' }}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar
                            dataKey="tradeRate"
                            fill="#0d9488" // teal-600
                            radius={8}
                        >
                            <LabelList
                                dataKey="tradeRate"
                                position="top"
                                offset={12}
                                fill="#0d9488"
                                formatter={(val) =>
                                    `${(val * 100).toFixed(0)}%`
                                }
                                fontSize={12}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium text-lime-500">
                    +5.2% după introducerea AI
                    <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                    Simulare: runde 1–6
                </div>
            </CardFooter>
        </Card>
    )
}
