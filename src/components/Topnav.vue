<template>
  <div class="topnav">
    <span class="togglebar" @click="asideToggle" v-if="togglemenu">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </span>
    <router-link class="logo" to="/">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-logo"></use>
      </svg>
      <span class="logofile">Wheel-UI</span>
    </router-link>
    <div class="menu">
      <router-link to="/doc/install"> 文档 </router-link>
      <router-link to="/">主页</router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Ref, inject } from "vue";
export default {
  props: {
    togglemenu: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const asideToggle = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {
      asideVisible,
      asideToggle,
    };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  position: fixed;
  //   position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  display: flex;
  padding: 16px 10px;
  justify-content: center;
  align-items: center;
  > .togglebar {
    display: inline-block;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    > svg {
      width: 100%;
      height: 100%;
    }
  }

  > .logo {
    max-width: 7em;
    margin-right: auto;
    text-decoration: none;
    > svg {
      width: 32px;
      height: 32px;
    }
    > .logofile {
      color: #02bcb0;
      font-weight: 700;
      font-size: 18px;
    }
    &:hover {
      text-decoration: none;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > a {
      margin: 0 1em;
      color: #02bcb0;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
  }
  @media (min-width: 500px) {
    > .togglebar {
      display: none;
    }
  }
}
</style>