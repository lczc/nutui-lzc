<template>
  <view class="my-center">
    <View class="top-content">
      <MemberInfo v-if="!roleState || roleState == 1"></MemberInfo>
      <WorkerInfo v-if="roleState == 2"></WorkerInfo>
      <DateMenu></DateMenu>
      <view class="my-center-title">功能中心</view>
      <FunctionCenter></FunctionCenter>
    </View>
    <view class="my-center-title">其他服务</view>
    <OrtherService></OrtherService>
  </view>
</template>

<script lang="ts" setup>
import { View } from '@tarojs/components'
import MemberInfo from './components/memberInfo.vue'
import DateMenu from './components/dataMenu.vue'
import FunctionCenter from './components/functionCenter.vue'
import OrtherService from './components/ortherService.vue'
import WorkerInfo from '../worker/components/WorkerInfo.vue'
import { useRoleStore } from '@/stores'
import { computed } from 'vue'

const roleStore = useRoleStore()
const roleState = computed(() => (roleStore.roleFlag == 'worker' ? 2 : 1))
</script>

<style lang="scss">
@import '@/style/index.scss';
.my-center {
  background: linear-gradient(45deg, #ffffff 50%, #e49129 150%);
  filter: blur(0px);
  width: 100%;
  min-height: 100%;
  .top-content {
    padding-top: 50px;
  }

  .my-center-title {
    @include font-black-title();
    margin: 0 50px;
    margin-top: 20px;
    font-size: 36px;
    font-weight: bold;
  }
}
</style>
