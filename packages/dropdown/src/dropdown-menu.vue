<template>
  <ul
    :class="[size && `el-dropdown-menu--${size}`]"
    class="el-dropdown-menu"
    @mouseenter.stop="show"
    @mouseleave.stop="hide"
  >
    <slot></slot>
  </ul>
</template>
<script lang='ts'>
import { defineComponent, getCurrentInstance, onMounted, ref } from 'vue'
import { useDropdown, initDropdownDomEvent } from './useDropdown'

export default defineComponent({
  name: 'ElDropdownMenu',
  setup() {
    const { _elDropdownSize, elDropdown } = useDropdown()
    const size = _elDropdownSize.value
    const _trigger = ref(null)
    function show() {
      elDropdown.show?.()
    }
    function hide() {
      if (elDropdown.trigger.value === 'click') return
      _hide()
    }
    function _hide() {
      elDropdown.hide?.()
    }

    onMounted(() => {
      const dropdownMenu = getCurrentInstance()
      _trigger.value = elDropdown.triggerElm.value
      initDropdownDomEvent(dropdownMenu, _trigger.value, elDropdown.instance)
    })

    return {
      size,
      show,
      hide,
      _trigger,
      _hide,
    }
  },
})
</script>
<style>
.el-dropdown-menu {
  position: relative;
  margin: 0;
  box-shadow: none;
}
</style>
