const defaultHeaderConfigs = {
  headers: {
    'Content-Type': 'application/json',
    'mode': 'cors'
  }
};
export const getData = (url, onSuccess, onError) => fetch(url, defaultHeaderConfigs)
                                                          .then(
                                                              successResponse => successResponse.json()
                                                          );

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
          throw new Error('HTTP status ' + response.status);
      }
      return response.json();
  })
}