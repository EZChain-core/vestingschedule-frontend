<template>
  <div class="sidebar-logo-containers" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link flex items-center flex-col justify-center" to="/">
        <img src="@/assets/Logo-VNDG.png" class="sidebar-logo">
        <h1 class="sidebar-title">Anti Fraud System</h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link flex items-center flex-col justify-center" to="/">
        <img src="@/assets/Logo-VNDG.png" class="sidebar-logo">
        <h1 class="sidebar-title mt-4">Anti Fraud System </h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: 'VNDCredit Demo',
      logo: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-containers {
  position: relative;
  width: 100%;
  padding-top: 20px;
  // height: 50px;
  line-height: 50px;
  background: #ffffff;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    display: flex !important;
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 164.8;
      height: 100%;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      font-size: 16px;
      line-height: 19px;
      color: #888B96;
      text-align: center;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
