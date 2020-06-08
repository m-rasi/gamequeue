"use strict";

class login {
  get rules() {
    return {
      email: "required|email",
      password: "required",
    };
  }
  get messages() {
    return {
      "email.required": "You must provide a email address.",
      "email.email": "You must provide a valid email address.",
      "password.required": "You must provide a password",
    };
  }

  async fails(error) {
    this.ctx.session.withErrors(error).flashAll();
    return this.ctx.response.redirect("back");
  }
}

module.exports = login;
