<demo>Tabs 组件示例</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="标题1111">内容1</Tab>
    <Tab title="标题2">内容2</Tab>
  </Tabs>
</template>
<script lang="ts">
import { Tabs } from "../../lib/index";
import { Tab } from "../../lib/index";

/* 注意：用户请使用以下引入方式 

import { Tabs,Tab } from "wheel-amazing-ui";
import "wheel-amazing-ui/dist/lib/wheel.css";

 */
import { ref } from "vue";
export default {
  components: { Tabs, Tab },
  setup() {
    const x = ref("标题1111");
    return { x };
  },
};
</script> 