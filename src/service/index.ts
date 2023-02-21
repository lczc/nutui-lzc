import { request, uploadFile } from '@tarojs/taro'
import { Method, ServiceUrlConfig, HttpRequestConfig } from '@/service/config'

class HttpRequest {
  private urlConfig: ServiceUrlConfig

  constructor(urlConfig: ServiceUrlConfig) {
    this.urlConfig = urlConfig
  }

  baseOptions<TData = any>(
    url: string,
    method: Method['method'] = 'GET',
    data?: any,
    options?: HttpRequestConfig
  ): Promise<TData> {
    const BASE_URL = this.urlConfig.baseUrl
    let baseOption = {
      url: `${BASE_URL}${url}`,
      data,
      method,
      header: {
        'content-type': 'application/json',
        ...options?.header
      },
      timeout: 10000
    }
    const newOptions = Object.assign(baseOption, options)
    return request(newOptions).then()
  }

  baseUpload(filePaths: string, success: (result) => void) {
    return uploadFile({
      url: this.urlConfig.uploadUrl,
      filePath: filePaths,
      name: 'file',
      formData: {
        token: 'upload'
      },
      success: success
    })
  }

  async get<TData = any>(url: string, params?: any, options?: any): Promise<TData> {
    return this.baseOptions(url, 'GET', params, options)
  }

  async post<TData = any>(url: string, data?: any, options?: any): Promise<TData> {
    return this.baseOptions(url, 'POST', data, options)
  }

  async put<TData = any>(url: string, data?: any, options?: any): Promise<TData> {
    return this.baseOptions(url, 'PUT', data, options)
  }

  async delete<TData = any>(url: string, params?: any, options?: any): Promise<TData> {
    return this.baseOptions(url, 'DELETE', params, options)
  }
}

export default HttpRequest
