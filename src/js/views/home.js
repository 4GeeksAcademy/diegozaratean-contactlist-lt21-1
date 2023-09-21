import React, { useContext } from "react"; // 1. importar el hook de useContext
import {Context} from '../store/appContext.js' // 2. Importar el contexto de mi applicación
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () =>{

	const {store} = useContext(Context) // 3. activar el useContext y ahcer destructurig de lo que necesito, propiedades o metodos
	console.log('Demo desde flux')
	console.log(store)
	console.log(store.demo)
	console.log(store.count)

	return(
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working 123
			</a>
		</div>
	)
};
