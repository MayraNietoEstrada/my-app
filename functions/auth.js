import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '../config/config';

export async function auth({ email, password }) {
	const usuariosRef = collection(db, 'usuarios');
	const q = query(
		usuariosRef,
		where('email', '==', email),
		where('password', '==', password)
	);

	const querySnapshot = await getDocs(q);

	if (querySnapshot._docs.length === 0) {
		return false;
	} else {
    return querySnapshot._docs;
		
	}
}
