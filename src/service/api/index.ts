import HttpRequest from '..';
import { RESTClient, _httpClient as httpClient} from '@/service/client'
import { LoginForm } from '@/stores/memberStore'

export const HttpClient: HttpRequest = httpClient;

export class CommonApi extends RESTClient {
  constructor(resMark: string = 'common') {
    super(resMark)
  }

  /**
   *
   * @returns 获取城市数据
   */
  getCityData() {
    return this.get('cityData')
  }
}

/**
 * 用户api
 */
export class MemberApi extends RESTClient {
  constructor(resMark: string = 'member') {
    super(resMark)
  }

  /**
   *
   * @param loginForm 获取token表单
   * @returns token = result.DATA
   */
  getToken(loginForm: LoginForm) {
    return this.get('token', loginForm)
  }

}

/**
 * 用户工地管理api 
 */
export class WorkLocationApi extends RESTClient {
  constructor(resMark: string = 'member/work/location') {
    super(resMark)
  }

  list(): Promise<WorkLocation[]> {
    return this.get('list')
  }

  save(workLocation: WorkLocation) {
    this.post('',workLocation);
  }

  update(id: number, workLocation: WorkLocation) {
    this.put(id, workLocation);
  }

  remove(id: number) {
    this.delete(id);
  }

}


/**
 * 投诉与建议api 
 */
export class AdviseApi extends RESTClient {

  constructor(resMark: string = 'advise') {
    super(resMark)
  }
  

}


export class WorkerApi extends RESTClient {
  constructor(resMark: string = 'worker') {
    super(resMark)
  }
}
