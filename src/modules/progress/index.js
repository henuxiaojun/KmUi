import Progress from '@/components/progress/km-progress'
import createComponent from '@/structure/createComponent'
import appendDirective from '@/structure/appendDirective'

Progress.install = (Vue, options) => {
    Vue.component(Progress.name, Progress)
    createComponent(Vue, Progress)
}
export default Progress
