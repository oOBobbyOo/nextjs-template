import * as React from 'react'
import { cn } from '@/lib/utils'

export function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn('flex max-w-[980px] flex-col items-start gap-2 px-4 pt-8 md:pt-12', className)}
      {...props}
    >
      {children}
    </section>
  )
}
