import Button from '@/components/button/km-button'
import createComponent from '@/structure/createComponent'
import appendDirective from '@/structure/appendDirective'

Button.install = (Vue, options) => {
    Vue.component(Button.name, Button)
    createComponent(Vue, Button)
}
export default Button
