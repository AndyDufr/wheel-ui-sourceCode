<demo>Tabs 组件示例</demo>
<template>
  <TabsPart v-model:selected="x">
    <TabPart title="标题1111">内容1</TabPart>
    <TabPart title="标题2">内容2</TabPart>
  </TabsPart>
</template>
<script lang="ts">
import TabsPart from "../../lib/TabsPart.vue";
import TabPart from "../../lib/TabPart.vue";
import { ref } from "vue";
export default {
  components: { TabsPart, TabPart },
  setup() {
    const x = ref("标题1111");
    return { x };
  },
};
</script> 