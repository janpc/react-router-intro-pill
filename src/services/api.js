function simpleFetch(url) {
    console.log(url)
    return fetch(url)
        .then(response => {
            return response.json()
         })
         .then(data => {
             console.log(data)
             return data;
         })
  }
  
  export default simpleFetch;