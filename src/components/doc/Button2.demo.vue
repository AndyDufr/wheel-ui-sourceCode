<demo>支持 size</demo>
<template>
  <dir>
    <Button size="big" theme="button">Big Button</Button>
    <Button theme="button">default</Button>
    <Button size="small" theme="button">Small</Button>
  </dir>
  <dir>
    <Button size="big" theme="link">Big Button</Button>
    <Button theme="link">Default</Button>
    <Button size="small" theme="link">Small</Button>
  </dir>
  <dir>
    <Button size="big" theme="text">Big Button</Button>
    <Button theme="text">Default</Button>
    <Button size="small" theme="text">Small</Button>
  </dir>
</template>

<script>
import Button from "../../lib/ButtonPart.vue";
export default {
  components: { Button },
};
</script>