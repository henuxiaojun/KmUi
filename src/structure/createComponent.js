import createFactory from './createFactory'
export default function createComponent (Vue, Component, events) {
  const factory = createFactory.apply(this, arguments)
  const prototypeName = `$${Component.name.replace(/(\w+)-/, '')}`
  Vue[prototypeName] = Vue.prototype[prototypeName] = factory.create
  Component.$create = factory.create
  return factory
}
