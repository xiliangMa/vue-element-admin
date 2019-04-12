import request from '@/utils/request'

const userUrl = 'http://39.106.101.34:8080/v1'

export function getUsers(page, size) {
  return request({
    url: userUrl + `/users/?page=${page}&number=${size}`,
    method: 'post'
  })
}
