// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCv09F4aq4gsxyZ76b6bzCS98B_MRYoolA',
	authDomain: 'my-app-8196b.firebaseapp.com',
	projectId: 'my-app-8196b',
	storageBucket: 'my-app-8196b.appspot.com',
	messagingSenderId: '481174480073',
	appId: '1:481174480073:web:0d1546af0b7cfb0a6f9918',
	measurementId: 'G-HKRRS48B25',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);


