import Table from '@/components/table/km-table'
import createComponent from '@/structure/createComponent'
import appendDirective from '@/structure/appendDirective'

Table.install = (Vue, options) => {
    Vue.component(Table.name, Table)
    createComponent(Vue, Table)
}
export default Table
