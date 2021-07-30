import {Server} from './server';
import { initStrains } from './services/strain.service';

console.log('Starting server!');

const server = new Server();
setTimeout(async () => {
    await initStrains();
    await server.start();
}, 0);
