import {defineStore} from 'pinia'
import {MemberApi, WorkerApi} from "@/api/index"

const memberApi = new MemberApi()
const workerApi = new WorkerApi()

const useRoleStore = defineStore({
  id: 'role',
  state: () => ({
    roleFlag: {} as string,
    memberInfo: {} as MemberDTO,
    workerInfo: {} as WorkerDTO
  }),
  actions: {
    getPresentRole(): MemberDTO| WorkerDTO {
      if (this.roleFlag) {
        if (this.roleFlag == 'member') {
          return this.memberInfo
        } else if (this.roleFlag == 'worker') {
          return this.workerInfo
        }
      }
      return this.memberInfo
    },
    getMember(): MemberDTO{
      return this.memberInfo
    },
    async initRole() {
      this.memberInfo = await memberApi.get()
      if (this.memberInfo) {
        this.roleFlag = 'member'
        this.workerInfo = await workerApi.get('self')
      }
    },
    switchRole(roleFlag: string) {
      this.roleFlag = roleFlag
    },
    isHasRole(roleFlag: string): boolean {
      if (roleFlag == 'member') {
        return this.memberInfo != null;
      } else if (roleFlag == 'worker') {
        return this.workerInfo != null;
      } else {
        return false;
      }
    },
    cleanRole() {
      this.roleFlag = {}
      this.memberInfo = {}
      this.workerInfo = {}
    }
  }
})
export {useRoleStore}
