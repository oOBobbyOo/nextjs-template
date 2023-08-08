import { showLogger } from '@/constant/env'
import { isClient } from './is'

export default function logger(object: unknown): void {
  if (!showLogger) return

  const pathname = isClient && window?.location?.pathname ? window?.location.pathname : ''

  console.log(
    '%c ============== INFO LOG ============== \n',
    'color: #22D3EE',
    `${pathname ? '=> pathname: ' + pathname : ''} \n`,
    object
  )
}
