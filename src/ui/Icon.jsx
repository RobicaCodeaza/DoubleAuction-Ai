import { cloneElement } from 'react'

const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
}

function Icon({ children, otherClasses, size = 'md' }) {
    const sizeClass = sizeClasses[size] || sizeClasses.md

    return (
        children &&
        cloneElement(children, {
            className: `flex items-center justify-center ${sizeClass} ${otherClasses || ''}`,
        })
    )
}

export default Icon
