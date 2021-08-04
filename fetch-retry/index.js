
const { fetchRetry } = require("./lib/fetch-retry")
main = async () => {
  const url = "http://localhost:4567/idp";
  const limit = 5;
  const options = {method: "POST", body: "this is a test"}
  console.log("requesting auth token @", url);
  let response;;
  try {
    response = await fetchRetry(url, options, limit);
    const json = await response.json();
    console.log(json, response.status);
  } catch(e) {
    console.error(e);
  }
}

main()
