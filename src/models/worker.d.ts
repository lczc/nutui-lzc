declare interface WorkerDTO {

  //id
  id: number;

  //姓名
  name: string;

  //联系电话
  phone: string;

  //-1:待审核 0:锁定 1:有效
  sysState: number;

  //用户ID
  memberId: number;

  //创建时间

  createTime: string;

  //创建时间
  modifyTime: string;

  //头像
  avatar: string;

  //所在地区编码
  locationAreaCode: number;

  //性别 0:男 1:女 2:保密
  gender: number;

  //年龄
  age: number;

  //认证状态 0:未认证 1:已认证
  isCertification: number;

  //能力等级 1:学徒工 2:中级工 3:高级工
  abilityLevel: number;

  //结算方式 1:日结 2:月结 3:计量 4:面议
  settleType: number;

  //期望薪资 单位(元)
  expectedSalary;

  // 工作状态 1:找活中 2:忙碌中 3:可预约
  workerState: number;

  //预计到岗时间
  nextFreeTime: number;

  //工作描述
  workDescription: string;

  //工作描述图片集合
  descriptionImages: string[];

  //工作描述视频
  descriptionVideo: string;

  //工人工种类型
  workerTypeList: WorkerTypeDTO[];
}

class WorkerTypeDTO {

  //工种id
  id;

  //工种名称
  name: string;

  //工种描述
  description: string;

}
