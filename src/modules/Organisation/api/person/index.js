import request from '@/utils/request'


export function save(data) {
  if (data.id) {
    return request({
      url: '/person',
      method: 'put',
      data
    })
  } else {
    return request({
      url: '/person',
      method: 'post',
      data
    })
  }
}

export function deletes(data) {
  return request({
    url: '/person',
    method: 'delete',
    data
  })
}

export function find(filter) {
  return request({
    url: '/person/find',
    method: 'post',
    data:filter
  })
}

export function load(id) {
  return request({
    url: '/person/load/' + id,
    method: 'get'
  })
}
