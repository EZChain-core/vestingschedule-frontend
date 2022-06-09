<template>
  <div class="min-w-full">
    <div class="header shadow-lg bg-white w-full h-24 flex items-center">
      <div class="container mx-auto">
        <div class="grid grid-cols-2">
          <div class="flex justify-between items-center">
            <img class="w-36 h-11" src="@/assets/Logo-VNDG.png" alt="">
            <router-link class="px-6 py-3" :to="{path: '/demo'}">
              <span class="text-center text-sm  text-magic-level4">Danh sách người vào</span>
            </router-link>
          </div>
          <div class="flex justify-start items-center">
            <router-link class="px-6 py-3 border-b-4 border-solid border-magic-level2" :to="{path: '/demo/search'}">
              <span class="text-center text-sm text-magic-listMagicLen">Tìm kiếm người vào</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-24">
      <div class="py-6 container mx-auto mt-8 px-11 rounded border border-solid border-magic-borderMagic">
        <h2 class="text-xl font-bold mb-6 text-VNDG-listMagicLen">Tìm kiếm người vào</h2>
        <div class="grid grid-cols-245 gap-x-8">
          <div class="rounded shadow-md bg-white p-6">
            <div class="flex justify-center items-center flex-col">
              <h2 class="text-sm font-bold text-left w-full text-VNDG-listMagicLen mb-1">Facebook ID</h2>
              <el-input v-model="facebookID" placeholder="Facebook ID" />
              <el-button class="mt-4 bg-magic-level5 text-yellow-50 w-full" @click="search()">Tìm kiếm</el-button>
            </div>
            <div class="flex justify-center items-center flex-col mt-8">
              <h2 class="text-sm font-bold text-left w-full text-VNDG-listMagicLen mb-1">Số điện thoại</h2>
              <el-input v-model="phoneNumber" placeholder="Số điện thoại" />
              <el-button class="mt-4 bg-magic-level5 text-yellow-50 w-full" @click="search()">Tìm kiếm</el-button>
            </div>
          </div>
          <div v-if="dataList && !isLoading" class="shadow grid grid-cols-2 pt-7 pl-10 pr-6 gap-6 pb-16">
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
            <div class="flex flex-col">
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
            <div class="flex flex-col">
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
          <div v-else class="shadow pr-6 gap-6 pb-16 flex justify-center items-center relative">
            <div v-if="isLoading" class="flex items-center justify-center bg-slate-50 h-full svg-loader relative z-50">
              <svg class="svg-container" height="50" width="50" viewBox="0 0 100 100">
                <circle class="loader-svg bg" cx="50" cy="50" r="45" />
                <circle class="loader-svg animate" cx="50" cy="50" r="45" />
              </svg>
            </div>
            <h2 v-if="!isLoading" class="shadow text-center relative z-40 bg-white p-2">Không có dữ liệu để hiển thị</h2>
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
      dataList: null,
      phoneNumber: '',
      facebookID: '',
      isLoading: false,
      address: ''

    }
  },
  created() {
  },
  methods: {
    async search() {
      this.isLoading = true
      //   id = '100005227800848'
      const res = await axios.get('https://demo.vndcredit.vn/data/?fb_id=' + `${this.facebookID}` + '&phone=' + `${this.phoneNumber}`)
      if (res.data) {
        this.isLoading = false
        this.dataList = res.data
        this.address = res.data.address.reverse().toString()
        console.log(this.address)
        console.log(res.data)
      }
    }
  }
}
</script>
<style>
.svg-loader{
    display:flex;
    position: relative;
    align-content: space-around;
    justify-content: center;
  }
  .loader-svg{
    position: absolute;
    left: 0; right: 0; top: 0; bottom: 0;
    fill: none;
    stroke-width: 5px;
    stroke-linecap: round;
    stroke: rgb(64, 0, 148);
  }
  .loader-svg.bg{
    stroke-width: 8px;
    stroke: rgb(207, 205, 245);
  }

  .animate{
    stroke-dasharray: 242.6;
    animation: fill-animation 1s cubic-bezier(1,1,1,1) 0s infinite;
  }

  @keyframes fill-animation{
    0%{
      stroke-dasharray: 40 242.6;
      stroke-dashoffset: 0;
    }
    50%{
      stroke-dasharray: 141.3;
      stroke-dashoffset: 141.3;
    }
    100%{
      stroke-dasharray: 40 242.6;
      stroke-dashoffset: 282.6;
    }
  }
</style>
