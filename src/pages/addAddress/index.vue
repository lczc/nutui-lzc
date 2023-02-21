<template>
  <View class="add-address">
    <nut-form
      :model-value="formData"
      :rules="{
        name: [
          {
            message: 'name 至少两个字符',
            validator: nameLengthValidator
          }
        ]
      }"
      ref="ruleForm"
    >
      <nut-form-item
        label="姓名"
        prop="name"
        required
        :rules="[{ required: true, message: '请填写姓名' }]"
      >
        <nut-input
          class="nut-input-text"
          @blur="customBlurValidate('name')"
          v-model="formData.name"
          placeholder="请输入姓名"
          type="text"
        />
      </nut-form-item>
      <nut-form-item
        label="联系电话"
        prop="tel"
        required
        :rules="[
          { required: true, message: '请填写联系电话' },
          { validator: asyncValidator, message: '电话格式不正确' }
        ]"
      >
        <nut-input
          class="nut-input-text"
          v-model="formData.tel"
          placeholder="请输入联系电话"
          type="text"
        />
      </nut-form-item>
      <nut-form-item
        label="地址"
        prop="address"
        required
        :rules="[{ required: true, message: '请填写地址' }]"
      >
        <nut-input
          class="nut-input-text"
          v-model="formData.address"
          placeholder="请输入地址"
          type="text"
        />
      </nut-form-item>
      <nut-form-item required label="开关">
        <nut-switch v-model="formData.isDefault"></nut-switch>
      </nut-form-item>
      <nut-cell>
        <nut-button type="primary" size="small" style="margin-right: 10px" @click="submit"
          >提交</nut-button
        >
        <nut-button size="small" @click="reset">取消</nut-button>
      </nut-cell>
    </nut-form>
  </View>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { navigateTo } from '@/router/index'
import { MemberApi } from '@/service/api'
import { View } from '@tarojs/components'
import { showModal } from '@tarojs/taro'

const formData = reactive({
  name: '',
  tel: '',
  address: '',
  isDefault: false
})
const validate = (item: any) => {
  console.log(item)
}
const ruleForm = ref<any>(null)

const submit = () => {
  ruleForm.value.validate().then(({ valid, errors }: any) => {
    if (valid) {
      console.log('success', formData)
    } else {
      console.log('error submit!!', errors)
    }
  })
}
const reset = () => {
  ruleForm.value.reset()
}
// 失去焦点校验
const customBlurValidate = (prop: string) => {
  ruleForm.value.validate(prop).then(({ valid, errors }: any) => {
    if (valid) {
      console.log('success', formData)
    } else {
      console.log('error submit!!', errors)
    }
  })
}
// 函数校验
const customValidator = (val: string) => /^\d+$/.test(val)
const customRulePropValidator = (val: string, rule: FormItemRuleWithoutValidator) => {
  return (rule?.reg as RegExp).test(val)
}
const nameLengthValidator = (val: string) => val?.length >= 2
// Promise 异步校验
const asyncValidator = (val: string) => {
  return new Promise(resolve => {
    showToast.loading('模拟异步验证中...')
    setTimeout(() => {
      showToast.hide()
      resolve(/^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/.test(val))
    }, 1000)
  })
}
</script>
<style lang="scss">
.add-address {
  padding: 30px;
  background: #f2f2f2;
  height: calc(100% - 60px);
}
</style>
