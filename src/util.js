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
