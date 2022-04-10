<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { ref, provide } from "vue";
import router from "./route";
export default {
  name: "App",
  setup() {
    const deviceWidth = document.documentElement.clientWidth;
    const asideVisible = ref(deviceWidth >= 500 ? true : false);
    provide("asideVisible", asideVisible);
    router.afterEach((to, from) => {
      console.log(to);
      console.log(from);

      if (deviceWidth <= 500) asideVisible.value = false;
    });
  },
};
</script>



