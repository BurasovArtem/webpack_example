import App from './modules/app.service.js';
import { config } from './modules/config.js';
import './modules/header.component.js';

console.log(config.key)

const service = new App('Hello men');
service.log()