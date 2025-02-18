import { useReportWebVitals } from 'next/app'
import type { NextWebVitalsMetric } from 'next/app'

useReportWebVitals((metric: NextWebVitalsMetric) => {
  const body = JSON.stringify(metric)
  const url = 'https://example.com/analytics'

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body)
  } else {
    fetch(url, { body, method: 'POST', keepalive: true })
  }
})
