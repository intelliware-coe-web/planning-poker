const defaultHeaderConfigs = {
  headers: {
    'Content-Type': 'application/json',
    'mode': 'cors'
  }
};
export const simpleFetch = (url, onSuccess, onError) => fetch(url, defaultHeaderConfigs)
                                                            .then(
                                                                successResponse => successResponse.json()
                                                            );