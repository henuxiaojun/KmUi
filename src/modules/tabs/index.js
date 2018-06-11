import Tabs from '@/components/tabs/km-tabs'
import createComponent from '@/structure/createComponent'
import appendDirective from '@/structure/appendDirective'

Tabs.install = (Vue, options) => {
    Vue.component(Tabs.name, Tabs)
    createComponent(Vue, Tabs)
}
export default Tabs
