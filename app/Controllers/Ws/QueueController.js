'use strict'

class QueueController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMessage(message){
    this.socket.broadcastToAll('message',message)
  }
}

module.exports = QueueController
