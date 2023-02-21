<template>
  <View class="function">
    <View class="function-content">
      <View class="function-item">
        <Image class="function-item-icon" :src="qywx"></Image>
        <View class="function-item-text">加入群聊</View>
        <View class="function-item-desc">交流装修经验</View>
      </View>
      <View class="function-item">
        <Image class="function-item-icon" :src="waving_hand"></Image>
        <View class="function-item-text">邀请好友</View>
        <View class="function-item-desc">分享给更多人</View>
      </View>
      <View class="function-item" v-if="roleState == 0">
        <Image class="function-item-icon" :src="raising_hands"></Image>
        <View class="function-item-text">加入我们</View>
        <View class="function-item-desc">跟我们一起成长</View>
      </View>
      <View class="function-item" v-if="roleState != 0" @click="switchRole">
        <Image
          class="function-item-icon"
          :src="roleState == 2 ? worker_image : member_image"
        ></Image>
        <View class="function-item-text">切换角色</View>
        <View class="function-item-desc">{{
          roleState == 2 ? '切换为用户身份' : '切换为工人身份'
        }}</View>
      </View>
    </View>
  </View>
</template>

<script setup lang="ts">
import { View, Image } from '@tarojs/components'
import { qywx, waving_hand, raising_hands, worker_image, member_image } from '@/assets/index'
import { useMemberStore, useRoleStore } from '@/stores'
import { computed } from 'vue'

const roleStore = useRoleStore()
const memberStore = useMemberStore()

/**
 * 0: 正常用户
 * 1: 已成为工人, 当前身份为用户
 * 2: 已成为工人, 当前身份为工人
 */
const roleState = computed<number>(() => {
  if (memberStore.isLogin) {
    if (roleStore.isHasRole('worker')) {
      // 已经是工人
      if (roleStore.roleFlag == 'member') {
        // 当前角色为用户
        return 1
      } else if (roleStore.roleFlag == 'worker') {
        return 2
      }
    }
  }
  return 0
})

const switchRole = () => {
  if (roleStore.roleFlag) {
    if (roleStore.roleFlag == 'member') {
      roleStore.switchRole('worker')
    } else if (roleStore.roleFlag == 'worker') {
      roleStore.switchRole('member')
    }
  }
  console.log('switchRole 2 ' + roleStore.roleFlag)
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.function {
  margin: 0 50px;
  margin-top: 20px;
  margin-bottom: 20px;

  .function-content {
    flex-direction: row;
    justify-content: space-between;

    .function-item {
      background-color: $base-item-background;
      border-radius: 30px;
      width: 190px;
      height: 170px;
      flex-direction: column;
      align-items: center;
      box-shadow: $base-box-shadow-xhm;

      .function-item-icon {
        margin: 20px;
        width: 50px;
        height: 50px;
      }

      .function-item-text {
        @include font-black-title();
        font-size: 20px;
        font-weight: bold;
      }

      .function-item-desc {
        @include font-black-secondary();
        font-size: 15px;
      }
    }
  }
}
</style>
