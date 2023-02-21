<template>
  <view class="service">
    <view class="service-content">
      <nut-cell desc-text-align="left" is-link desc="服务条款"></nut-cell>
      <nut-cell desc-text-align="left" is-link desc="投诉与建议"></nut-cell>
      <nut-cell desc-text-align="left" is-link desc="设置"></nut-cell>
      <nut-cell desc-text-align="left" is-link desc="关于我们"></nut-cell>
    </view>
  </view>
</template>

<script setup lang="ts">
import { View } from '@tarojs/components'
</script>

<style lang="scss">
@import '@/style/index.scss';

.service {
  margin: 0 50px;
  margin-bottom: 20px;
  .service-content {
    margin-top: 10px;

    .nut-cell {
      flex-direction: row;
      margin: 5px;
    }
  }
}
</style>
