export default defineAppConfig({
  pages: [
    'pages/worker/index',
    'pages/studio/index',
    'pages/my/index',
    'pages/login/index',
    'pages/profile/index',
    'pages/address/index',
    'pages/addAddress/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTitleText: 'WeChat',
    navigationStyle: 'custom',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: '#000000',
    selectedColor: '#ffaa00',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    custom: false,
    list: [
      {
        pagePath: 'pages/worker/index',
        text: '工人',
        iconPath: 'assets/image/helmet-one.png',
        selectedIconPath: 'assets/image/helmet-one-active.png'
      },
      {
        pagePath: 'pages/studio/index',
        text: '工地',
        iconPath: 'assets/image/home.png',
        selectedIconPath: 'assets/image/home-active.png'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath: 'assets/image/me.png',
        selectedIconPath: 'assets/image/me-active.png'
      }
    ]
  }
})
