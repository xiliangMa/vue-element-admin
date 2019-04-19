import request from '@/utils/request'

export function getUsers(cond) {
  return request({
    url: `/users/?page=${cond.page}&number=${cond.limit}`,
    method: 'post'
  })
}

export function deleteUser(userid) {
  return request({
    url: '/users/' + userid,
    method: 'delete'
  })
}
