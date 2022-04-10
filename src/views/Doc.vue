<template>
  <div class="layout">
    <Topnav class="nav" togglemenu="true" />
    <div class="content">
      <aside v-show="asideVisible">
        <h2 style="color: #fff">开发指南</h2>
        <ol class="file">
          <li><router-link to="/doc/introduce">介绍</router-link></li>
          <li><router-link to="/doc/install">安装</router-link></li>
          <li><router-link to="/doc/start">开始使用</router-link></li>
        </ol>
        <h2 style="color: #fff">组建列表</h2>
        <ol>
          <li><span>通用组件</span></li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li><span>数据录入</span></li>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { Ref, inject } from "vue";
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return {
      asideVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
$color: #34566e;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
    ol {
      color: #fff;
    }
    span {
      color: #aaa6a6;
    }
    .file {
      margin-bottom: 16px;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  background: $color;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 90px;
  height: 100%;
  z-index: 10;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      padding: 6px 0 6px 0;
      > span {
        color: #fff;
        font-size: 14px;
        margin: 0 0 0 16px;
        &::after {
          content: "";
          width: 100%;
          height: 1px;
          display: block;
          background: #dad8d8;
          margin: 5px 0;
        }
      }
      > a {
        text-decoration: none;
        display: block;
        padding: 4px 16px;
      }
      > a.router-link-active {
        display: block;
        color: $color;
        background: #fff;
        transition: all 250ms;
      }
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
main {
  overflow: auto;
}
</style>