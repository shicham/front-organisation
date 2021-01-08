import request from '@/utils/request'


export function save(data) {
  if (data.id) {
    return request({
      url: '/service-referentiel/referentiel',
      method: 'put',
      data
    })
  } else {
    return request({
      url: '/service-referentiel/referentiel',
      method: 'post',
      data
    })
  }
}

export function deletes(data) {
  return request({
    url: '/service-referentiel/referentiel',
    method: 'delete',
    data
  })
}

export function find(filter) {
  return request({
    url: '/service-referentiel/referentiel/find',
    method: 'POST',
    data:filter
  })
}

export function findByParent(parentId) {
  return request({
    url: '/service-referentiel/referentiel/parent/'+parentId,
    method: 'get'
  })
}
export function load(id) {
  return request({
    url: '/service-referentiel/referentiel/load/' + id,
    method: 'get'
  })
}
