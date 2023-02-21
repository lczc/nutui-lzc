<template>
  <view class="member-login">
    <image class="member-login-cover" :src="construction_worker_cuate"></image>
    <view class="member-login-content">
      <view class="member-login-btu">
        <nut-button type="success">微信一键登录</nut-button>
      </view>
      <view class="member-login-input" v-if="showInput">
        <nut-input placeholder="请输入手机号" v-model="phone" type="number" />
        <nut-input v-model="validCode" placeholder="请输入验证码" clearable>
          <template #right> <nut-button type='warning' :disabled="!validPhone"  size="small">获取验证码</nut-button> </template>
        </nut-input>
      </view>
      <view class="member-login-btu" v-if="!showInput">
        <nut-button type="warning"  @click="onPhoneLogin">手机号验证码登录</nut-button>
      </view>
      <view class="member-login-btu" v-if="showInput">
        <nut-button type="warning" :disabled="!validValidCode" @click="login">登录</nut-button>
      </view>

      <view class="member-login-agreement">
        <nut-checkbox v-model="consentAgreement">我已同意阅读《小黄帽用户协议》,《隐私协议》</nut-checkbox>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { construction_worker_cuate } from '@/assets/index';
import { Image } from '@tarojs/components';
import { computed, ref } from 'vue';
import { useMemberStore } from '@/stores';
import { navigateBack } from '@/router';

const showInput = ref<boolean>(false);
const validCode = ref('');
const phone = ref('');
const consentAgreement = ref(false)
const validPhone = computed(() => (phone.value + '').length >= 11);
const validValidCode = computed(() => (validCode.value+ '').length >= 1);

function onPhoneLogin() {
  if (!showInput.value) {
    showInput.value = true
  }
}

async function login() {
  const loginSuccess = await useMemberStore().login({
    phone: phone.value,
    validCode: validCode.value
  })

  if (loginSuccess) {
    navigateBack()
  }

}

</script>

<style lang="scss">
@import '@/style/index.scss';

.member-login {
  background-color: $base-background;
  width: 100%;
  min-height: 100%;

  .member-login-cover {
    margin: 20px;
  }

  .member-login-content {
    align-items: center;
    margin-top: 20px;

    .member-login-btu {
      width: 500px;
      margin: 20px;
    }

    .member-login-input {
      width: 500px;
      margin: 30px;
      margin-bottom: 10px;
    }

    .member-login-agreement {
      margin: 30px;
    }
  }
}
</style>