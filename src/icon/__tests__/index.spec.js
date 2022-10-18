import Icon from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test icon plugin', () => {
  const app = createApp({}).use(Icon)
  expect(app.component(Icon.name)).toBeTruthy()
})

test('test icon snapshot', () => {
  const wrapper = mount(Icon)
  expect(wrapper.html()).toMatchSnapshot()
})
