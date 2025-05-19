import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
    'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-stone-950 focus-visible:ring-stone-950/50 focus-visible:ring-[3px] aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500 transition-[color,box-shadow] overflow-hidden',
    {
        variants: {
            variant: {
                default:
                    'bg-stone-900 text-stone-50 border-transparent dark:bg-stone-50 dark:text-stone-900',
                secondary:
                    'bg-stone-100 text-stone-900 border-transparent dark:bg-stone-800 dark:text-stone-50',
                destructive:
                    'bg-red-500 text-white border-transparent dark:bg-red-900',
                outline:
                    'text-stone-950 border-stone-200 dark:text-stone-50 dark:border-stone-800',
                muted: 'bg-stone-200 text-stone-700 border-transparent dark:bg-stone-700 dark:text-stone-200',
                cyan: 'bg-cyan-100 text-cyan-900 border-transparent dark:bg-cyan-900 dark:text-cyan-100',
                violet: 'bg-violet-100 text-violet-900 border-transparent dark:bg-violet-900 dark:text-violet-100',
                indigo: 'bg-indigo-100 text-indigo-900 border-transparent dark:bg-indigo-900 dark:text-indigo-100',
                lime: 'bg-lime-100 text-lime-900 border-transparent dark:bg-lime-900 dark:text-lime-100',
                rose: 'bg-rose-100 text-rose-900 border-transparent dark:bg-rose-900 dark:text-rose-100',
                success:
                    'bg-green-500 text-white border-transparent dark:bg-green-700',
                'second-success':
                    'bg-amber-500 text-white border-transparent dark:bg-yellow-700',
                'no-success':
                    'bg-red-500 text-white border-transparent dark:bg-red-700',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? Slot : 'span'

    return (
        <Comp
            data-slot="badge"
            className={cn(badgeVariants({ variant }), className)}
            {...props}
        />
    )
}

export { Badge, badgeVariants }
