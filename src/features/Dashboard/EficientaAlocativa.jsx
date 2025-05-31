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
    // ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart'
// const chartData = [
//     { round: 1, efficiency: 0.72 },
//     { round: 2, efficiency: 0.75 },
//     { round: 3, efficiency: 0.81 },
//     { round: 4, efficiency: 0.78 },
//     { round: 5, efficiency: 0.83 },
//     { round: 6, efficiency: 0.87 },
// ]

const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: 'hsl(var(--chart-1))',
    },
    mobile: {
        label: 'Mobile',
        color: 'hsl(var(--chart-2))',
    },
}

export function EficientaAlocativa({ eficientaAlocativa, runde }) {
    // console.log('eficientaAlocativa', eficientaAlocativa)

    return (
        <Card>
            <CardHeader>
                <CardTitle>Eficiența alocativă </CardTitle>
                <CardDescription>
                    Arată acumularea valorii economice generate de tranzacții în
                    timp.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={eficientaAlocativa}
                        margin={{
                            left: -20,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={true} />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            label={{
                                value: 'Eficiență',
                                angle: -90,
                                position: 'insideLeft',
                                dy: -30,
                                dx: -10,
                                style: { textAnchor: 'middle' },
                            }}
                        />
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

                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent />}
                        />
                        <Area
                            dataKey="date"
                            type="monotone"
                            fill="#4f46e5"
                            fillOpacity={0.4}
                            stroke="#4f46e5"
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium text-lime-500">
                            Eficiența a crescut cu +5.2% după intervenția AI
                            <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Simulare: runde 1–{runde}
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
