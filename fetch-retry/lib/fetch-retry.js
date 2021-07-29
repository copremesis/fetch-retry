
const fetch = require('node-fetch');

const fetchRetry = async (url, options, n) => {
  let response = await fetch(url, options);
  if(response.status === 200) {
    return response;
  } else {
    if (n === 1) throw "Retry Limit reached";
    console.log('retrying...', response.status);
    return await fetchRetry(url, options, n - 1);
  }
};

module.exports = {
  fetchRetry,
};

