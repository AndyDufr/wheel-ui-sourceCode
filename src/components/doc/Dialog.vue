<template>
  <h1>示例1</h1>
  <Demo :component="Dialog1Demo" />
</template>

<script lang="ts">
import Dialog1Demo from "./Dialog1.demo.vue";
import Demo from "../Demo.vue";
export default {
  components: { Dialog1Demo, Demo },
  setup() {
    return {
      Dialog1Demo,
    };
  },
};
</script>