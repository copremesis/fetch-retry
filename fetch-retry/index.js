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
