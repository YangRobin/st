export function get (url, params) {
  return fetch(url, {
    method: 'GET',
    // 请求头
    // headers: new Headers({
    //   'Content-Type': 'application/json'
    // }),
    // 请求参数
    mode: 'same-origin',
    // cors 表示跨域 Access-Control-Allow-Origin: *
    body: params
  }).then((response) => {
    console.log('robin')
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

let fd = new FormData()
fd.append('name', 'robin')
fd.append('password', 'wocao123')
export function post (url, params) {
  return fetch(url, {
    // dataType: 'json',
    method: 'POST',
    // 请求头
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }),
    // 请求参数
    mode: 'cors',
    // cors 表示跨域 Access-Control-Allow-Origin: *
    body: JSON.stringify(params)
  }).then((response) => {
    console.log(response)
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
