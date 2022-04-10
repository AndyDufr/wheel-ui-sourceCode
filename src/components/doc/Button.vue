<template>
  <div>
    <h1>介绍</h1>
    <p>按钮用于触发一个操作，如提交表单。</p>
  </div>

  <Demo :component="Button1Demo" />
  <Demo :component="Button2Demo" />
  <Demo :component="Button3Demo" />
  <Demo :component="Button4Demo" />
  <Demo :component="Button5Demo" />
</template>

<script lang="ts">
import Button from "../../lib/ButtonPart.vue";
import Demo from "../Demo.vue";
import Button1Demo from "../doc/Button1.demo.vue";
import Button2Demo from "../doc/Button2.demo.vue";
import Button3Demo from "../doc/Button3.demo.vue";
import Button4Demo from "../doc/Button4.demo.vue";
import Button5Demo from "../doc/Button5.demo.vue";
export default {
  components: {
    Button,
    Demo,
    Button1Demo,
    Button2Demo,
    Button3Demo,
    Button4Demo,
    Button5Demo,
  },
  setup(props) {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
    };
  },
};
</script>

<style lang="scss" scoped>
dir {
  padding: 5px 0;
}
</style>