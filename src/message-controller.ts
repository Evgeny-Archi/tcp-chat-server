import EventEmitter from 'node:events';
import { Buffer } from 'node:buffer';

class MessageController extends EventEmitter {
    sendMessage(request: Buffer) {
        const data = JSON.parse(request.toString());
        const response = JSON.stringify(data);
        this.emit('message', response);
    }
}

export default MessageController;
