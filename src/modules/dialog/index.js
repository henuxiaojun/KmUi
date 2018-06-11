import Dialog from '@/components/dialog/km-dialog'
import createComponent from '@/structure/createComponent'

Dialog.install = (Vue, options) => {
  Vue.component(Dialog.name, Dialog)
  createComponent(Vue, Dialog, ['prompt', 'confirm', 'close', 'choice'])
}

export default Dialog
