<template>
  <div class="rounded-md bg-white relative">
    <router-link to="/ho-so/345">
      <div class="px-3 pt-4">
        <div class="flex items-center justify-between">
          <span class="text-sm leading-4 text-VNDG-gray600">Khách hàng</span>
          <span class="text-sm leading-4 font-bold text-VNDG-mainDblue">Nguyễn Văn B</span>
        </div>
        <div class="flex items-center justify-between mt-3">
          <span class="text-sm leading-4 text-VNDG-gray600">Thời gian giải ngân</span>
          <span class="text-sm leading-4 font-bold text-VNDG-mainDblue">02/7/2021 10:00</span>
        </div>
      </div>
      <div class="flex items-center justify-between mt-8 px-3 pb-4">
        <span class="text-sm leading-4 text-VNDG-gray600">Nhân viên</span>
      </div>
    </router-link>
    <el-select
      v-model="value"
      class="absolute bottom-2 right-2 w-44"
      filterable
      remote
      reserve-keyword
      placeholder="Chọn nhân viên"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [],
      value: null,
      list: [],
      loading: false,
      states: ['Nguyễn Văn A', 'Nguyễn Văn B', 'Hồ Công Chí']
    }
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: `${item}`, label: `${item}` }
    })
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options = []
      }
    }
  }
}
</script>
