import request from '@/utils/request'

// const apiurl = 'http://39.106.101.34:8080/v1'
const api_local = 'http://192.168.110.43:8080/v1'

export function getHostList(cond) {
  return request({
    url: api_local + '/hosts',
    method: 'post'
  })
}

