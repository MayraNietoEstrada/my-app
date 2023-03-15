import React, { useEffect } from 'react';
import { getCajas } from '../functions/getCajas';

const Cajas = () => {
	useEffect(() => {
		(async function fetchData() {
			const data = await getCajas();
			console.log(data);
		})();
	}, []);
	return <div>Cajas</div>;
};

export default Cajas;
