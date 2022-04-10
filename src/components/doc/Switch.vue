<template>
  <h1>Switch 开关</h1>
  <section>
    <p>开关选择器。</p>
    <h2>何时使用</h2>
    <ul>
      <li>
        <p>需要表示开关状态/两种状态之间的切换时；</p>
      </li>
      <li>
        <p>
          和 <code>checkbox</code> 的区别是，切换
          <code>switch</code> 会直接触发状态改变，而
          <code>checkbox</code> 一般用于状态标记，需要和提交操作配合。
        </p>
      </li>
    </ul>
  </section>
  <h1>Switch 组件示例</h1>
  <div class="demo">
    <Demo :component="SwitchDemo1" />
  </div>

  <div class="demo">
    <Demo :component="SwitchDemo2" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import SwitchDemo1 from "../../lib/Switch1.demo.vue";
import SwitchDemo2 from "../../lib/Switch2.demo.vue";
import Demo from "../Demo.vue";

export default {
  components: { SwitchDemo1, SwitchDemo2, Demo },
  setup() {
    const bool = ref(true);
    return {
      bool,
      SwitchDemo1,
      SwitchDemo2,
    };
  },
};
</script>
