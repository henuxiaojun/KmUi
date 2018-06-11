import Checkbox from '@/components/checkbox/km-checkbox'
import createComponent from '@/structure/createComponent'
import appendDirective from '@/structure/appendDirective'

Checkbox.install = (Vue, options) => {
    Vue.component(Checkbox.name, Checkbox)
    createComponent(Vue, Checkbox)
}
export default Checkbox
