"use strict";
const Stream = use("App/Models/Stream");
class ClienttController {
  /**
   *
   * @param {*} param0
   * get ip and send suer in queue
   */
  async index({ view, request }) {
    const data = await Stream.query().orderBy("id", "desc").fetch();
    const ip = request.ip();
    let canSend = true;
    
    if (data.rows[0]) {
      for (const row in data.rows) {
        if (data.rows[row].ip === ip) {
          if (
            Math.floor(
              ((Date.now() - data.rows[row].created_at) / 1000 / 60) << 0
            ) <= 10
          ) {
            canSend=false
          }
        }
      }
    }
    return view.render("client", { data: data.rows.length,canSend});
  }
  /**
   *
   * @param {*} param0
   * check for ip exist prevent to send new request for 20min
   */
  async store({ request, response }) {
    const data = request.only(["gameId", "name"]);
    data.ip = request.ip();
    await Stream.create(data);
    return response.redirect("back");
  }
  async destroy({ params, request, response }) {
    await Stream.query().where({ id: params.id }).delete();
    return response.redirect("back");
  }
}

module.exports = ClienttController;
// await User.truncate()
