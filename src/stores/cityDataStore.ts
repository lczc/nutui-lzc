import { getStorageSync, setStorageSync } from '@tarojs/taro'
import { defineStore } from 'pinia'
import { CommonApi } from './../service/api/index'
const commonAPi = new CommonApi()

const useCityDataStore = defineStore({
  id: 'cityData',
  state: () => ({
    cityData: []
  }),
  actions: {
    getCityData(): Promise<any> {
      if (!this.cityData || !this.cityData.length) {
        const cityDataByCache = getStorageSync('cityData')
        if (!cityDataByCache || !cityDataByCache.length) {
          const cityDataByService = commonAPi.getCityData()
          this.cityData = cityDataByService
          setStorageSync('cityData', cityDataByService)
        } else {
          this.cityData = cityDataByCache
        }
      }

      return this.cityData
    }
  }
})
export { useCityDataStore }
