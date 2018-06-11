import Nodata from '@/components/nodata/km-nodata'
import createComponent from '@/structure/createComponent'
import appendDirective from '@/structure/appendDirective'

Nodata.install = (Vue, options) => {
  Vue.component(Nodata.name, Nodata)
  appendDirective(Vue, Nodata, 'isShow')
  createComponent(Vue, Nodata)
}


export default Nodata
