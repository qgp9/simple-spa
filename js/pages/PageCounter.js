import {div} from '../lib/simple-spa.js';
import Counter from '../components/Counter.js';

export default function PageCounter() {
  return div({}, Counter(), Counter(), Counter());
}