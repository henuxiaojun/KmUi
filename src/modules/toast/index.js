import Toast from '@/components/toast/km-toast'
import createComponent from '@/structure/createComponent'

Toast.install = (Vue, options) => {
  Vue.component(Toast.name, Toast)
  createComponent(Vue, Toast)
}

export default Toast

