<demo>支持 loading</demo>
<template>
  <Button loading>加载中</Button>
  <Button>加载完毕</Button>
</template>
<script>
import { Button } from "../../lib/index";

/* 注意：用户请使用以下引入方式 

import { Button } from "wheel-ui-amazing";
import "wheel-ui-amazing/dist/lib/wheel.css";

 */
export default {
  components: { Button },
};
</script>