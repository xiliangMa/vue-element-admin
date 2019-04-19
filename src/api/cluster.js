import request from '@/utils/request'

export function getClusterList() {
  return request({
    url: '/clusters',
    method: 'post'
  })
}

export function deleteCluster(clusterid) {
  return request({
    url: '/clusters/' + clusterid,
    method: 'delete'
  })
}
