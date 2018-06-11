import Logs from '@/components/logs/km-logs'
import createComponent from '@/structure/createComponent'
import appendDirective from '@/structure/appendDirective'

Logs.install = (Vue, options) => {
    Vue.component(Logs.name, Logs)
    createComponent(Vue, Logs)
}
export default Logs
