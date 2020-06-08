const ws = adonis.Ws("ws://5.235.77.198:3333/").connect();

ws.on("open", () => {
  $(".status").addClass("connected");
  getRequest()
});
ws.on("error", () => {
  $(".status").removeClass("connected");
});


function remove() {

   $("#request").remove()
}
function getRequest() {
  const queue = ws.subscribe("gameRequest");
  queue.on("error", () => {
    $(".connection-status").removeClass("connected");
  });
  queue.on("message", (message) => {
     $("#request").prepend(
      `<div class="alert alert-info">
     New Request is received. <strong>${message.name} : ${message.id}</strong>
    </div>`
    );
    setTimeout(()=>{location.reload()},5000)
  });
}
function c_user(){
  window.open('/user/signup')
}