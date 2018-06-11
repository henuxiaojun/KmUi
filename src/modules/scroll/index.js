import Scroll from '@/components/scroll/km-scroll'
import createComponent from '@/structure/createComponent'
import appendDirective from '@/structure/appendDirective'

Scroll.install = (Vue, options) => {
    Vue.component(Scroll.name, Scroll)
    createComponent(Vue, Scroll)
}
export default Scroll
