<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
  </div>
  <div class="demo-actions">
    <ButtonPart
      @click="
        codeVisible = !codeVisible;
        showCodePart = false;
      "
      v-if="showCodePart"
      >查看代码</ButtonPart
    >
    <ButtonPart
      @click="
        codeVisible = !codeVisible;
        showCodePart = true;
      "
      v-else
      >隐藏代码</ButtonPart
    >
  </div>
  <div class="demo-code">
    <pre
      class="language-html"
      v-html="
        Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')
      "
      v-if="codeVisible"
    ></pre>
  </div>
</template>

<script lang="ts">
import "prismjs";
import "prismjs/themes/prism-okaidia.min.css";
import { ref } from "vue";
import ButtonPart from "../lib/ButtonPart.vue";
const Prism = (window as any).Prism;
export default {
  components: { ButtonPart },
  props: {
    component: Object,
    title: String,
  },
  setup() {
    const codeVisible = ref(false);
    const showCodePart = ref(true);
    return { Prism, codeVisible, showCodePart };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
