import Nav from '@/components/nav/km-nav'
import createComponent from '@/structure/createComponent'
import appendDirective from '@/structure/appendDirective'

Nav.install = (Vue, options) => {
    Vue.component(Nav.name, Nav)
    createComponent(Vue, Nav)
}
export default Nav
