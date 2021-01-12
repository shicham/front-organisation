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
    url: '/service-organization/organization/deletes',
    method: 'delete',
    data
  })
}

export function status(data) {
  let ids = data.ids;
  console.log(ids)
  return request({
    url: '/service-organization/organization/status/'+data.objectId,
    method: 'put',
    data:ids
  })
}

export function type(data) {
  let ids = data.ids;
  console.log(ids)
  return request({
    url: '/service-organization/organization/type/'+data.objectId,
    method: 'put',
    data:ids
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
