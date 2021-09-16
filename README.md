

# Fetch Retry

Persistent HTTP client for 3rd party services with intermittent response codes

# Quick Start

```
  docker run -it copremesis/fetch-retry:v1.0.0
```

example use case

```javascript

const { hasModule, fetchRetry } = require("./lib/fetch-retry")
main = async () => {
  const url = "http://localhost:4567/idp";
  const limit = 5;
  const options = {
    method: "POST",
    body: "this is a test",
    axios: hasModule('axios')
  }
  console.log("requesting auth token @", url);
  let response;;
  try {
    response = await fetchRetry(url, options, limit);
    console.log(response);
  } catch(e) {
    console.log(e);
  }
}

main()

```

### build an updated image

```
  docker build . -t fetch-retry:v1.0.0
```
