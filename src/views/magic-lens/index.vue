<template>
  <div class="min-w-full" style="width: 100%">
    <div class="header shadow-lg bg-white w-full h-24 flex items-center">
      <div class="container mx-auto" style="margin: 0 auto; max-width: 1400px">
        <div class="grid grid-cols-2">
          <div>
            <img class="w-36 h-11" src="@/assets/Ezchain-logo-1.svg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="pb-24 mb-10" style="margin: 0 auto; max-width: 1400px">
      <div class="py-6 container mx-auto mt-8 px-11 rounded border border-solid border-magic-borderMagic" style="padding: 40px">
        <h2 class="text-xl font-bold mb-6 text-VNDG-listMagicLen" style="font-weight: bold; margin: 20px 0; font-size: 20px;">List Vesting Schedule</h2>
        <div class="no_scroll flex items-center gap-6 overflow-x-auto pb-6" style="flex-direction: column; display: flex;">
          <template>
            <el-table
              v-loading="loading"
              :data="tableData"
              size="small"
              stripe
              border
              style="width: 100%"
            >
              <el-table-column
                prop="vestingID"
                label="Vestingschedule ID"
                width="250"
              />
              <el-table-column
                prop="schedule.beneficiary"
                label="Address"
                width="200"
              />
              <el-table-column label="StartTime">
                <template slot-scope="scope">
                  <div>
                    {{ formatDate(scope.row.schedule.start.toNumber()) }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="EndTime">
                  <template slot-scope="scope">
                  <div>
                    {{ formatDate((scope.row.schedule.start.add(scope.row.schedule.duration)).toNumber()) }}
                  </div>
                </template>

              </el-table-column>

              <el-table-column
                prop="address"
                label="Total EZC"
              >
                <template slot-scope="scope">
                  <div>
                    {{ formatEZC(scope.row.schedule.amountTotal.toBigInt() ) }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="Vested EZC"
              >
                <template slot-scope="scope">
                  <div>
                    {{ formatEZC(scope.row.schedule.released.toBigInt()) }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="Status"
                width="100"
              >
                <template slot-scope="scope">
                  <div>
                    <el-tag v-if="scope.row.schedule.locked === false" type="success">{{ scope.row.schedule.locked ? 'Locked' : 'Active' }}</el-tag>
                    <el-tag v-else type="danger">{{ scope.row.schedule.locked ? 'Locked' : 'Active' }}</el-tag>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </template>
          <div class="flex justify-center items-center mb-10" style="display: flex; justify-content: center; align-items: center; margin-bottom: 50px; margin-top: 20px">
            <el-pagination
              :page-size="pageSize"
              :page-count="pageCount"
              :background="true"
              layout="prev, pager, next"
              @current-change="changePage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
const ethers = require('ethers')

const RPC = process.env.RPC || 'https://api.ezchain.com/ext/bc/C/rpc'
const provider = new ethers.providers.JsonRpcProvider({ url: RPC, timeout: 6000 })
const pageSize = 50
export default {
  data() {
    return {
      loading: true,
      pageSize,
      tableData: [],
      page: 1,
      vestingIDPromises: [],
      provider,
      pageCount: 1,
      vestingSchedulePromises: []
    }
  },
  created() {
    this.listSchedules(this.page)
  },
  methods: {
    formatDate(value) {
      if (value) {
        return moment.unix(value).utc().format('DD/MM/YYYY HH:mm:ss')
      }
      return ''
    },

    formatEZC(value) {
      return ethers.utils.formatEther(value.toString())
    },

    changePage(page) {
      console.log(page)
      this.page = page
      this.tableData = []
      this.vestingIDPromises = []
      this.vestingSchedulePromises = []
      this.listSchedules(page)
    },
    async listSchedules(pages) {
      const page = pages
      this.tableData = []
      const abi = [{ 'type': 'constructor', 'stateMutability': 'nonpayable', 'inputs': [{ 'type': 'address', 'name': 'token_', 'internalType': 'address' }] }, { 'type': 'event', 'name': 'OwnershipTransferred', 'inputs': [{ 'type': 'address', 'name': 'previousOwner', 'internalType': 'address', 'indexed': true }, { 'type': 'address', 'name': 'newOwner', 'internalType': 'address', 'indexed': true }], 'anonymous': false }, { 'type': 'event', 'name': 'Released', 'inputs': [{ 'type': 'uint256', 'name': 'amount', 'internalType': 'uint256', 'indexed': false }], 'anonymous': false }, { 'type': 'event', 'name': 'Revoked', 'inputs': [], 'anonymous': false }, { 'type': 'fallback', 'stateMutability': 'payable' }, { 'type': 'function', 'stateMutability': 'view', 'outputs': [{ 'type': 'bytes32', 'name': '', 'internalType': 'bytes32' }], 'name': 'computeNextVestingScheduleIdForHolder', 'inputs': [{ 'type': 'address', 'name': 'holder', 'internalType': 'address' }] }, { 'type': 'function', 'stateMutability': 'view', 'outputs': [{ 'type': 'uint256', 'name': '', 'internalType': 'uint256' }], 'name': 'computeReleasableAmount', 'inputs': [{ 'type': 'bytes32', 'name': 'vestingScheduleId', 'internalType': 'bytes32' }] }, { 'type': 'function', 'stateMutability': 'pure', 'outputs': [{ 'type': 'bytes32', 'name': '', 'internalType': 'bytes32' }], 'name': 'computeVestingScheduleIdForAddressAndIndex', 'inputs': [{ 'type': 'address', 'name': 'holder', 'internalType': 'address' }, { 'type': 'uint256', 'name': 'index', 'internalType': 'uint256' }] }, { 'type': 'function', 'stateMutability': 'nonpayable', 'outputs': [], 'name': 'createVestingSchedule', 'inputs': [{ 'type': 'address', 'name': '_beneficiary', 'internalType': 'address' }, { 'type': 'uint256', 'name': '_start', 'internalType': 'uint256' }, { 'type': 'uint256', 'name': '_cliff', 'internalType': 'uint256' }, { 'type': 'uint256', 'name': '_duration', 'internalType': 'uint256' }, { 'type': 'uint256', 'name': '_slicePeriodSeconds', 'internalType': 'uint256' }, { 'type': 'bool', 'name': '_revocable', 'internalType': 'bool' }, { 'type': 'uint256', 'name': '_amount', 'internalType': 'uint256' }] }, { 'type': 'function', 'stateMutability': 'view', 'outputs': [{ 'type': 'tuple', 'name': '', 'internalType': 'struct TokenVesting.VestingSchedule', 'components': [{ 'type': 'bool', 'name': 'initialized', 'internalType': 'bool' }, { 'type': 'address', 'name': 'beneficiary', 'internalType': 'address' }, { 'type': 'uint256', 'name': 'cliff', 'internalType': 'uint256' }, { 'type': 'uint256', 'name': 'start', 'internalType': 'uint256' }, { 'type': 'uint256', 'name': 'duration', 'internalType': 'uint256' }, { 'type': 'uint256', 'name': 'slicePeriodSeconds', 'internalType': 'uint256' }, { 'type': 'bool', 'name': 'revocable', 'internalType': 'bool' }, { 'type': 'uint256', 'name': 'amountTotal', 'internalType': 'uint256' }, { 'type': 'uint256', 'name': 'released', 'internalType': 'uint256' }, { 'type': 'bool', 'name': 'revoked', 'internalType': 'bool' }, { 'type': 'bool', 'name': 'locked', 'internalType': 'bool' }] }], 'name': 'getLastVestingScheduleForHolder', 'inputs': [{ 'type': 'address', 'name': 'holder', 'internalType': 'address' }] }, { 'type': 'function', 'stateMutability': 'view', 'outputs': [{ 'type': 'address', 'name': '', 'internalType': 'address' }], 'name': 'getToken', 'inputs': [] }, { 'type': 'function', 'stateMutability': 'view', 'outputs': [{ 'type': 'bytes32', 'name': '', 'internalType': 'bytes32' }], 'name': 'getVestingIdAtIndex', 'inputs': [{ 'type': 'uint256', 'name': 'index', 'internalType': 'uint256' }] }, { 'type': 'function', 'stateMutability': 'view', 'outputs': [{ 'type': 'tuple', 'name': '', 'internalType': 'struct TokenVesting.VestingSchedule', 'components': [{ 'type': 'bool', 'name': 'initialized', 'internalType': 'bool' }, { 'type': 'address', 'name': 'beneficiary', 'internalType': 'address' }, { 'type': 'uint256', 'name': 'cliff', 'internalType': 'uint256' }, { 'type': 'uint256', 'name': 'start', 'internalType': 'uint256' }, { 'type': 'uint256', 'name': 'duration', 'internalType': 'uint256' }, { 'type': 'uint256', 'name': 'slicePeriodSeconds', 'internalType': 'uint256' }, { 'type': 'bool', 'name': 'revocable', 'internalType': 'bool' }, { 'type': 'uint256', 'name': 'amountTotal', 'internalType': 'uint256' }, { 'type': 'uint256', 'name': 'released', 'internalType': 'uint256' }, { 'type': 'bool', 'name': 'revoked', 'internalType': 'bool' }, { 'type': 'bool', 'name': 'locked', 'internalType': 'bool' }] }], 'name': 'getVestingSchedule', 'inputs': [{ 'type': 'bytes32', 'name': 'vestingScheduleId', 'internalType': 'bytes32' }] }, { 'type': 'function', 'stateMutability': 'view', 'outputs': [{ 'type': 'tuple', 'name': '', 'internalType': 'struct TokenVesting.VestingSchedule', 'components': [{ 'type': 'bool', 'name': 'initialized', 'internalType': 'bool' }, { 'type': 'address', 'name': 'beneficiary', 'internalType': 'address' }, { 'type': 'uint256', 'name': 'cliff', 'internalType': 'uint256' }, { 'type': 'uint256', 'name': 'start', 'internalType': 'uint256' }, { 'type': 'uint256', 'name': 'duration', 'internalType': 'uint256' }, { 'type': 'uint256', 'name': 'slicePeriodSeconds', 'internalType': 'uint256' }, { 'type': 'bool', 'name': 'revocable', 'internalType': 'bool' }, { 'type': 'uint256', 'name': 'amountTotal', 'internalType': 'uint256' }, { 'type': 'uint256', 'name': 'released', 'internalType': 'uint256' }, { 'type': 'bool', 'name': 'revoked', 'internalType': 'bool' }, { 'type': 'bool', 'name': 'locked', 'internalType': 'bool' }] }], 'name': 'getVestingScheduleByAddressAndIndex', 'inputs': [{ 'type': 'address', 'name': 'holder', 'internalType': 'address' }, { 'type': 'uint256', 'name': 'index', 'internalType': 'uint256' }] }, { 'type': 'function', 'stateMutability': 'view', 'outputs': [{ 'type': 'uint256', 'name': '', 'internalType': 'uint256' }], 'name': 'getVestingSchedulesCount', 'inputs': [] }, { 'type': 'function', 'stateMutability': 'view', 'outputs': [{ 'type': 'uint256', 'name': '', 'internalType': 'uint256' }], 'name': 'getVestingSchedulesCountByBeneficiary', 'inputs': [{ 'type': 'address', 'name': '_beneficiary', 'internalType': 'address' }] }, { 'type': 'function', 'stateMutability': 'view', 'outputs': [{ 'type': 'uint256', 'name': '', 'internalType': 'uint256' }], 'name': 'getVestingSchedulesTotalAmount', 'inputs': [] }, { 'type': 'function', 'stateMutability': 'view', 'outputs': [{ 'type': 'uint256', 'name': '', 'internalType': 'uint256' }], 'name': 'getWithdrawableAmount', 'inputs': [] }, { 'type': 'function', 'stateMutability': 'nonpayable', 'outputs': [{ 'type': 'uint256', 'name': 'total', 'internalType': 'uint256' }], 'name': 'investorWithdraw', 'inputs': [{ 'type': 'bool', 'name': 'keepWrapped', 'internalType': 'bool' }] }, { 'type': 'function', 'stateMutability': 'view', 'outputs': [{ 'type': 'address', 'name': '', 'internalType': 'address' }], 'name': 'owner', 'inputs': [] }, { 'type': 'function', 'stateMutability': 'nonpayable', 'outputs': [], 'name': 'release', 'inputs': [{ 'type': 'bytes32', 'name': 'vestingScheduleId', 'internalType': 'bytes32' }, { 'type': 'uint256', 'name': 'amount', 'internalType': 'uint256' }] }, { 'type': 'function', 'stateMutability': 'nonpayable', 'outputs': [], 'name': 'renounceOwnership', 'inputs': [] }, { 'type': 'function', 'stateMutability': 'nonpayable', 'outputs': [], 'name': 'revoke', 'inputs': [{ 'type': 'bytes32', 'name': 'vestingScheduleId', 'internalType': 'bytes32' }] }, { 'type': 'function', 'stateMutability': 'nonpayable', 'outputs': [], 'name': 'setLock', 'inputs': [{ 'type': 'bytes32', 'name': 'vestingScheduleId', 'internalType': 'bytes32' }, { 'type': 'bool', 'name': 'locked', 'internalType': 'bool' }] }, { 'type': 'function', 'stateMutability': 'nonpayable', 'outputs': [], 'name': 'transferOwnership', 'inputs': [{ 'type': 'address', 'name': 'newOwner', 'internalType': 'address' }] }, { 'type': 'function', 'stateMutability': 'nonpayable', 'outputs': [], 'name': 'withdraw', 'inputs': [{ 'type': 'uint256', 'name': 'amount', 'internalType': 'uint256' }] }, { 'type': 'receive', 'stateMutability': 'payable' }]
      const contractAddress = '0x05E4dfbB6f26E568D846C95C0C716C4338fd1C0A'

      const contract = new ethers.Contract(contractAddress, abi, provider)

      // Tổng số schedules
      const count = await contract.getVestingSchedulesCount()

      // Tổng số trang
      const pageCount = parseInt((count.toNumber() + pageSize - 1) / pageSize)
      const offset = (page - 1) * pageSize

      let limit
      if (page === pageCount) {
        limit = count % pageSize
      } else {
        limit = pageSize
      }
      this.pageCount = pageCount
      console.log(pageCount, offset, limit)

      for (let i = offset; i < offset + limit; i++) {
        const id = new Promise(resolve => {
          contract.getVestingIdAtIndex(i).then(result => { resolve({ index: i, vestingID: result }) })
        })

        this.vestingIDPromises.push(id)
      }

      const vestingIDs = await Promise.all(this.vestingIDPromises)
      console.log(vestingIDs)

      for (const id of vestingIDs) {
        const schedule = new Promise(resolve => {
          contract.getVestingSchedule(id.vestingID).then(result => { resolve({ vestingID: id.vestingID, schedule: result }) })
        })
        this.vestingSchedulePromises.push(schedule)
      }

      const schedules = await Promise.all(this.vestingSchedulePromises)
      console.log(schedules)
      this.tableData = schedules
      if (this.tableData) {
        this.loading = false
      }
      return count, pageCount, schedules
    }
  },
  timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000)
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var year = a.getFullYear()
    var month = months[a.getMonth()]
    var date = a.getDate()
    var hour = a.getHours()
    var min = a.getMinutes()
    var sec = a.getSeconds()
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
    return time
  }
}
</script>
<style>
</style>
