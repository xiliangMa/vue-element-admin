import request from '@/utils/request'
const api_local = 'http://192.168.110.43:8080/v1'

export function getClusterList() {
  return request({
    url: api_local + '/clusters',
    method: 'post'
  })
}
