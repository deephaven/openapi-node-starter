// Set a few objects that don't exist in the Node environment
class Event {
  constructor(type, dict) {
    this.type = type;
    if (dict) {
      this.detail = dict.detail;
    }
  }
}

class CustomEvent extends Event {
  constructor(...args) {
    super(...args);
  }
}

global.self = global;
global.window = global;
global.Event = Event;
global.CustomEvent = CustomEvent;
global.WebSocket = require('ws');
