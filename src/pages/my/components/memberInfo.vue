<template>
  <View class="member-info">
    <View class="member-info-avatar-wrapper">
      <Image
        class="member-info-avatar"
        :src="memberInfo?.avatar ? memberInfo.avatar : default_avator"
      />
    </View>
    <Text class="member-info-name" @click="handleMemberMore">
      {{ memberInfo?.name ? memberInfo.name : '请登录' }}
    </Text>
    <Image class="member-info-more" :src="right" @click="handleMemberMore" />
  </View>
</template>

<script lang="ts" setup>
import { View, Image, Text } from '@tarojs/components'
import { default_avator, right } from '@/assets/index'
import { useMemberStore, useRoleStore } from '@/stores'
import { navigateTo } from '@/router'
import { computed, onMounted } from 'vue'

const isLogin = computed(() => useMemberStore().isLogin)
const memberInfo = computed(() => useRoleStore().getMember())

onMounted(() => {
  if (isLogin.value) {
    useRoleStore().initRole()
  }
})

function handleMemberMore() {
  if (isLogin.value) {
    // 用户信息页面
    navigateTo('pages/profile')
  } else {
    // 去登录
    navigateTo('pages/login')
  }
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.member-info {
  background-color: $base-item-background;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  box-shadow: $base-box-shadow-xhm;
  margin: 0px 50px 20px 50px;
  padding: 10px;

  .member-info-avatar-wrapper {
    margin: 15px;
    background: conic-gradient(from 220deg, #fd648e 0deg, #884cb2 90deg, #fd648e);
    border-radius: 100%;
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;

    .member-info-avatar {
      border-radius: 100%;
      border: 7px solid #fff;
      width: 100px;
      height: 100px;
      background-size: cover;
      background-position: center;
    }
  }

  .member-info-more {
    width: 50px;
    height: 50px;
  }
  .member-info-name {
    @include font-black-title();
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
