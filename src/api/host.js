import request from '@/utils/request'

export function getHost() {
  return request({
    url: '/hosts',
    method: 'post'
  })
}
