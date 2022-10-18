<template>
  <div class="var-icon"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'

export default defineComponent({
  name: 'MqIcon',
  props,
  setup(props) {},
})
</script>

<style lang="less">
@import './icon.less';
</style>
