<template>
  <button
    :class="{ 'wheel-checked': value }"
    @click="toggleChecked"
    class="wheel-switch"
  >
    <span></span>
  </button>
</template>
<script lang="ts">
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggleChecked = () => {
      context.emit("update:value", !props.value);
    };

    return {
      toggleChecked,
    };
  },
};
</script>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
$bg: #1890ff;
.wheel-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: 11px;
  position: relative;
  transition: all 350ms;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: #fff;
    border-radius: 11px;
    transition: all 350ms;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.wheel-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}

.wheel-switch.wheel-checked > span {
  left: calc(100% - #{$h2} - 2px);
}
.wheel-switch.wheel-checked {
  background: $bg;
}
</style>