import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../config/config';

export async function getTractores() {
	const tractores = collection(db, 'tractores');
	const tractoresSnapshot = await getDocs(tractores);
	const tractoresList = tractoresSnapshot.docs.map((doc) => doc.data());
	tractoresList.map((x) => (x.tipo = 'tractor'));
	return tractoresList;
}
