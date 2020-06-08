'use strict'
const Streamer = use('App/Models/Stream')
class DbController {
   async destroy({response}){
         await Streamer.truncate()
         return response.route("panel");
    }
}

module.exports = DbController
