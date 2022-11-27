const { App } = require('@slack/bolt');
const dotenv = require('dotenv')

dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

(async () => {
  await app.start(process.env.PORT || 3000);

  // TODO: Get data about moon phase and pass them to the `postMessage`

  await app.client.chat.postMessage({
    channel: process.env.SLACK_CHANNEL,
    text: `Hey! It's ${getWeekDay()}`,
  })

  console.log('⚡️ Bolt app is running!');
})();

function getWeekDay () {
  return new Intl.DateTimeFormat("en-US", { weekday: 'long' }).format(new Date());
}