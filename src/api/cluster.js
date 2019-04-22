import request from '@/utils/request'

import { getFromNumber } from './dataproclib'

export function getClusterList(cond) {
  const from = getFromNumber(cond.page, cond.limit)
  return request({
    url: `/clusters?from=${from}&limit=${cond.limit}`,
    method: 'post'
  })
}

export function deleteCluster(clusterid) {
  return request({
    url: '/clusters/' + clusterid,
    method: 'delete'
  })
}
