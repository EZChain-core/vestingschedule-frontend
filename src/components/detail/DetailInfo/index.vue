<template>
  <div class="detail-check">
    <div class="bg-VNDG-lightGrayCyan p-5 grid grid-cols-12 gap-x-6 info">
      <div class="info__left col-span-4 xl:col-span-3 bg-VNDG-grayCyan px-4 py-6">
        <h2 class="info__title">Thông tin khách hàng</h2>
        <div class="mt-4.5 rounded-md bg-white flex items-start p-4">
          <img src="https://i.ibb.co/b1f4Lzp/image-4.png" class="rounded-md info__img-cmnd object-cover" alt="avatar">
          <div class="flex flex-col ml-4">
            <div class="info_content">
              <span class="mr-1">KH: </span>
              <span class="font-bold">Nguyễn Thị M</span>
            </div>
            <div class="info_content mt-3">
              <span class="mr-1">SĐT: </span>
              <span class="font-bold">0313114424</span>
            </div>
            <div class="info_content mt-3">
              <span class="mr-1">CMND/CCCD:</span>
              <span class="font-bold">031943857261</span>
            </div>
            <div class="info_content mt-3">
              <span class="mr-1">Số HĐ đã ký:</span>
              <span class="font-bold">2</span>
            </div>
          </div>
        </div>
        <h2 class="mt-6 info__title">Thông tin khoản vay</h2>
        <div class="mt-4.5 rounded-md bg-white flex flex-col p-4">
          <div class="info_content">
            <span class="mr-1">Khoản vay:</span>
            <span class="font-bold text-VNDG-dRed">3.000.000 VNĐ</span>
          </div>
          <div class="info_content mt-3">
            <span class="mr-1">Ngày vay:</span>
            <span class="font-bold">02/7/2021</span>
          </div>
          <div class="info_content mt-3">
            <span class="mr-1">Kỳ hạn: </span>
            <span class="font-bold">35 ngày</span>
          </div>
        </div>
        <h2 class="mt-6 info__title">Thông tin khoản vay</h2>
        <div class="mt-4.5 rounded-md bg-white flex flex-col p-4">
          <div class="flex flex-col pb-3.5 border-dashed border-b">
            <div class="info_content">
              <span class="mr-1">Quan hệ:</span>
              <span class="font-bold text-VNDG-dRed">Bố</span>
            </div>
            <div class="info_content mt-3">
              <span class="mr-1">Họ tên:</span>
              <span class="font-bold">Nguyễn Văn B</span>
            </div>
            <div class="info_content mt-3">
              <span class="mr-1">SĐT: </span>
              <span class="font-bold">0313114424</span>
            </div>
          </div>
          <div class="flex flex-col pt-3.5 pb-3.5 border-dashed">
            <div class="info_content">
              <span class="mr-1">Quan hệ:</span>
              <span class="font-bold text-VNDG-dRed">Bố</span>
            </div>
            <div class="info_content mt-3">
              <span class="mr-1">Họ tên:</span>
              <span class="font-bold">Nguyễn Văn B</span>
            </div>
            <div class="info_content mt-3">
              <span class="mr-1">SĐT: </span>
              <span class="font-bold">0313114424</span>
            </div>
          </div>
        </div>
        <h2 class="mt-6 info__title">Hình thức giải ngân</h2>
        <div class="mt-4.5 rounded-md bg-white flex flex-col p-4">
          <div class="info_content">
            <span class="mr-1">Qua:</span>
            <span class="font-bold">Ngân hàng</span>
          </div>
          <div class="info_content mt-3 flex">
            <div class="mr-1 w-32">Ngân hàng:</div>
            <div class="font-bold">Ngân hàng TMCP ngoại thương Việt Nam (Vietcombank)</div>
          </div>
          <div class="info_content mt-3">
            <span class="mr-1">Kỳ hạn: </span>
            <span class="font-bold">35 ngày</span>
          </div>
          <div class="info_content mt-3">
            <span class="mr-1">Chủ TK:</span>
            <span class="font-bold">Nguyễn Thị M</span>
          </div>
        </div>
      </div>
      <div class="col-span-8 xl:col-span-9 bg-VNDG-grayCyan px-4 py-6">
        <h2 class="info__title">1. Lý do thẩm định trả lại hồ sơ</h2>
        <div class="mt-4.5 bg-white rounded-md w-full p-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla fugit cum labore totam error corrupti eum. Commodi harum, saepe architecto quas numquam atque quo fugiat maxime sint eveniet doloremque ab.
        </div>
        <h2 class="info__title mt-6">1. CMND/CCCD mặt trước</h2>
        <div class="mt-4.5 bg-white rounded-md flex items-center justify-center w-full py-4">
          <img src="https://i.ibb.co/C7Mp6gX/image-5-1.png" alt="cmnd-before">
        </div>
        <h2 class="info__title mt-6">2. CMND/CCCD mặt sau</h2>
        <div class="mt-4.5 bg-white rounded-md flex items-center justify-center w-full py-4">
          <img src="https://i.ibb.co/VpPRV7H/image-5.png" alt="cmnd-before">
        </div>
      </div>
    </div>
    <div class="h-30 flex items-center justify-center bg-white">
      <button class="px-16 py-3 text-black text-base leading-6 font-bold rounded-lg bg-VNDG-iconGray mr-2" @click="dialogFormReject = true">Từ chối hồ sơ</button>
      <button class="px-16 py-3 text-white text-base leading-6 font-bold rounded-lg bg-VNDG-buttonBlue ml-2" @click="dialogFormConsider = true">Chuyển thẩm định</button>
    </div>
    <div class="h-30 flex items-center justify-center bg-white">
      <button class="px-16 py-3 text-black text-base leading-6 font-bold rounded-lg bg-VNDG-iconGray mr-2" @click="dialogFormSwitch = true">Chuyển thu hồi nợ</button>
      <button class="px-28 py-3 text-white text-base leading-6 font-bold rounded-lg bg-VNDG-buttonBlue ml-2" @click="dialogFormEnd = true">Kết thúc</button>
    </div>

    <!-- dialog từ chối -->
    <el-dialog center :visible.sync="dialogFormReject">
      <div class="p-8 flex flex-col justify-center items-center">
        <h3 class="text-VNDG-darkBlue font-bold text-3.5xl leading-9">Từ chối hồ sơ</h3>
        <h5 class="mt-6 text-center text-VNDG-darkBlue text-2xl leading-7">Bạn có chắc chắn muốn từ chối hồ sơ này?</h5>
        <el-form
          ref="formReject"
          :model="formReject"
          status-icon
          :rules="rulesReject"
          class="mt-6 w-full"
        >
          <el-form-item prop="title">
            <el-select v-model="formReject.title" placeholder="- Chọn lý do từ chối hồ sơ -" popper-class="flame-select" class="w-full">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item prop="content">
            <el-input
              v-model="formReject.content"
              type="textarea"
              :rows="4"
              placeholder="Lý do từ chối"
              autocomplete="off"
              resize="none"
            />
          </el-form-item>
        </el-form>
        <div class="w-full grid grid-cols-2 gap-x-4">
          <button class="py-3 text-black text-base leading-6 font-bold rounded-lg bg-VNDG-iconGray" @click="dialogFormReject = false">Hủy bỏ</button>
          <button class="py-3 text-white text-base leading-6 font-bold rounded-lg bg-VNDG-buttonBlue" @click="handleReject('formReject')">Đồng ý</button>
        </div>
      </div>
    </el-dialog>

    <!-- dialog thẩm định -->
    <el-dialog center :visible.sync="dialogFormConsider">
      <div class="p-8 flex flex-col justify-center items-center">
        <h3 class="text-VNDG-darkBlue font-bold text-3.5xl leading-9">Chuyển thẩm định</h3>
        <h5 class="mt-6 text-center text-VNDG-darkBlue text-2xl leading-7">Bạn có chắc chắn muốn chuyển hồ sơ này cho thẩm định?</h5>
        <el-form
          ref="formConsider"
          :model="formConsider"
          status-icon
          class="mt-6 w-full"
        >
          <el-form-item prop="isCheat">
            <el-checkbox v-model="formConsider.isCheat">Nghi vấn gian lận</el-checkbox>
          </el-form-item>
          <el-form-item v-if="formConsider.isCheat === true" prop="content">
            <el-input
              v-model="formReject.content"
              type="textarea"
              :rows="4"
              placeholder="Ghi chú"
              autocomplete="off"
              resize="none"
            />
          </el-form-item>
        </el-form>
        <div class="w-full grid grid-cols-2 gap-x-4">
          <button class="py-3 text-black text-base leading-6 font-bold rounded-lg bg-VNDG-iconGray" @click="dialogFormConsider = false">Hủy bỏ</button>
          <button class="py-3 text-white text-base leading-6 font-bold rounded-lg bg-VNDG-buttonBlue" @click="handleConsider('formConsider')">Đồng ý</button>
        </div>
      </div>
    </el-dialog>

    <!-- dialog chuyển thu hồi nợ -->
    <el-dialog center :visible.sync="dialogFormSwitch">
      <div class="p-8 flex flex-col justify-center items-center">
        <h3 class="text-VNDG-darkBlue font-bold text-3.5xl leading-9">Từ chối hồ sơ</h3>
        <h5 class="mt-6 text-center text-VNDG-darkBlue text-2xl leading-7">Hồ sơ này có nghi ngờ gian lận. Bạn có muốn chuyển cho thu hồi nợ không?</h5>
        <el-form
          ref="formSwitch"
          :model="formSwitch"
          status-icon
          class="mt-6 w-full"
        >
          <el-form-item prop="value" class="text-center">
            <el-radio v-model="formSwitch.value" label="1">Nghiêm trọng</el-radio>
            <el-radio v-model="formSwitch.value" label="2">Không nghiêm trọng</el-radio>
          </el-form-item>
          <el-form-item prop="content">
            <el-input
              v-model="formSwitch.content"
              type="textarea"
              :rows="4"
              placeholder="Ghi chú"
              autocomplete="off"
              resize="none"
            />
          </el-form-item>
        </el-form>
        <div class="w-full grid grid-cols-2 gap-x-4">
          <button class="py-3 text-black text-base leading-6 font-bold rounded-lg bg-VNDG-iconGray" @click="dialogFormSwitch = false">Hủy bỏ</button>
          <button class="py-3 text-white text-base leading-6 font-bold rounded-lg bg-VNDG-buttonBlue" @click="handleSwitch('formSwitch')">Đồng ý</button>
        </div>
      </div>
    </el-dialog>

    <!-- dialog kết thúc -->
    <el-dialog center :visible.sync="dialogFormEnd">
      <div class="p-8 flex flex-col justify-center items-center">
        <h3 class="text-VNDG-darkBlue font-bold text-3.5xl leading-9">Kết thúc điều tra</h3>
        <h5 class="mt-6 text-center text-VNDG-darkBlue text-2xl leading-7">Hồ sơ này không có gian lận. Bạn có chắc chắn muốn kết thúc điều tra?</h5>
        <div class="w-full grid grid-cols-2 gap-x-4 mt-8">
          <button class="py-3 text-black text-base leading-6 font-bold rounded-lg bg-VNDG-iconGray" @click="dialogFormEnd = false">Hủy bỏ</button>
          <button class="py-3 text-white text-base leading-6 font-bold rounded-lg bg-VNDG-buttonBlue" @click="handleEnd()">Đồng ý</button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    const checkContent = (rule, value, callback) => {
      if (!value.trim()) {
        return callback(new Error('Hãy nhập nội dung'))
      } else {
        callback()
      }
    }
    return {
      dialogFormReject: false,
      dialogFormConsider: false,
      dialogFormSwitch: false,
      dialogFormEnd: false,
      options: [{
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }, {
        value: 'Option3',
        label: 'Option3'
      }, {
        value: 'Option4',
        label: 'Option4'
      }, {
        value: 'Option5',
        label: 'Option5'
      }],
      formReject: {
        title: '',
        content: ''
      },
      formConsider: {
        isCheat: false,
        content: ''
      },
      formSwitch: {
        value: '1',
        content: ''
      },
      rulesReject: {
        name: [{ required: true, message: 'Hãy chọn lý do', trigger: 'blur' }],
        content: [{ validator: checkContent, trigger: 'change' }]
      }
    }
  },
  methods: {
    handleReject(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$notify.success({
            message: 'Từ chối hồ sơ thành công',
            title: 'Trạng thái',
            duration: 2000
          })
          this.$refs[formName].resetFields()
          this.dialogFormReject = false
          // await axios
          //   .get(process.env.BASE_URL_CONTACT_API_V1, {
          //     params: {
          //       fullname: this.formRegister.name.trim(),
          //       email: this.formRegister.email.trim(),
          //       phone: this.formRegister.phone.trim(),
          //       content: this.formRegister.content.trim()
          //     }
          //   })
          //   .then((result) => {
          //     this.$notify.success({
          //       message: 'Từ chối hồ sơ thành công',
          //       title: 'Trạng thái',
          //       duration: 2000
          //     })
          //     this.$refs[formName].resetFields()
          //     this.dialogFormReject = false
          //   })
          //   .catch((err) => {
          //     this.$notify.error({
          //       message: 'Có lỗi xảy ra. Vui lòng thử lại sau',
          //       title: 'Trạng thái',
          //       duration: 2000
          //     })
          //     this.$refs[formName].resetFields()
          //     this.dialogFormReject = false
          //     console.log(err)
          //   })
        } else {
          return false
        }
      })
    },
    handleConsider(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$notify.success({
            message: 'Chuyển thẩm định hồ sơ thành công',
            title: 'Trạng thái',
            duration: 2000
          })
          this.$refs[formName].resetFields()
          this.dialogFormConsider = false
        } else {
          return false
        }
      })
    },
    handleSwitch(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$notify.success({
            message: 'Từ chối hồ sơ thành công',
            title: 'Trạng thái',
            duration: 2000
          })
          this.$refs[formName].resetFields()
          this.dialogFormSwitch = false
        } else {
          return false
        }
      })
    },
    handleEnd() {
      this.$notify.success({
        message: 'Kết thúc điều tra thành công',
        title: 'Trạng thái',
        duration: 2000
      })
      this.dialogFormEnd = false
    }
  }
}
</script>
<style lang="scss">
.detail-check {
  .info {
  margin-top: 50px;
  &__left {
    box-shadow: 0px 6px 4px rgba(222, 219, 219, 0.25);
    border-radius: 4px;
  }
  &__title {
    @apply text-VNDG-gray700 font-bold text-xl leading-6;
  }
  &__content {
    @apply flex items-center text-base leading-5 text-VNDG-mainDblue;
  }
  &__img-cmnd {
    width: 84px;
    height: 112px;
  }
}
.el-dialog {
    border-radius: 20px;
    width: 555px;
    max-width: 90%;
    margin: 0 auto;
  }
  .el-dialog__header {
    display: none;
  }
  .el-dialog__body {
    word-break: normal;
    padding: 0 !important;
  }
}
</style>
