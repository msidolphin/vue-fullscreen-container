export function debounce (callback, wait) {
    let timer
  
    return function () {
        if (timer) {
            clearTimeout(timer)
        }

        const [context, args] = [this, arguments]

        timer = setTimeout(() => {
            callback.apply(context, args)
        }, wait)
    }
}

export function observerDom (dom, callback) {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
  
    const observer = new MutationObserver(callback)
  
    observer.observe(dom, { attributes: true, attributeFilter: ['style'], attributeOldValue: true })
  
    return observer
}