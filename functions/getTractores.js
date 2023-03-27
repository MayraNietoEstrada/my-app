import { addDoc, collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../config/config';

export async function getTractores() {
	const tractores = collection(db, 'tractores');
	const tractoresSnapshot = await getDocs(tractores);
	const tractoresList = tractoresSnapshot.docs.map((doc) => doc.data());
	tractoresList.map((x) => (x.tipo = 'tractor'));
	return tractoresList;
}

export async function postTractor({ numero_economico, matricula }) {
	const docRef = await addDoc(collection(db, 'tractores'), {
		matricula: matricula.toUpperCase(),
		numero_economico: numero_economico.toUpperCase(),
	});
	return docRef.id;
}
