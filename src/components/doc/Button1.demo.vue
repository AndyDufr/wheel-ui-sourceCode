<demo>常规用法</demo>
<template>
  <Button>Main</Button>
  <Button theme="button">Main</Button>
  <Button theme="link">Main</Button>
  <Button theme="text">Main</Button>
</template>

<script>
import { Button } from "../../lib/index.ts";
/* 注意：用户请使用以下引入方式 

import { Button } from "wheel-ui-amazing";
import "wheel-ui-amazing/dist/lib/wheel.css";

 */
export default {
  components: { Button },
};
</script>