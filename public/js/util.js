const _ = {
    $: (selector, base = document) => base.querySelector(selector),
    $All: (selector, base = document) => base.querySelector(selector)
}

export { _ }