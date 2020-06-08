'use strict'

class clientRequest {
  get rules () {
    return {
      'name':'required',
      'gameId':'required'
    }
  }
  get messages(){
    return {
      'name.required':'درج نام الزامی می باشد',
      'gameId.required':'درج آی دی بازی الزامی می باشد',
    }
  }
 
  async fails(error){
    this.ctx.session.withErrors(error).flashAll()
    return this.ctx.response.redirect('back')
  }
}

module.exports = clientRequest
