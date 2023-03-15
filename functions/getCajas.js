import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../config/config';

export async function getCajas() {
	const cajas = collection(db, 'cajas');
	const cajasSnapshot = await getDocs(cajas);
	const cajasList = cajasSnapshot.docs.map((doc) => doc.data());
	cajasList.map((x) => (x.tipo = 'caja'));
	return cajasList;
}
