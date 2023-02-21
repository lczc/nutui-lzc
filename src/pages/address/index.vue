<template>
  <View class="address">
    <nut-address-list
      :data="addressList"
      @click-item="clickItem"
      @del-icon="delClick"
      @edit-icon="editClick"
      :show-bottom-button="false"
      :data-options="{
        id: 'id',
        defaultAddress: 'defaultAddress',
        addressName: 'locationDetail',
        fullAddress: 'locationName',
        phone: 'contactsName'
      }"
    >
    </nut-address-list>
  </View>
  <View class="add-btn">
    <nut-button @click="navigateTo('pages/addAddress')" type="success">新增地址</nut-button>
  </View>
</template>
<script lang="ts" setup>
import { View } from '@tarojs/components'
import { showModal } from '@tarojs/taro'
import { ref, onMounted } from 'vue'
import { WorkLocationApi } from '@/api/index'

const workerLocationApi = new WorkLocationApi()
const addressList = ref<WorkLocation[]>([])
const clickItem = () => {
  console.log('Click To Address')
}
const delClick = (e, i) => {
  showModal({
    title: '提示',
    content: '确认删除地址吗',
    success: function (res) {
      if (res.confirm) {
        console.log(i.id)
        const { id } = i
        workerLocationApi.remove(id)
        const deIdx = addressList.value.findIndex(v => (v.id = id))
        addressList.value.splice(deIdx, 1)
      }
    }
  })
}
const editClick = () => {
  console.log('Click To Edit')
}
const getAddress = async () => {
  const res = await workerLocationApi.list()
  addressList.value = res
}
onMounted(() => {
  getAddress()
})
</script>
<style lang="scss">
.address {
  padding: 30px;
  background: #f2f2f2;
  height: calc(100% - 60px);
}
.add-btn {
  position: fixed;
  bottom: 100px;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 30px;
}
</style>
