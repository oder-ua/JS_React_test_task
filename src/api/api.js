export default {
  fetchData: () => new Promise((resolve, reject) => {
    fetch('https://swapi.co/api/people')
      .then(data => data.json())
      .then(json => resolve(json))
      .catch(error => reject(error));
  }),
};