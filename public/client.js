let ws = adonis.Ws("ws://5.235.77.198:3333/").connect();

ws.on("open", () => {
//   $(".status").addClass("connected");
  subscribeToChannel();
});
ws.on("error", () => {
    error()
//   $(".status").removeClass("connected");
});



async function send() {
  let id = $("#id").val();
  let name = $("#name").val();
  await ws.getSubscription("gameRequest").emit("message", { id, name });
}

function subscribeToChannel() {
  const queue = ws.subscribe("gameRequest");
  queue.on("error", () => {
      error()
    // $(".status").removeClass("connected");
  });
}

function error() {
    alert('Server Is Not Connect')
}