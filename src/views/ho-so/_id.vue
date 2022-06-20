<template>
  <div class="detail">
    <div class="fixed-header">
      <navbar-detail />
    </div>
    <detail-info />
  </div>
</template>
<script>
import NavbarDetail from '@/components/detail/NavbarDetail/index.vue'
import DetailInfo from '@/components/detail/DetailInfo/index.vue'
export default {
  components: {
    NavbarDetail,
    DetailInfo
  }
}
</script>
<style lang="scss" scoped>
.detail {
   .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: 100%;
    transition: width 0.28s;
  }
}
</style>
