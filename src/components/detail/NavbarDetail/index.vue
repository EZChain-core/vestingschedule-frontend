<template>
  <div class="navbar-detail flex items-center justify-between">
    <router-link to="/dashboard">
      <div class="flex items-center">
        <img src="@/assets/images/arrow-back.png" alt="arrow-back">
        <img src="@/assets/Logo-VNDG.png" alt="logo-vndg" class="sidebar-logo h-10 object-cover">
      </div>
    </router-link>
    <div class="relative z-10 flex items-center">
      <hr class="w-full absolute top-1/2 h-0.5 bg-VNDG-grayCyan">
      <div v-for="item in listStatus" :key="item.id" :class="`${item.id === 1 ? 'active' : 'not-active'}`" class="navbar-detail__btn relative px-9 py-2">
        {{ item.name }}
      </div>
    </div>
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" alt="avatar" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
// import Hamburger from '@/components/Hamburger'

export default { components: {
  // Breadcrumb,
  // Hamburger
}, data() {
  return {
    active: '',
    listStatus: [
      {
        id: 1,
        name: 'HS mới'
      },
      {
        id: 2,
        name: 'HS thẩm định trả lại'
      },
      {
        id: 3,
        name: 'HS cần điều tra'
      },
      {
        id: 4,
        name: 'HS thu hồi nợ chuyển sang'
      }
    ]
  }
},
computed: {
  ...mapGetters([
    'sidebar',
    'avatar'
  ])
},
methods: {
  toggleSideBar() {
    this.$store.dispatch('app/toggleSideBar')
  },
  async logout() {
    await this.$store.dispatch('user/logout')
    this.$router.push(`/login?redirect=${this.$route.fullPath}`)
  }
}
}
</script>

<style lang="scss" scoped>
.navbar-detail {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
  &__btn:first-of-type {
    @apply ml-0;
  }
  &__btn {
    @apply text-sm leading-4 ml-10;
    border-radius: 34px;
  }
  .active {
    @apply bg-VNDG-stateBlue text-white font-black;
  }
  .not-active {
    @apply bg-white text-VNDG-mainDblue;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  }
}
</style>
