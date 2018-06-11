import createInstance from './createInstance'

export default function createFactory(Vue, Component, events = []) {
  const api = {
    open(data, renderFn, options, mountEl) {
      if (typeof renderFn !== 'function' && options === undefined) {
        options = renderFn
        renderFn = null
      }
      const component = createInstance(Vue, Component, data, renderFn, options, mountEl)
      const instance = component.$parent
      const originRemove = component.remove = () => {
        originRemove && originRemove.call(this)
        instance.destroy()
      }
      const originShow = component.show = () => {
        originShow && originShow.call(this)
        return this
      }
      const originHide = component.hide = () => {
        originHide && originHide.call(this)
        return this
      }
      return component
    },
    create(config, renderFn) {
      /*保存调用该函数的实例*/
      let mountEl = document.body
      if (config && config.mountEl) {
        mountEl = config.mountEl
        delete config.mountEl
      }
      const ownInstance = this
      const renderData = handleRenderData(config, events)
      const options = {}
      /*判断调用的实例是否为vue实例*/
      if (!!ownInstance.$on) {
        options.parent = ownInstance
      }
      return api.open(renderData, renderFn, options, mountEl)
    }
  }
  return api
}

function handleRenderData(data = {}, events = []) {
  events = parseEvents(events)
  const props = { ...data }
  const on = {}
  for (const event in events) {
    if (events.hasOwnProperty(event)) {
      const propsName = events[event]
      if (props[propsName]) {
        on[event] = props[propsName]
      }
    }
  }
  return {
    props,
    on
  }
}

function parseEvents (events) {
  const parsedEvents = {}
  events.forEach(event => {
    parsedEvents[event] = `on-${event}`.replace(/-(\w)/g, (m, c) => {
      return c ? c.toUpperCase() : ''
    })
  })
  return parsedEvents
}
