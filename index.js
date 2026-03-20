const api =
  "https://discord.com/api/webhooks/1484572125686796359/kDior4H3RTUY7CJSDBNjZkFG0xN4m37rsJNO6lHmt9m0bEAe6aDqtw9ao5nPOdCXUXfj";

const mensagem = {
  content: "Mais um teste",
};

fetch(api, {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(mensagem),
});

