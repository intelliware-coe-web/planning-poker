const defaultHeaderConfigs = {
  headers: {
    'Content-Type': 'application/json',
    'mode': 'cors'
  }
};

export const getData = (url) => {
  return fetch(url, defaultHeaderConfigs)
  .then(response => {
    if(!response.ok) {
        throw Error('HTTP status ' + response.status);
    }
    return response.json();
  })
  .catch(error => {
     throw error ? error : Error('Get data failed from url ' + url);
  });
}

export const postData = (url = '', data = {}) => {
  return fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then(response => {
    if(!response.ok) {
        throw Error('HTTP status ' + response.status);
    }
    return response.json();
  })
  .catch(error => {
     throw error ? error : Error('Post data failed to url ' + url);
  });
}