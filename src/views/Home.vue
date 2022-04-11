<template>
  <div class="home">
    <div class="topNavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>wheel-UI for Vue 3</h1>
        <p class="actions">
          <a href="https://github.com/AndyDufr/wheel-ui-sourceCode">GitHub</a>
          <router-link to="/doc/introduce">开始</router-link>
        </p>
      </div>
    </div>
    <main>
      <ul>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <div>
            <h3>基于 Vue 3</h3>
            <p>使用了 Vue 3 Composition</p>
          </div>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <div>
            <h3>基于 TypeScript</h3>
            <p>源代码采用 TypeScript 书写(非严格检查)</p>
          </div>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-easy"></use>
          </svg>
          <div>
            <h3>代码易读</h3>
            <p>每个组件的源代码都极其简洁</p>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
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
.home {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.topNavAndBanner {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    145deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(11, 20, 26, 1) 0%,
    rgba(109, 111, 110, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}
main {
  margin: 56px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  svg {
    width: 64px;
    height: 64px;
    margin-right: 10px;
    @media (max-width: 400px) {
      width: 50px;
      height: 50px;
    }
  }
  ul {
    @media (min-width: 800px) {
      display: flex;
    }
    > li {
      display: flex;
      flex-direction: row;
      margin: 12px 0 8px 0;
      width: 400px;
      @media (max-width: 400px) {
        padding: 0 64px;
        margin: 18px auto 8px auto;
      }
      h3 {
        font-size: 24px;
        @media (max-width: 400px) {
          font-size: 18px;
        }
      }
      p {
        font-size: 16px;
        @media (max-width: 400px) {
          font-size: 12px;
        }
      }
    }
  }
}
$green: #3caffc;
$border-radius: 4px;
$color: #fff;
.banner {
  position: relative;
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > img {
    position: absolute;
    width: 100vw;
    height: 50vh;
    z-index: -1;
  }
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>