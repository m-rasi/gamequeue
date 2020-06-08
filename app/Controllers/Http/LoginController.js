"use strict";
const Config = use("Config");
class LoginController {
  async index({ view }) {
    return view.render("login");
  }

  async login({ request, auth, response, session }) {
    const { email, password, remember } = request.all();
    console.log(email,password);
   
    try {
      await auth.remember(!!remember).attempt(email, password);
      return response.route("panel");
    } catch (error) {
      session.flash(Config.get("messages.flash.loginFail"));
      return response.redirect("back");
    }
  }
}

module.exports = LoginController;
