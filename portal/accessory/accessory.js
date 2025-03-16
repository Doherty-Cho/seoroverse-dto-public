require('../../common/yup_locale')

const { object, number, string, date, boolean } = require('yup')
const { GNDR_TYPE } = require('../../common/code')
const { FileInfo: file } = require('../../common/file')
const { SuccessListRes } = require('../../common/response')

/**
 * 악세사리 목록조회 DTO
 * @property {number} id - 아이디
 * @property {FileInfo} rprs_img_file - 대표이미지파일
 * @property {string} avtr_expln - 악세사리설명
 * @property {string} gndr_se_cd - 성별구분코드(GNDR_SE_CD)
 * @property {number} indct_seq - 표시순서
 * @property {number} prchs_amt - 구매금액
 * @property {boolean} bsc_pvsn_yn - 기본제
 * @property {string} acsy_se_cd - 악세사리구분코드(ACSY_SE_CD)
 * @property {string|null} avtr_mtrl_expln - 아바타머티리얼설명. Optional
 * @property {string|null} avtr_mesh_expln - 아바타메쉬설명. Optional
 * @property {Date} crt_dt - 생성일시
 * @property {Date} mdfcn_dt - 수정일시
 */
const AccessoryList = object({
  /** 아이디 */
  id: number().label('아이디').required(),
  /** 대표이미지파일파일 */
  rprs_img_file: file.label('대표이미지파일').required(),
  /** 악세사리설명 */
  avtr_expln: string().label('악세사리설명').required(),
  /** 성별구분코드 */
  gndr_se_cd: string().label('성별구분코드').required().oneOf(Object.values(GNDR_TYPE)),
  /** 표시순서 */
  indct_seq: number().label('표시순서').required(),
  /** 구매금액 */
  prchs_amt: number().label('구매금액').required(),
  /** 기본제공여부 */
  bsc_pvsn_yn: boolean().label('기본제공여부').required(),
  /** 악세사리구분코드 */
  acsy_se_cd: string().label('악세사리구분코드').required(),
  /** 아바타머티리얼설명 */
  avtr_mtrl_expln: string().label('아바타머티리얼설명').nullable(),
  /** 아바타메쉬설명 */
  avtr_mesh_expln: string().label('아바타메쉬설명').nullable(),
  /** 생성일시 */
  crt_dt: date().label('생성일시').required(),
  /** 수정일시 */
  mdfcn_dt: date().label('수정일시').required(),
})

/** 악세사리 목록조회 결과 DTO */
const AccessoryListRes = SuccessListRes(AccessoryList)

module.exports = {
  AccessoryList,
  AccessoryListRes,
}
