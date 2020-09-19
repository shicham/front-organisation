import request from '@/utils/request'


export function save(data) {
  if (data.id) {
    return request({
      url: '/organisation/type',
      method: 'put',
      data
    })
  } else {
    return request({
      url: '/organisation/type',
      method: 'post',
      data
    })
  }
}

export function deletes(data) {
  return request({
    url: '/organisation/type',
    method: 'delete',
    data
  })
}

export function find(filter) {
  return request({
    url: '/organisation/type/find',
    method: 'post',
    data:filter
  })
}
export function findAll() {
  return request({
    url: '/organisation/type/find',
    method: 'get'
  })
}
export function load(id) {
  return request({
    url: '/organisation/type/load/' + id,
    method: 'get'
  })
}
