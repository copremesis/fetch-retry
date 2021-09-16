const hasModule = (name) => {
  let exists = false;
  try {
   exists = require.resolve(name);
  } catch {}
  return exists;
}

let fetch, axios;
if(hasModule('node-fetch')) {
  fetch = require('node-fetch');
}

if(hasModule('axios')) {
  axios = require('axios')
}

const fetchRetry = async (url, options, n) => {
  const fetchLogic = async () => {
    let response = await fetch(url, options);
    if(response.status === 200) {
      return await response.json();
    } else {
      if (n === 1) throw "Retry Limit reached";
      console.log(`Got "${response.status}".   \e[0;36m  Doh! retrying...`);
      return  fetchRetry(url, options, n - 1);
    }
  }

  const axiosLogic = async () => {
    const supportedMethod = (method) => {
      return 'POST:GET'.split(':').includes(method);
    }

    if(!supportedMethod(options.method)) {
      return `Method not supported ${options.method}`;
    }

    try {
      let response = await axios[options.method.toLowerCase()](url,  options.body);
      return (({ status, statusText }) => ({ status, statusText }))(response);
    } catch(e) {
      if (n === 1) throw "Retry Limit reached";
      console.log(`Got "${e.message}". Doh! retrying...`);
      return  fetchRetry(url, options, n - 1);
    }
  }

  if(options.axios) {
    return await axiosLogic();
  } else {
    return await fetchLogic();
  }
};

module.exports = {
  fetchRetry,
  hasModule,
};
