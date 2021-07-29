
const { fetchRetry } = require("./lib/fetch-retry")
main = async () => {
  const url = "http://localhost:4567/idp";
  const limit = 5;
  console.log("Hold my beer...");
  let response;;
  try {
    response = await fetchRetry(url, {method: "POST", body: "this is a test"}, limit);
    const json = await response.json();
    console.log(json, response.status);
  } catch(e) {
    console.error(e);
  }
}

main()
