<template>
  <View class="worker-filter">
    <scroll-view :scroll-y="true" style="height: 300rpx">
      <View class="worker-filter-type">
        <view class="worker-filter-title">工种选择</view>
        <View class="worker-filter-item">
          <nut-checkbox-group
            v-model="workerType"
            style="width: 100%; display: flex; flex-wrap: wrap"
          >
            <nut-checkbox shape="button" style="width: 100px" label="0">不限</nut-checkbox>
            <nut-checkbox shape="button" style="width: 100px" label="1">木工</nut-checkbox>
            <nut-checkbox shape="button" style="width: 100px" label="2">泥工</nut-checkbox>
            <nut-checkbox shape="button" style="margin-top: 5px; width: 100px" label="3"
              >水电工</nut-checkbox
            >
            <nut-checkbox shape="button" style="margin-top: 5px; width: 100px" label="4"
              >选框</nut-checkbox
            >
          </nut-checkbox-group>
        </View>
      </View>

      <View class="worker-filter-type">
        <view class="worker-filter-title">工人薪资</view>

        <View class="worker-filter-item">
          <nut-radio-group
            v-model="workerSalatyType"
            style="width: 100%; display: flex; flex-wrap: wrap"
          >
            <nut-radio shape="button" style="width: 100px" label="0">不限</nut-radio>
            <nut-radio shape="button" style="width: 100px" label="1">日结</nut-radio>
            <nut-radio shape="button" style="width: 100px" label="2">月结</nut-radio>
            <nut-radio shape="button" style="width: 100px" label="3">面议</nut-radio>
          </nut-radio-group>

          <nut-cell :style="{ padding: '40px 18px', width: '360px' }">
            <nut-range range v-model="workerSalary" max="1000" step="10"></nut-range>
          </nut-cell>
        </View>
      </View>

      <View class="worker-filter-type">
        <view class="worker-filter-title">工人工龄</view>

        <View class="worker-filter-item">
          <nut-radio-group
            v-model="workerWorkAge"
            style="width: 100%; display: flex; flex-wrap: wrap"
          >
            <nut-radio shape="button" style="width: 100px" label="1">不限</nut-radio>
            <nut-radio shape="button" style="width: 100px" label="2">1年以内</nut-radio>
            <nut-radio shape="button" style="width: 100px" label="3">1-3年</nut-radio>
            <nut-radio shape="button" style="width: 100px" label="4">3-5年</nut-radio>
            <nut-radio shape="button" style="width: 100px" label="5">5-10年</nut-radio>
            <nut-radio shape="button" style="width: 100px" label="6">10年以上</nut-radio>
          </nut-radio-group>
        </View>
      </View>
      <View class="worker-filter-bottom">
        <nut-button type="primary">确认</nut-button>
      </View>
    </scroll-view>
  </View>
</template>

<script lang="ts" setup>
import { View, ScrollView } from '@tarojs/components'
import { ref } from 'vue'

const workerType = ref()
const workerSalatyType = ref()
const workerSalary = ref([20, 80])
const workerWorkAge = ref(0)
</script>

<style lang="scss">
@import '@/style/index.scss';
.worker-filter {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  .worker-filter-type {
    .worker-filter-title {
      @include font-black-title();
      font-size: 32px;
      font-weight: bold;
      width: auto;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .worker-filter-item {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  .worker-filter-bottom {
    margin: 20px 20px 10px 20px;
  }
}
</style>
