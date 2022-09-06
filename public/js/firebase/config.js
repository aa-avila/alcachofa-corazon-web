// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import {
  getAnalytics,
  logEvent
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAYwSSLcb71LiTxVP__g1k7sQZJ5TAdNnk',
  authDomain: 'alcachofa-corazon.firebaseapp.com',
  databaseURL: 'https://alcachofa-corazon-default-rtdb.firebaseio.com',
  projectId: 'alcachofa-corazon',
  storageBucket: 'alcachofa-corazon.appspot.com',
  messagingSenderId: '1034140561735',
  appId: '1:1034140561735:web:5f443a0bc566dd94fb5c62',
  measurementId: 'G-L02R05D4W4'
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { logEvent, analytics };
