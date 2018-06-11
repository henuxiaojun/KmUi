import Contentlist from '@/components/contentlist/km-contentlist'
import createComponent from '@/structure/createComponent'
import appendDirective from '@/structure/appendDirective'

Contentlist.install = (Vue, options) => {
    Vue.component(Contentlist.name, Contentlist)
    createComponent(Vue, Contentlist)
}
export default Contentlist
