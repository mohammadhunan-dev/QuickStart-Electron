const Realm = require("realm");

console.log("Realm", Realm);

async function run() {
  const realmApp = new Realm.App({ id: "tutsbrawl-qfxxj" }); // Replace <Your App ID> with your application id
  let credentials = Realm.Credentials.anonymous();
  // log in anonymously
  let user = await realmApp.logIn(credentials);

  console.log("user.id", user.id);
}

run();
