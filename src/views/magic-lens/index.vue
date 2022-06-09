<template>
  <div class="min-w-full">
    <div class="header shadow-lg bg-white w-full h-24 flex items-center">
      <div class="container mx-auto ">
        <p class="block min-w-full" href="/">
          <img class="w-36 h-11" src="@/assets/Logo-VNDG.png" alt="">
        </p>
      </div>
    </div>
    <div class="pb-24">
      <div class="py-6 container mx-auto mt-8 px-11 rounded border border-solid border-magic-borderMagic">
        <h2 class="text-xl font-bold mb-6 text-VNDG-listMagicLen">Danh sách người vào</h2>
        <div class="no_scroll flex items-center gap-6 overflow-x-auto pb-6">
          <div
            v-for="(item, index) in dataList"
            :key="index"
            class="flex justify-center flex-col items-center cursor-pointer mr-5"
            @click="showProfile(item.fbid)"
          >
            <img class="w-30 h-30 rounded-lg" :src="item.imgPath" alt="">
            <p class="p-2 mt-3 text-center text-white rounded bg-magic-level1 text-xs w-24">{{
              item.userStatus === 'vip' ? 'VIP' : item.userStatus === 'new' ? 'NEW' : item.userStatus === 'normal' ? 'NORMAL' : ''
            }}</p>
          </div>
        </div>
      </div>
      <div class="py-6 container mx-auto mt-8 px-11 rounded border border-solid border-magic-borderMagic">
        <h2 class="text-xl font-bold mb-6 text-VNDG-listMagicLen">Chi tiết người vào</h2>
        <div class="grid grid-cols-16 gap-x-8">
          <div class="rounded shadow-md bg-white p-6">
            <div class="flex justify-center items-center flex-col">
              <img class="w-30 h-30 rounded-lg" src="@/assets/default.svg" alt="">
              <p class="text-xl font-bold text-center mb-5 mt-4 text-VNDG-listMagicLen">Nguyễn Thị Tú Uyên</p>
              <div class="w-24 text-xs text-white bg-magic-level1 p-2 rounded">Người cao cấp</div>
            </div>
          </div>
          <div class="shadow grid grid-cols-2 pt-7 pl-10 pr-6 gap-6 pb-16 relative">
            <button
              type="success"
              class="absolute -bottom-5 left-1/2 bg-magic-listMagicLen text-white p-2 rounded-lg"
              @click="showDetail = !showDetail"
            >
              {{ !showDetail ? 'Chi tiết' : 'Thu gọn' }} <i
                :class="!showDetail ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"
              />
            </button>
            <div class="flex flex-col">
              <div class="grid grid-cols-2 items-center mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/user.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Họ tên</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">Nguyễn Thị Tú Uyên</p>
              </div>
              <div class="grid grid-cols-2 items-center mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/calendar.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Ngày sinh</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">11/11/2001</p>
              </div>
              <div class="grid grid-cols-2 items-center mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/pen.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Số chứng minh nhân dân</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">00008888</p>
              </div>
              <div class="grid grid-cols-2 items-center mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/phone.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Số điện thoại</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">00008888</p>
              </div>
              <div class="grid grid-cols-2 items-center mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/facebook.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Facebook</span>
                </p>
                <p class="text-sm text-magic-listMagicLen underline">Link</p>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="grid grid-cols-2 items-center mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/location.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Quê quán</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">Quận Cầu Giấy, thành phố Hà Nội</p>
              </div>
              <div class="grid grid-cols-2 items-center mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/pen.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Số tài khoản</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">012345666999</p>
              </div>
              <div class="grid grid-cols-2 items-center mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/calendar.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Ngày lập</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">06/09/2022</p>
              </div>
              <div class="grid grid-cols-2 items-center mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/copy.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Trạng thái</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">Người cao cấp</p>
              </div>
            </div>
            <div v-show="showDetail" class="flex flex-col">
              <div class="grid grid-cols-150 items-start mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/location.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Địa chỉ tạm trú</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">Quận Cầu Giấy, thành phố Hà Nội</p>
              </div>
              <div class="grid grid-cols-150 items-start mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/user2.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Thông tin người thân</span>
                </p>
                <ul class="list-disc">
                  <li class="text-sm text-magic-listMagicLen">Bố ruột: Nguyễn Thành Nam (sdt 0171973917,<span
                    class="underline"
                  >Facebook</span> )
                  </li>
                  <li class="text-sm text-magic-listMagicLen">Mẹ ruột: Nguyễn Thành Nam (sdt 0171973917, <span
                    class="underline"
                  >Facebook</span>)
                  </li>
                  <li class="text-sm text-magic-listMagicLen">Em ruột: Nguyễn Thành Nam (sdt 0171973917, <span
                    class="underline"
                  >Facebook</span>)
                  </li>
                </ul>
                <!-- <p class="text-sm text-magic-listMagicLen">Ổn định</p> -->
              </div>
              <div class="grid grid-cols-150 items-start mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/job.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Thông tin công việc</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">Ổn định</p>
              </div>
            </div>
            <div v-show="showDetail" class="flex flex-col">
              <div class="grid grid-cols-150 items-start mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/location.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Địa làm việc</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">Phường Quan Hoa, Quận Cầu Giấy, thành phố Hà Nội</p>
              </div>
              <div class="grid grid-cols-150 items-start mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/user2.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Thông tin đồng nghiệp:</span>
                </p>
                <ul class="list-disc">
                  <li class="text-sm text-magic-listMagicLen">Sếp: Nguyễn Thành Nam (sdt 0171973917, <span
                    class="underline"
                  >Facebook</span> )
                  </li>
                  <li class="text-sm text-magic-listMagicLen">Cấp dưới: Nguyễn Thành Nam (sdt 0171973917, <span
                    class="underline"
                  >Facebook</span>)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      showDetail: false,
      dataList: []
    }
  },
  mounted() {
    setInterval(() => {
      this.getListData()
    }, 2000)
  },
  methods: {
    async getListData() {
      const res = await axios.get('https://demo.vndcredit.vn/server/api/queue')
      console.log('res', res)
      this.dataList = res.data.Data.data
    },
    async showProfile(id) {
      id = '100005227800848'
      const res = await axios.get('https://demo.vndcredit.vn/data/?fb_id=' + `${id}` + '&phone=')
      console.log(res)
    }
  }
}
</script>
<style>
</style>
