import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }) {
    return (
        <div
            data-slot="skeleton"
            className={cn(
                'animate-pulse rounded-md bg-stone-100 dark:bg-stone-800',
                className
            )}
            {...props}
        />
    )
}

export { Skeleton }
