<template>
  <div class="mt-6 rounded-md bg-white px-3 py-4">
    <div class="flex items-center justify-between">
      <span class="text-sm leading-4 text-VNDG-gray600">Khách hàng</span>
      <span class="text-sm leading-4 font-bold text-VNDG-mainDblue">Nguyễn Văn B</span>
    </div>
    <div class="flex items-center justify-between mt-3">
      <span class="text-sm leading-4 text-VNDG-gray600">Thời gian hẹn</span>
      <span class="text-sm leading-4 font-bold text-VNDG-mainDblue">02/7/2021 10:00</span>
    </div>
    <div class="flex items-start justify-between mt-3">
      <span class="text-sm leading-4 w-1/3 text-VNDG-gray600">Lý do</span>
      <span class="text-sm leading-4 font-bold w-2/3 text-right truncate-3-lines text-VNDG-mainDblue">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, quod tenetur exercitationem officiis nam ducimus consequatur provident quis error mollitia, aperiam enim, laudantium iusto blanditiis ipsa! Maxime officia modi cupiditate.</span>
    </div>
    <div class="flex items-center justify-between mt-3">
      <span class="text-sm leading-4 text-VNDG-gray600">Nhân viên</span>
      <el-select
        v-model="value"
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
