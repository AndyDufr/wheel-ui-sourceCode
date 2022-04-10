<demo>常规用法</demo>
<template>
  <SwtichPart v-model:value="bool" />
</template>
<script lang="ts">
import { ref } from "vue";
import SwtichPart from "./SwitchPart.vue";

export default {
  components: { SwtichPart },
  setup() {
    const bool = ref(false);
    return { bool, SwtichPart };
  },
};
</script>