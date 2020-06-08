"use strict";
const Stream = use("App/Models/Stream");

class PanelController {
  async index({ view }) {
    const clientData = await Stream.query().fetch();
    return view.render("panel",{clients:clientData.toJSON()});
  }
}

module.exports = PanelController;
