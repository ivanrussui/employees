// ! импортируем другой компонент 
import EmployeesLisItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

// todo {data} из пропса from app.js
const EmployeesList = ({data}) => {

	// ? map() перебирает и возвращает массив в переменную elements
	const elements = data.map(item => {
		// ! используем деструктуризацию чтобы вытаскивать отдельно id из data from app.js
		const {id, ...itemProps} = item;

		return (
			// ? благодаря key реакт понимает что этот компонент не надо перересовывать
			<EmployeesLisItem key={id} {...itemProps} />

			// * назначаем пропсы из item - объект из data from app.js
			// <EmployeesLisItem name={item.name} salary={item.salary}/>
		)
	})

	// ! если id не написали на бэкэнде. так можно только если порядок элементов (данных с бэка) меняться не будет
	// const elements = data.map((item, i) => {
	// 	const {id, ...itemProps} = item;
	// 	return (
	// 		<EmployeesLisItem key={i} {...itemProps} />
	// 	)
	// })

	return (
		<ul className="app-list list-group">
			{/* // ? возвращаем переменную elements в объекте */}
			{elements}
		</ul>
	);

	// ! без имитации данных с сервера
	// return (
	// 	<ul className="app-list list-group">
	// 		<EmployeesLisItem name="Maxim N." salary={800} />
	// 		<EmployeesLisItem name="ALexsander M." salary={3000} />
	// 		<EmployeesLisItem name="Evgenyi T." salary={5000} />
	// 	</ul>
	// );
}

export default EmployeesList;