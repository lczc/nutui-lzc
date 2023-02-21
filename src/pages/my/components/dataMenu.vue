<template>
  <View class="data-menu">
    <nut-grid :column-num="3" center v-if="roleState == 1">
      <nut-grid-item text="工地地址" @click="navToAddress">
        <Image class="data-item-icon" :src="local_pin"></Image>
      </nut-grid-item>
      <nut-grid-item text="我的工人">
        <Image class="data-item-icon" :src="worker"></Image>
      </nut-grid-item>
      <nut-grid-item text="收件箱">
        <Image class="data-item-icon" :src="message_one"></Image>
      </nut-grid-item>
    </nut-grid>
    <nut-grid :column-num="3" center v-if="roleState == 2">
      <nut-grid-item text="我的名片" @click="navToAddress">
        <Image class="data-item-icon" :src="id_card"></Image>
      </nut-grid-item>
      <nut-grid-item text="我的客户">
        <Image class="data-item-icon" :src="address_book"></Image>
      </nut-grid-item>
      <nut-grid-item text="收件箱">
        <Image class="data-item-icon" :src="message_one"></Image>
      </nut-grid-item>
    </nut-grid>
  </View>
</template>

<script lang="ts" setup>
import { navigateTo } from '@/router/index'
import { View, Image } from '@tarojs/components'
import { local_pin, worker, message_one, id_card, address_book } from '@/assets/index'
import { useRoleStore } from '@/stores'
import { computed } from 'vue'

const roleStore = useRoleStore()
const roleState = computed(() => (roleStore.roleFlag == 'worker' ? 2 : 1))

const navToAddress = () => {
  navigateTo('pages/address')
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.data-menu {
  background-color: $color-grey;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 20px;
  margin: 0 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: $base-box-shadow-xhm;

  .nut-grid {
    width: 100%;
    flex-direction: row;
    .data-item-icon {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
