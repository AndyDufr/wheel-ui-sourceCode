<demo>Dialog 对话框</demo>
<template>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="visible"
    :onCloseOverlay="true"
    :ok="fn1"
    :cancel="fn2"
  >
    <template v-slot:title>
      <div>自定义标题</div>
    </template>
    <template v-slot:content>
      <div>自定义文字第一行</div>
      <div>自定义文字第二行</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import { Dialog } from "../../lib/index";
import { Button } from "../../lib/index";

/* 注意：用户请使用以下引入方式 

import { Dialog } from "wheel-amazing-ui";
import "wheel-amazing-ui/dist/lib/wheel.css";

 */

import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const fn1 = () => {
      return false;
    };
    const fn2 = () => {};
    return {
      visible,
      toggle,
      fn1,
      fn2,
    };
  },
};
</script>