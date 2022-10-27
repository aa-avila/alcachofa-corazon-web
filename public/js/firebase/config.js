// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import {
  getAnalytics,
  logEvent
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js';
import { firebaseCredentials } from './credentials.js';

const firebaseConfig = { ...firebaseCredentials };
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { logEvent, analytics };
