export function get (url, params) {
  return fetch(url, {
    method: 'GET',
    // 请求头
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    // 请求参数
    mode: 'same-origin',
    // cors 表示跨域 Access-Control-Allow-Origin: *
    body: {
      ...params
    }
  }).then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      return {
        status: response.status,
        statusText: response.statusText
      }
    }
  })
    .then(res => res)
    .catch(err => err)
}

export function post (url, params) {
  return fetch(url, {
    method: 'POST',
    // 请求头
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    // 请求参数
    mode: 'same-origin',
    // cors 表示跨域 Access-Control-Allow-Origin: *
    body: {
      ...params
    }
  }).then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      return {
        status: response.status,
        statusText: response.statusText
      }
    }
  })
    .then(res => res)
    .catch(err => err)
}
