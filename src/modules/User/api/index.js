import request from '@/utils/request'


export function save(data) {
  if (data.id) {
    return request({
      url: '/user',
      method: 'put',
      data
    })
  } else {
    return request({
      url: '/user',
      method: 'post',
      data
    })
  }
}

export function deletes(data) {
  return request({
    url: '/user',
    method: 'delete',
    data
  })
}

export function find(filter) {

  return request({
    url: '/user/find',
    method: 'post',
    data:filter
  })
}

export function load(id) {
  return request({
    url: '/user/' + id,
    method: 'get'
  })
}
