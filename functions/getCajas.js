import { addDoc, collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../config/config';

export async function getCajas() {
	const cajas = collection(db, 'cajas');
	const cajasSnapshot = await getDocs(cajas);
	const cajasList = cajasSnapshot.docs.map((doc) => doc.data());
	cajasList.map((x) => (x.tipo = 'caja'));
	return cajasList;
}

export async function postCaja({ numero_economico, matricula }) {
	const docRef = await addDoc(collection(db, 'tractores'), {
		matricula: matricula.toUpperCase(),
		numero_economico: numero_economico.toUpperCase(),
	});
	return docRef.id;
}
