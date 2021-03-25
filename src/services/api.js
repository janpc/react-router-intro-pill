function simpleFetch(url) {
    return fetch(url)
        .then(response => {
            return response.json()
         })
         .then(data => {
             return data;
         })
  }
  
  export default simpleFetch;