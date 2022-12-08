import {Controller} from './controller.js';
import {UI} from '../ui/ui.cjs';



if (!window.MINDAR) {
  window.MINDAR = {};
}

window.MINDAR.FACE = {
  Controller, 
  UI
};


export {
  Controller, 
  UI
}