import request from '@/utils/request'

export function getCluster() {
  return request({
    url: '/rancherservers',
    method: 'post'
  })
}
