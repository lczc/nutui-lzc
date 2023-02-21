<template>
  <View class="worker-page">
    <View class="worker-search">
      <nut-searchbar v-model="searchValue" background="linear-gradient(to right, #ffaa00, #fa6419)">
        <template v-slot:leftin>
          <Search2 />
        </template>
      </nut-searchbar>
    </View>
    <View class="worker-filter">
      <View class="worker-filter-title">全部</View>
      <View class="worker-filter-item-content">
        <View class="worker-filter-item" @click="cityFilterData.visible = true">
          <View class="worker-filter-item-text">{{ cityFilterData.title }}</View>
          <Image class="worker-filter-item-icon" :src="down" />
        </View>
        <nut-cascader
          title="地址选择"
          v-model:visible="cityFilterData.visible"
          v-model="cityFilterData.value"
          textKey="label"
          @change="cityFilterData.cityFilterSelect"
          valueKey="value"
          childrenKey="children"
          :options="cityFilterData.options"
        >
        </nut-cascader>

        <View class="worker-filter-item" @click="sortFilterData.visible = true">
          <View class="worker-filter-item-text">{{ sortFilterData.title }}</View>
          <Image class="worker-filter-item-icon" :src="down" />
        </View>
        <nut-popup
          position="bottom"
          :style="{ height: '35%' }"
          round
          v-model:visible="sortFilterData.visible"
        >
          <View class="worker-filter-pop-content">
            <View class="worker-filter-pop-type">
              <nut-picker
                v-model="sortFilterData.value"
                :columns="sortFilterData.options"
                title="排序方式"
                @confirm="sortFilterData.visible = false"
                @cancel="sortFilterData.visible = false"
              >
              </nut-picker>
            </View>
          </View>
        </nut-popup>

        <View class="worker-filter-item" @click="workerFilterData.visible = true">
          <View class="worker-filter-item-text"
            >{{
              workerFilterData.title +
              (workerFilterData.seelectNum >= 1 ? '·' + workerFilterData.seelectNum : '')
            }}
          </View>
          <Image class="worker-filter-item-icon" :src="down" />
        </View>

        <nut-popup
          closeable
          round
          v-model:visible="workerFilterData.visible"
          position="bottom"
          :style="{ height: '80%' }"
        >
          <View class="worker-filter-pop-content">
            <WorkerFilter></WorkerFilter>
          </View>
        </nut-popup>
      </View>
    </View>
    <View class="worker-record">
      <WorkerCard></WorkerCard>
      <WorkerCard></WorkerCard>
      <WorkerCard></WorkerCard>
      <WorkerCard></WorkerCard>
      <WorkerCard></WorkerCard>
    </View>
  </View>
</template>

<script lang="ts" setup>
import WorkerCard from './components/WorkerCard.vue'
import WorkerFilter from './components/WorkerFilter.vue'
import { View, Image } from '@tarojs/components'
import { Search2 } from '@nutui/icons-vue-taro'
import { down } from '@/assets/index'
import { computed, ref, reactive, onMounted } from 'vue'
import { useCityDataStore } from '@/stores'

// 搜索值
const searchValue = ref('')

onMounted(() => {
  // 初始化数据
  initData()
})

const cityFilterData = reactive({
  title: '地区',
  visible: false,
  value: [],
  options: [],
  cityFilterSelect: (values, pathNodes) => {
    const cityLabel = pathNodes.pop()
    cityFilterData.title = cityLabel.text
  }
})

const sortFilterData = reactive({
  title: '推荐',
  visible: false,
  value: 0,
  options: [
    { text: '推荐排序', value: 0 },
    { text: '评分排序', value: 1 },
    { text: '最新排序', value: 2 },
    { text: '附近排序', value: 3 }
  ]
})

const workerFilterData = reactive({
  title: '筛选',
  visible: false,
  seelectNum: 0
})

async function initData() {
  const cityData = await useCityDataStore().getCityData()
  cityFilterData.options = cityData
  console.log(cityFilterData.options)
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.worker-page {
  background-color: $base-background;
  width: 100%;
  min-height: 100%;

  .worker-search {
    margin: 0px 0px 0px 0px;
  }

  .worker-filter {
    background-color: $base-item-background;
    width: 100%;
    height: 75px;
    flex-direction: row;
    align-items: center;
    padding: 0px 35px 0px 35px;

    .worker-filter-title {
      @include font-black-title();
      font-size: 33px;
      font-weight: bold;
      width: 20%;
    }

    .worker-filter-item-content {
      width: 80%;
      flex-direction: row;
      justify-content: flex-end;

      .worker-filter-item {
        flex-direction: row;
        padding: 5px;
        margin: 0px 10px 0px 5px;
        align-items: center;

        .worker-filter-item-text {
          @include font-black-primary();
          font-size: 26px;
        }

        .worker-filter-item-icon {
          width: 35px;
          height: 35px;
        }
      }

      .worker-filter-pop-content {
        margin: 50px 0px 0px 0px;

      }
    }
  }

  .worker-record {
    padding-top: 20px;
  }
}
</style>
