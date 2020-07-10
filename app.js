const irisInclude = require('./openapiIncludeAsync');

const host = 'server.name'; // Deephaven server URL
const credentials = { username: 'user', token: 'pass', type: 'password' };
const apiFileName = 'irisapi.nocache.js'; // Only change if the file name changes on the server
let client;

start();
async function start() {
  try {
    await irisInclude(`https://${host}/irisapi/${apiFileName}`, apiFileName);
    const wsUrl = `wss://${host}/socket`;

    client = new iris.Client(wsUrl);
    client.addEventListener(iris.Client.EVENT_CONNECT, async () => {
      await client.login(credentials);
      console.log('logged in');
      // Do things with Deephaven!
    });

    client.addEventListener(iris.Client.EVENT_RECONNECT, async () => {
      console.log('reconnected and already authenticated');
    });

    client.addEventListener(iris.Client.EVENT_RECONNECT_AUTH_FAILED, async () => {
      console.log('need to reauth');
      start();
    })

    client.addEventListener(iris.Client.EVENT_DISCONNECT, () => {
      console.log('disconnected');
      setTimeout(start, 30000);
    });
  } catch(err) {
    console.error(err);
  }
}
