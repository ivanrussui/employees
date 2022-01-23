// ! импортируем другой компонент 
import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

// todo {data} из пропса from app.js
const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {
	const elements = data.map(item => {
		const {id, ...itemProps} = item;
		return (
			<EmployeesListItem 
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
				// onUpdate={() => console.log('Update')} // (хз видимо это можно удалить) придумываем пропс как обработчик и передаем функ которая написана в app.js
				onToggleIncrease={() => onToggleIncrease(id)}
				onToggleRise={() => onToggleRise(id)} /> 
		)
	})

	return (
		<ul className="app-list list-group">
			{/* // ? возвращаем переменную elements в объекте */}
			{elements}
		</ul>
	);
}

export default EmployeesList;