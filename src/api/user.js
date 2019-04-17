import request from '@/utils/request'

const api_local = 'http://192.168.110.43:8080/v1'
const tmp_token = 'admin-token'

export function login(data) {
  return request({
    url: api_local + '/auth/sigin',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  token = tmp_token
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

