import axios from 'axios';
// import store from 'store/dist/store.legacy';

// let valToken = store.get('token') || '';
// window.console.log(valToken);
export let http = axios.create({
  baseURL: 'http://stormma.me:5757/api',
  timeout: 5000,
  withCredentials: true, // 允许跨域 cookie
  headers: { 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Content-Type': 'application/json' }
});


// get
export const _get = (req) => {
  return http({method: 'get', url: `/${req.url}`, params: req.data, headers: {'Authorization': req.token|| ''} })
}

// put
export const _put = (req) => {
  return http({method: 'put', url: `/${req.url}`, data: req.data, headers: {'Authorization': req.token|| ''}})
}

// post
export const _post = (req) => {
  return http({ method: 'post', url: `/${req.url}`, data: req.data, headers: {'Authorization': req.token|| ''}})
}

// delete
export const _delete = (req) => {
  return http({ method: 'delete', url: `/${req.url}`, data: req.data, headers: {'Authorization': req.token|| ''} })
}
