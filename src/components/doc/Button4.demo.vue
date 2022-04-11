<demo>支持 disabled</demo>
<template>
  <Button disabled>禁用按钮</Button>
  <Button theme="link" disabled>禁用链接按钮</Button>
  <Button theme="text" disabled>禁用按钮</Button>
</template>
<script>
import { Button } from "../../lib/index";

/* 注意：用户请使用以下引入方式 

import { Button } from "wheel-amazing-ui";
import "wheel-amazing-ui/dist/lib/wheel.css";

 */
export default {
  components: { Button },
};
</script>