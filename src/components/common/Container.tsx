import { PropsWithChildren } from 'react'
import { cn } from 'src/lib/utils'

const Container = ({
    children,
    className
}:
    PropsWithChildren
    &
    { className?: string }
) => {
    return (
        <div className={cn("relative container mx-auto px-4 xl:px-10 xl:!max-w-[1440px]", className)}>
            {children}
        </div>
    )
}

export default Container
