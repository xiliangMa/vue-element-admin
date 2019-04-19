import request from '@/utils/request'

const api_mock = 'http://localhost:9527/dev-api'

export function login(data) {
  return request({
    url: '/auth/signin',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/users/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: api_mock + '/user/logout',
    method: 'post'
  })
}

