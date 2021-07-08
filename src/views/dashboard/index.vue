<template>
  <div class="dashboard-container bg-VNDG-lightGrayCyan">
    <div class="list-container p-5 grid grid-flow-col gap-x-4 h-full overflow-x-scroll">
      <div class="column-card h-full bg-VNDG-grayCyan pt-6 px-5 rounded-t-md">
        <div class="flex items-center justify-between bg-VNDG-grayCyan w-full mb-6">
          <h2 class="font-bold text-xl leading-6 text-VNDG-gray700">Hồ sơ đăng ký mới</h2>
          <span class="text-white text-xs leading-3.5 px-2 py-1 rounded bg-VNDG-gCyan">3</span>
        </div>
        <div class="overflow-y-auto h-full" style="max-height: calc(100vh - 165px);">
          <new-file v-for="i in 10" :key="i" class="mt-4 first:mt-0" />
        </div>
      </div>
      <div class="column-card h-full bg-VNDG-grayCyan py-6 px-5 rounded-t-md">
        <div class="flex items-center justify-between bg-VNDG-grayCyan w-full mb-6">
          <h2 class="font-bold text-xl leading-6 text-VNDG-gray700">Hồ sơ thẩm định trả lại</h2>
          <span class="text-white text-xs leading-3.5 px-2 py-1 rounded bg-VNDG-gCyan">3</span>
        </div>
        <div class="overflow-y-auto h-full" style="max-height: calc(100vh - 165px);">
          <file-returned v-for="i in 10" :key="i" class="mt-4 first:mt-0" />
        </div>
      </div>
      <div class="column-card h-full bg-VNDG-grayCyan py-6 px-5 rounded-t-md">
        <div class="flex items-center justify-between bg-VNDG-grayCyan w-full mb-6">
          <h2 class="font-bold text-xl leading-6 text-VNDG-gray700">Hồ sơ cần điều tra</h2>
          <span class="text-white text-xs leading-3.5 px-2 py-1 rounded bg-VNDG-gCyan">3</span>
        </div>
        <div class="overflow-y-auto h-full" style="max-height: calc(100vh - 165px);">
          <investigation-file v-for="i in 10" :key="i" class="mt-4 first:mt-0" />
        </div>
      </div>
      <div class="column-card h-full bg-VNDG-grayCyan py-6 px-5 rounded-t-md">
        <div class="flex items-center justify-between bg-VNDG-grayCyan w-full mb-6">
          <h2 class="font-bold text-xl leading-6 text-VNDG-gray700">HS thu hồi nợ chuyển sang</h2>
          <span class="text-white text-xs leading-3.5 px-2 py-1 rounded bg-VNDG-gCyan">3</span>
        </div>
        <div class="overflow-y-auto h-full" style="max-height: calc(100vh - 165px);">
          <investigation-file v-for="i in 10" :key="i" class="mt-4 first:mt-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NewFile from '@/components/home/NewFile/index.vue'
import FileReturned from '@/components/home/FileReturned/index.vue'
import InvestigationFile from '@/components/home/InvestigationFile/index.vue'
export default {
  name: 'Dashboard',
  components: {
    NewFile,
    FileReturned,
    InvestigationFile
  },
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
    .list-container {
      grid-auto-columns: 350px;
    }
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }

}
</style>
