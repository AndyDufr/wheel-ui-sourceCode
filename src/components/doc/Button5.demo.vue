<demo>支持 loading</demo>
<template>
  <Button loading>加载中</Button>
  <Button>加载完毕</Button>
</template>
<script>
import Button from "../../lib/ButtonPart.vue";
export default {
  components: { Button },
};
</script>