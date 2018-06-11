import Badge       from './modules/badge'
import Button      from './modules/button'
import Checkbox    from './modules/checkbox'
import Contentlist from './modules/contentlist'
import Dialog      from './modules/dialog'
import Header      from './modules/header'
import Input       from './modules/input'
import Loading     from './modules/loading'
import Logs        from './modules/logs'
import Nav         from './modules/nav'
import Nodata      from './modules/nodata'
import Progress    from './modules/progress'
import Scroll      from './modules/scroll'
import Table       from './modules/table'
import Tabs        from './modules/tabs'
import Toast       from './modules/toast'


function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  const components = [
    Badge,
    Button,
    Checkbox,
    Contentlist,
    Dialog,
    Header,
    Input,
    Loading,
    Logs,
    Nav,
    Nodata,
    Progress,
    Scroll,
    Table,
    Tabs,
    Toast
  ]
  components.forEach((Component) => {
    Component.install(Vue)
  })
}

let KmPlugin = {
  install
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default KmPlugin
