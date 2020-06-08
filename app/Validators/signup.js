"use strict";

class signup {
  get rules() {
    return {
      email: "required|email|unique:users",
      password: "required",
    };
  }
  get messages() {
    return {
      "email.required": "You must provide a email address.",
      "email.email": "You must provide a valid email address.",
      "email.unique": "This email is already registered.",
      "password.required": "You must provide a password",
    };
  }
  async fails(error) {
    this.ctx.session.withErrors(error).flashAll();
    return this.ctx.response.redirect("back");
  }
}

module.exports = signup;
