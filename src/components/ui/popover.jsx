import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

import { cn } from '@/lib/utils'

function Popover({ ...props }) {
    return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({ ...props }) {
    return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({ className, ...props }) {
    return (
        <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
                side={null}
                align={null}
                sideOffset={0}
                data-slot="popover-content"
                className={cn(
                    // ✅ Force centering with !important
                    '!fixed !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2',
                    // ✅ Base styles
                    'z-50 w-80 rounded-md border border-stone-200 bg-white p-6 text-stone-950 shadow-md outline-none',
                    // ✅ Dark mode support
                    'dark:border-stone-800 dark:bg-stone-950 dark:text-stone-50',
                    // ✅ Animations
                    'data-[state=open]:animate-in data-[state=closed]:animate-out',
                    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                    'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
                    // ✅ Fix origin
                    'origin-[--radix-popover-content-transform-origin]',
                    className
                )}
                {...props}
            />
        </PopoverPrimitive.Portal>
    )
}

function PopoverAnchor({ ...props }) {
    return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
