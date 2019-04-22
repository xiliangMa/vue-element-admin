import request from '@/utils/request'
import { getFromNumber } from './dataproclib'

export function getHostList(cond) {
  const from = getFromNumber(cond.page, cond.limit)
  return request({
    url: `/hosts?from=${from}&limit=${cond.limit}`,
    method: 'post'
  })
}

export function deleteHost(hostid) {
  return request({
    url: '/hosts/' + hostid,
    method: 'delete'
  })
}
