import Input from '@/components/input/km-input'
import createComponent from '@/structure/createComponent'
import appendDirective from '@/structure/appendDirective'

Input.install = (Vue, options) => {
    Vue.component(Input.name, Input)
    createComponent(Vue, Input)
}
export default Input
