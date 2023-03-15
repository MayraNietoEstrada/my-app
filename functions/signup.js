import {
	addDoc,
	collection
} from 'firebase/firestore/lite';
import { db } from '../config/config';

export async function signup({ nombre, email, password }) {
	// Add a new document in collection "cities"
	const docRef = await addDoc(collection(db, 'usuarios'), {
		nombre,
		email,
		password,
	});

	return docRef;
}
