import Loading from '@/components/loading/km-loading'
import createComponent from '@/structure/createComponent'
import appendDirective from '@/structure/appendDirective'

Loading.install = (Vue, options) => {
  Vue.component(Loading.name, Loading)
  appendDirective(Vue, Loading)
  createComponent(Vue, Loading)
}

export default Loading
