import {
  navigateTo as _navigateTo,
  redirectTo as _redirectTo,
  switchTab as _switchTab,
  navigateBack as _navigateBack,
  reLaunch as _reLaunch,
  getCurrentPages as _getCurrentPages,
  useRouter
} from "@tarojs/taro";

export function switchTab(url: string) {
  const newUrl = createUrl(url);
  return _switchTab({
    url: newUrl
  });
}

export function reLaunch(url: string, param?: {}) {
  const newUrl = createUrl(url, param);
  return _reLaunch({
    url: newUrl
  });
}

export function createUrl(url: string, param?: {}): string {
  const newUrl = `/${url}/index`;
  if (param) {
    return `${newUrl}?routerQuery=${encodeURIComponent(JSON.stringify(param))}`;
  }
  return newUrl;
}

/**
 * @fn navigateTo 需要跳转的应用内非 tabBar 的页面的路径
 * @url 路由url
 */
export function navigateTo(url: string, param?: {}) {
  const newUrl = createUrl(url, param);
  return _navigateTo({
    url: newUrl
  });
}

export function redirectTo(url: string, param?: {}) {
  const newUrl = createUrl(url, param);
  return _redirectTo({
    url: newUrl
  });
}

export function serialize(data: any) {
  if ("routerQuery" in data) {
    return JSON.parse(decodeURIComponent(data.routerQuery));
  }
  return data;
}

export const navigateBack = _navigateBack
export const getCurrentPages  = _getCurrentPages
