<template>
  <view class="profile">
    <nut-form>
      <nut-form-item label="姓名">
        <nut-input v-model="profileForm.name" class="nut-input-text" type="text" />
      </nut-form-item>
      <nut-form-item label="性别">
        <nut-radio-group direction="horizontal" v-model="profileForm.gender">
          <nut-radio label="0">男</nut-radio>
          <nut-radio label="1">女</nut-radio>
          <nut-radio label="2">保密</nut-radio>
        </nut-radio-group>
      </nut-form-item>
    </nut-form>
    <view class="profile-submit-btu">
      <nut-button type="warning" @click="submitProfile">保存</nut-button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { navigateBack } from '@/router';
import { MemberApi } from '@/service/api';
import { useRoleStore } from '@/stores';
import { onMounted, reactive } from 'vue';

const memberApi = new MemberApi();
const profileForm = reactive({
  name: '',
  gender: "0"
});


onMounted(() => {
  const member = useRoleStore().getMember();
  profileForm.name = member.name
  profileForm.gender = member.gender + ""
})


function submitProfile() {
  memberApi.put('', profileForm).then(() => {
    useRoleStore().initRole()
    navigateBack()
  })
}


</script>
<style lang="scss">
@import '@/style/index.scss';

.profile {
  background-color: $base-background;
  width: 100%;
  min-height: 100%;
  align-items: center;

  .profile-submit-btu {
    width: 500px;
    margin: 30px;
  }

}
</style>
