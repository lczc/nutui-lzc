import HttpRequest from '@/service/index'
import { HttpRequestConfig, baseServiceUrl } from '@/service/config'

export const _httpClient = new HttpRequest(baseServiceUrl)

export class RESTClient {
  private resMark: string

  constructor(resMark: string) {
    this.resMark = resMark
  }

  getResPath(url?: string | number) {
    return url ? `${this.resMark}/${url}` : this.resMark
  }

  get<TData = any>(
    url?: string | number,
    params?: any,
    config?: HttpRequestConfig
  ): Promise<TData> {
    return _httpClient.get(this.getResPath(url), params, config)
  }

  post<TData = any>(url?: string | number, data?: any, config?: HttpRequestConfig): Promise<TData> {
    return _httpClient.post(this.getResPath(url), data, config)
  }

  put<TData = any>(url?: string | number, data?: any, config?: HttpRequestConfig): Promise<TData> {
    return _httpClient.put(this.getResPath(url), data, config)
  }

  delete<TData = any>(
    url?: string | number,
    params?: any,
    config?: HttpRequestConfig
  ): Promise<TData> {
    return _httpClient.delete(this.getResPath(url), params, config)
  }
}
