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
            @click="showProfile(item.fbid, index)"
          >
            <img :id="item.fbid" class="w-30 h-30 rounded-lg" :src="item.imgPath">
            <p class="p-2 mt-3 text-center text-white rounded bg-magic-level1 text-xs w-24">{{
              item.userStatus.toUpperCase()
            }}</p>
          </div>
        </div>
      </div>
      <div 
        v-show="dataDetail" class="py-6 container mx-auto mt-8 px-11 rounded border border-solid border-magic-borderMagic">
        <h2 class="text-xl font-bold mb-6 text-VNDG-listMagicLen">Chi tiết người vào</h2>
        <div class="grid grid-cols-16 gap-x-8">
          <div class="rounded shadow-md bg-white p-6">
            <div class="flex justify-center items-center flex-col">
              <img v-if="getData(dataDetail.imgPath) == ''" class="w-30 h-30 rounded-lg" src="@/assets/default.svg" alt="">
              <img :id="dataDetail.fbid + '-2'" v-else class="w-30 h-30 rounded-lg" :src="getData(dataDetail.imgPath)" alt="">
              <p class="text-xl font-bold text-center mb-5 mt-4 text-VNDG-listMagicLen">{{ getData(dataDetail.name)}}</p>
              <div class="w-24 text-xs text-white text-center bg-magic-level1 p-2 rounded">{{ getData(dataDetail.userStatus).toUpperCase()}}</div>
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
                <p class="text-sm text-magic-listMagicLen">{{ getData(dataDetail.name)}}</p>
              </div>
              <div class="grid grid-cols-2 items-center mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/calendar.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Ngày sinh</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">{{ getData(dataDetail.dob)}}</p>
              </div>
              <div class="grid grid-cols-2 items-center mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/pen.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Số chứng minh nhân dân</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">{{ getData(dataDetail.idNum)}}</p>
              </div>
              <div class="grid grid-cols-2 items-center mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/phone.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Số điện thoại</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">{{ getData(dataDetail.phoneNum)}}</p>
              </div>
              <div class="grid grid-cols-2 items-center mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/facebook.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Facebook</span>
                </p>
                <a :href="getLinkFb(dataDetail.fbid)"
                target="_blank">
                  <p class="text-sm text-magic-listMagicLen underline" style="color: blue">
                    {{  getLinkFb(dataDetail.fbid) == '' ? '' : 'Facebook'}}
                    </p>
                </a>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="grid grid-cols-2 items-center mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/location.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Quê quán</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">{{ getData(dataDetail.address)}}</p>
              </div>
              <div class="grid grid-cols-2 items-center mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/pen.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Số tài khoản</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">{{ getData(dataDetail.stk)}}</p>
              </div>
              <div class="grid grid-cols-2 items-center mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/calendar.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Ngày lập</span>
                </p>
                <p class="text-sm text-magic-listMagicLen"></p>
              </div>
              <div class="grid grid-cols-2 items-center mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/copy.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Trạng thái</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">{{ getData(dataDetail.userStatus).toUpperCase()}}</p>
              </div>
            </div>
            <div v-show="showDetail">
              <div class="grid grid-cols-150 items-start mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/location.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Địa chỉ tạm trú</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">
                  {{ getAddress(dataFb.address) }}
                </p>
              </div>
              <div class="grid grid-cols-150 items-start mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/user2.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Thông tin người thân</span>
                </p>
                <div v-if="dataFb.homie && dataFb.homie.length" class="list-disc">
                  <div v-for="item in dataFb.homie" :key="item">
                    <p class="text-sm text-magic-listMagicLen">
                      {{ item.name + '(' + item.phone + ", "}}
                      <a class="underline" style="color: blue" :href="getLinkFb2(item.facebook_link)" target="_blank">
                        {{getData(item.facebook_link) == '' ? '' : 'Facebook'}}
                      </a>
                      )
                    </p>
                  </div>
                </div>
                <!-- <p class="text-sm text-magic-listMagicLen">Ổn định</p> -->
              </div>
              <div class="grid grid-cols-150 items-start mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/job.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Thông tin công việc</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">{{dataFb.job_status}}</p>
              </div>
            </div>
            <div v-show="showDetail" class="flex flex-col">
              <div class="grid grid-cols-150 items-start mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/location.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Địa làm việc</span>
                </p>
                <p class="text-sm text-magic-listMagicLen">
                  {{ getAddress(dataFb.work_address) }}
                </p>
              </div>
              <div class="grid grid-cols-150 items-start mb-5">
                <p class="flex">
                  <img class="mr-2" src="@/assets/user2.svg" alt="">
                  <span class="text-sm font-normal text-magic-level4">Thông tin đồng nghiệp:</span>
                </p>
                <div v-if="dataFb.co-worker && dataFb.co-worker.length">
                  <div v-for="item in dataFb.co-worker" :key="item">
                    <p class="text-sm text-magic-listMagicLen">
                      {{ item.name + '(' + item.phone + ", "}}
                      <a class="underline" style="color: blue" :href="getLinkFb2(item.facebook_link)" target="_blank">
                        {{getData(item.facebook_link) == '' ? '' : 'Facebook'}}
                      </a>
                      )
                    </p>
                  </div>
                </div>
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
import { data } from 'autoprefixer'

export default {
  data() {
    return {
      showDetail: false,
      dataList: [],
      dataDetail: '',
      dataFb: '',
      isLoading: false,
      temp: '',
      dataFbList: new Map()
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
      res.data.Data.data.forEach(value => {
        if (value.fbid) {
          setTimeout(() => {
            document.getElementById(value.fbid).src = value.imgPath
            document.getElementById(value.fbid + '-2').src = value.imgPath
          }, 200);
          this.getFbInfo(value.fbid)
          const found = this.dataList.find(e => e.fbid ==  value.fbid)
          if (found != undefined) {
            const i = this.dataList.indexOf(found)
            this.dataList.splice(i, 1)
          }
        }
         this.dataList.push(value)
      })
    },
    showProfile(id, index) {
      this.dataDetail = this.dataList[index]
      this.dataFb = this.dataFbList.get(id)
    },
    getFbInfo(id) {
      this.dataFbList.forEach((value, key) => {
        if (key == id) {
          return
        }
      })
      this.dataFbList.set(id, '')
      if (id && id != '') {
        axios.get('https://demo.vndcredit.vn/data/?fb_id=' + `${id}` + '&phone=').then(res => {
          this.dataFbList.set(id, res.data)
        }) 
      }
    },
    getData(data) {
      if (data) {
        return data
      } else {
        return ''
      }
    },
    getLinkFb(data) {
      if (data) {
        return 'https://fb.com/' + data
      } else {
        return ''
      }
    },
    getLinkFb2(data) {
      if (data) {
        return 'https://' + data
      } else {
        return ''
      }
    },
    getAddress(data) {
      var result = ''
      if (data && data.length) {
        data.forEach(element => {
          result = result + element + " "
        })
      }
      return result
    }
  }
}
</script>
<style>
</style>
