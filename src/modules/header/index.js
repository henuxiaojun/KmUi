import Header from '@/components/header/km-header'
import createComponent from '@/structure/createComponent'
import appendDirective from '@/structure/appendDirective'

Header.install = (Vue, options) => {
    Vue.component(Header.name, Header)
    createComponent(Vue, Header)
}
export default Header
