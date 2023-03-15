import React, { useEffect } from 'react';
import { getTractores } from "../functions/getTractores";

const Tractores = () => {
	useEffect(() => {
		(async function fetchData() {
			const data = await getTractores();
			console.log(data);
		})();
	}, []);
	return <div>Cajas</div>;
};

export default Tractores;