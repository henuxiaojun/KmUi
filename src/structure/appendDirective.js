export default function (Vue, Component, params) {
  const componentName = Component.name.replace(/(\w+)-/, '')
  function handlerFn (value) {
    if (typeof value === 'object') {
      return value
    }
    let cacheObj = {}
    cacheObj[params] = value
    return  params ? cacheObj : {isShow: value}
  }
  Vue.directive(componentName, {
    bind(el, binding, vnode) {
      if (!(`${componentName}Instance` in vnode.context)) {
        if (window.getComputedStyle(el, null).position === 'static') {
          el.style.position = 'relative'
        }
        vnode.context[`${componentName}Instance`] = vnode.context[`$${componentName}`](Object.assign({mountEl: el}, handlerFn(binding.value)))
      }
    },
    update(el, binding, vnode) {
      vnode.context[`${componentName}Instance`].$updateProps(handlerFn(binding.value))
    }
  })
}
