import tokenService from './tokenService';

const BASE_URL = '/api/vhss';

export function index() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }      
  };
  return fetch(BASE_URL, options, {mode: 'cors'})
  .then(res => res.json());
}

export function create(vhs) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(vhs)
  };
  return fetch(BASE_URL, options, {mode: 'cors'})
  .then(res => res.json());
}

export function update(vhs, idx) {
  return fetch(`${BASE_URL}/${idx}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json',
    'Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(vhs)
  }, {mode: 'cors'}).then(res => res.json());
}

export function deleteOne(idx) {
  return fetch(`${BASE_URL}/${idx}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }, {mode: 'cors'}).then(res => res.json());
}
