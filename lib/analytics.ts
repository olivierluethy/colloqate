declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'js',
      action: string,
      params?: Record<string, unknown>
    ) => void
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

export const trackButtonClick = (buttonName: string) => {
  trackEvent(`${buttonName}_click`, {
    button_name: buttonName,
  })
}

export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    depth_percentage: depth,
  })
}

export const trackBlogClick = (slug: string, title: string) => {
  trackEvent('blog_click', {
    blog_slug: slug,
    blog_title: title,
  })
}

export const trackAccessRequest = (location: string) => {
  trackEvent('access_request_submit', {
    location,
  })
}
