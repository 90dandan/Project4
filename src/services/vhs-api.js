import tokenService from './tokenService';

const BASE_URL = '/api/vhss';

export function index() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function create(vhs) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      // Add this header - don't forget the space after Bearer
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(vhs)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function update(vhs) {
  return fetch(`${BASE_URL}/${vhs._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json',
    'Authorization': 'Bearer ' + tokenService.getToken()
  },
    body: JSON.stringify(vhs)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}
