import { useCallback, useEffect } from 'react'
import useInfiniteScroll from '../hooks/useInfiniteScroll'

const InfiniteScroll = ({ children, callback, trigger }) => {
  const [renderTriggerRef, inView] = useInfiniteScroll()

  const callbackHandler = useCallback(() => {
    inView.set(false)

    callback()
  }, [inView, callback])

  useEffect(() => {
    if (!inView.current) return

    callbackHandler()
  }, [inView, callbackHandler])

  return (
    <>
      {children}
      {trigger(renderTriggerRef)}
    </>
  )
}

export default InfiniteScroll
