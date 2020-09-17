import request from '@/utils/request'


export function save(data) {
  if (data.id) {
    return request({
      url: '/organisation',
      method: 'put',
      data
    })
  } else {
    return request({
      url: '/organisation',
      method: 'post',
      data
    })
  }
}

export function deletes(data) {
  return request({
    url: '/organisation',
    method: 'delete',
    data
  })
}

export function find(filter) {
  console.log("filter",filter)
  return request({
    url: '/organisation/find',
    method: 'post',
    data:filter
  })
}

export function load(id) {
  return request({
    url: '/organisation/' + id,
    method: 'get'
  })
}
