<demo>常规用法</demo>
<template>
  <Switch v-model:value="bool" />
</template>
<script lang="ts">
import { Switch } from "./index";

/* 注意：用户请使用以下引入方式 

import { Switch } from "wheel-amazing-ui";
import "wheel-amazing-ui/dist/lib/wheel.css";

 */
import { ref } from "vue";
export default {
  components: { Switch },
  setup() {
    const bool = ref(false);
    return { bool, Switch };
  },
};
</script>