import request from '@/utils/request'

export function getHostList(cond) {
  return request({
    url: '/hosts',
    method: 'post'
  })
}

export function deleteHost(hostid) {
  return request({
    url: '/hosts/' + hostid,
    method: 'delete'
  })
}
