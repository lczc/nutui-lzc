declare interface MemberDTO {

  //id
  id: number;

  //用户名
  name: string;

  //邮箱
  email: string;

  //联系电话
  phone: string;

  //状态 0:锁定 1:有效
  state: number;

  //是否删除 0:未删除 1:已删除
  isDelete: number;

  //创建时间
  createTime: string;

  //创建时间
  modifyTime: string;

  //最近访问时间
  lastLoginTime: string;

  //性别 0:男 1:女 2:保密
  gender: number;

  //头像
  avatar: string;

  //描述
  description: string;

}
