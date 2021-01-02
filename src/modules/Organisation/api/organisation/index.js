import request from '@/utils/request'


export function save(data) {
  if (data.id) {
    return request({
      url: '/organization',
      method: 'put',
      data
    })
  } else {
    return request({
      url: '/organization',
      method: 'post',
      data
    })
  }
}

export function deletes(data) {
  return request({
    url: '/organization',
    method: 'delete',
    data
  })
}

export function find(filter) {
  return request({
    url: '/service-organization/organization/find',
    method: 'POST',
    data:filter
  })
}

export function load(id) {
  return request({
    url: '/organization/load/' + id,
    method: 'get'
  })
}
