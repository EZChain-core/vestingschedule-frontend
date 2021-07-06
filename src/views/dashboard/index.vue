<template>
  <div class="dashboard-container">
    <div class="p-5 grid grid-cols-3 gap-x-5 h-full">
      <div v-for="i in 3" :key="i" class="column-card h-full bg-gray-300 py-6 px-5 rounded-t-md">
        <div class="flex items-center justify-between">
          <h2 class="font-bold text-xl leading-6">Hồ sơ đăng ký mới</h2>
          <span class="text-white text-xs leading-3.5 px-2 py-1 rounded bg-green-400">3</span>
        </div>
        <div class="mt-6 rounded-md bg-white px-3 py-4">
          <div class="flex items-center justify-between">
            <span class="text-sm leading-4">Khách hàng</span>
            <span class="text-sm leading-4 font-bold">Nguyễn Văn B</span>
          </div>
          <div class="flex items-center justify-between mt-3">
            <span class="text-sm leading-4">Thời gian hẹn</span>
            <span class="text-sm leading-4 font-bold">02/7/2021 10:00</span>
          </div>
          <div class="flex items-start justify-between mt-3">
            <span class="text-sm leading-4 w-1/3">Lý do</span>
            <span class="text-sm leading-4 font-bold w-2/3 text-right truncate-3-lines">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, quod tenetur exercitationem officiis nam ducimus consequatur provident quis error mollitia, aperiam enim, laudantium iusto blanditiis ipsa! Maxime officia modi cupiditate.</span>
          </div>
          <div class="mt-3 text-sm leading-4">
            Còn <span class="font-semibold">58</span> phút nữa tới thời gian khách hẹn
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {

  &-container {
    // margin: 30px;
    height: calc(100vh - 50px);
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
