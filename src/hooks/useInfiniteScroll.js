import { useCallback, useEffect, useRef, useState } from 'react'

const useInfiniteScroll = () => {
  const renderTriggerRef = useRef(null)
  const [isTriggerInView, setIsTriggerInView] = useState(false)
  const inView = {
    current: isTriggerInView,
    set(isOn) {
      setIsTriggerInView(isOn)
    },
  }

  const rendererObserver = useCallback(entries => {
    entries.forEach(entry => setIsTriggerInView(entry.isIntersecting))
  }, [])

  useEffect(() => {
    let renderTrigger = null

    const options = {
      rootMargin: '300px',
      threshold: 0,
    }

    const observer = new IntersectionObserver(rendererObserver, options)

    if (renderTriggerRef.current) {
      observer.observe(renderTriggerRef.current)
      renderTrigger = renderTriggerRef.current
    }

    return () => {
      if (renderTrigger) observer.unobserve(renderTrigger)
    }
  }, [renderTriggerRef, rendererObserver])

  return [renderTriggerRef, inView]
}

export default useInfiniteScroll
