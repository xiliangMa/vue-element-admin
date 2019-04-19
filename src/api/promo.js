import request from '@/utils/request'

export function getPromos(cond) {
  return request({
    url: `/promotions/?page=${cond.page}&number=${cond.limit}`,
    method: 'post'
  })
}

export function deletePromo(promoid) {
  return request({
    url: '/promotions/' + promoid,
    method: 'delete'
  })
}
