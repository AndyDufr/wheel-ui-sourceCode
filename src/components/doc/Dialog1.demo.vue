<demo>Dialog 对话框</demo>
<template>
  <Button @click="toggle">toggle</Button>
  <DialogPart
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
  </DialogPart>
</template>

<script lang="ts">
import DialogPart from "../../lib/DialogPart.vue";
import Button from "../../lib/ButtonPart.vue";
import { ref } from "vue";
export default {
  components: { DialogPart, Button },
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