import {defineStore} from 'pinia'
import {clearStorageSync, setStorageSync} from '@tarojs/taro';
import {MemberApi} from "@/api/index";
import {useRoleStore} from "@/stores/roleStore";

export interface LoginForm {
  phone: string;
  validCode?: string;
  wxLoginCode?: string;
}

const memberApi = new MemberApi();

const useMemberStore = defineStore({
  id: 'member',
  state: () => ({
    isLogin: false,
    token: '' as string
  }),
  actions: {
    async login(loginForm: LoginForm) : Promise<boolean> {
      const data = await memberApi.getToken(loginForm)
      if (data) {
        this.token = data.TOKEN
        this.isLogin = true
        setStorageSync('token', this.token)
        await useRoleStore().initRole()
        return true
      } else {
        return false
      }
    },
    logout() {
      this.isLogin = false
      this.token = ''
      useRoleStore().cleanRole()
      clearStorageSync()
    }
  }
})
export {useMemberStore}
