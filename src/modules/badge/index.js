import Badge from '@/components/badge/km-badge'
import createComponent from '@/structure/createComponent'
import appendDirective from '@/structure/appendDirective'

Badge.install = (Vue, options) => {
  Vue.component(Badge.name, Badge)
  appendDirective(Vue, Badge)
  /*Vue.directive('badge', {
    update(el, binding, vnode, oldvnode) {
      if (!vnode.context.badgeInstance) {
        if (window.getComputedStyle(el, null).position === 'static') {
          el.style.position = 'relative'
        }
        vnode.context.badgeInstance = vnode.context.$badge({
          mountEl: el
        })
      }
      vnode.context.badgeInstance.$updateProps({count: binding.value})
    }
  })*/
  createComponent(Vue, Badge)
}

export default Badge
