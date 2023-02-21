declare interface WorkLocation {
  // ID
  id: number

  /**
   * 创建时间
   */
  createTime: string

  /**
   * 修改时间
   */
  modifyTime: string

  /**
   * 用户ID
   */
  memberId: number

  /**
   * 所在地区编码
   */
  locationAreaCode: number

  /**
   * 工地详细名称
   */
  locationName: string

  /**
   * 工地详细地点
   */
  locationDetail: string

  /**
   * 经度
   */
  longitude: string

  /**
   * 纬度
   */
  latitude: string

  /**
   * 状态 0:正常 1:开工
   */
  state: number

  /**
   * 联系人名称
   */
  contactsName: string

  /**
   * 联系人电话号码
   */
  contactsPhone: string
}
