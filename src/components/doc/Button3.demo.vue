<demo>支持 level</demo>
<template>
  <dir>
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </dir>
  <dir>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </dir>
  <dir>
    <Button theme="text" level="main">主要文字按钮</Button>
    <Button theme="text">普通文字按钮</Button>
    <Button theme="text" level="danger">危险文字按钮</Button>
  </dir>
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