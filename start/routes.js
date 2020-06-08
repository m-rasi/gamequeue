"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.resource("/client", "ClienttController")
  .except(["create", "update", "edit", "show"])
  .validator(new Map([[["/client.store"], ["clientRequest"]]]))
  .middleware(new Map([[["destroy"], ["auth"]]]));

Route.get("panel", "PanelController.index").middleware(["auth"]).as("panel");

Route.group(() => {
  Route.get("login", "LoginController.index");
  Route.post("login", "LoginController.login").validator("login").as("login");
  Route.get("signup", "SignupController.index");
  Route.post("signup", "SignupController.signup")
    .validator("signup")
    .as("signup");
  Route.get("logout", "LogoutController.logout").as("logout");
}).prefix("user");
Route.get("truncate", "DbController.destroy").middleware(["auth"]).as("truncate");

Route.any("*", ({ view }) => view.render("404"));
