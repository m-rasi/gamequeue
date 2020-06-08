"use strict";
const User = use("App/Models/User");
class SignupController {
  index({ view }) {
    return view.render("signup");
  }
  async signup({ request, auth, response, session }) {
    const userData = request.only(["email", "password"]);
     await User.create(userData);
    return response.route("panel");
  }
}

module.exports = SignupController;
