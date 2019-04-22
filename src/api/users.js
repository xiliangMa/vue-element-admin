import request from '@/utils/request'
import { getFromNumber } from './dataproclib'

export function getUsers(cond) {
  const from = getFromNumber(cond.page, cond.limit)
  return request({
    url: `/users/?page=${from}&limit=${cond.limit}`,
    method: 'post'
  })
}

export function deleteUser(userid) {
  return request({
    url: '/users/' + userid,
    method: 'delete'
  })
}
