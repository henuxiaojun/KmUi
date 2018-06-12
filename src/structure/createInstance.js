export default function createInstance (Vue, Component, renderData, renderFn, options = {}, mountEl) {
  console.log();

  if (!renderData.props.isShow && Component.props.isShow !== undefined) {
    renderData.props.isShow = true
  }
  console.log(Component);
  const instance = new Vue({
    ...options,
    render(createElement) {
      let children = renderFn && renderFn(createElement)
      children = children ? [].concat.call(children) : []
      return createElement(Component, { ...renderData }, children)
    },
    methods: {
      init() {
        mountEl.appendChild(this.$el)
      },
      destroy() {
        this.$destroy()
        mountEl.removeChild(this.$el)
      }
    },
  })
  instance.$mount()
  instance.init()
  const component = instance.$children[0]
  component.$updateProps = (props) => {
    Object.assign(renderData.props, props)
    instance.$forceUpdate()
  }
  return component
}
