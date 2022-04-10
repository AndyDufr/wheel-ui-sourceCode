<demo>支持 disabled</demo>
<template>
  <SwtichPart v-model:value="bool" disabled />
</template>
<script lang="ts">
import { ref } from "vue";
import SwtichPart from "./SwitchPart.vue";

export default {
  components: { SwtichPart },
  setup() {
    const bool = ref(false);
    return { bool };
  },
};
</script>