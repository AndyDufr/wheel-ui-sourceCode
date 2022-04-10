<template>
  <Demo :component="Tabs1Demo" />
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Tabs1Demo from "../doc/Tabs1.demo.vue";
export default {
  components: { Demo, Tabs1Demo },
  setup() {
    return { Tabs1Demo };
  },
};
</script> 