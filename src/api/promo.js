import request from '@/utils/request'
import { getFromNumber } from './dataproclib'

export function getPromos(cond) {
  const from = getFromNumber(cond.page, cond.limit)
  return request({
    url: `/promotions/?page=${from}&limit=${cond.limit}`,
    method: 'post'
  })
}

export function deletePromo(promoid) {
  return request({
    url: '/promotions/' + promoid,
    method: 'delete'
  })
}
