import './employees-list-item.css';

const EmployeesListItem = (props) => {

	const { name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise } = props;

	let classNames = 'list-group-item d-flex justufy-content-between';

	// * проверяем на условие если increase: true from app.js
	if (increase) {
		classNames += ' increase'; // * тогда доб класс .increase from css
	}

	if (rise) {
		classNames += ' like';
	}

	return (
		<li className={classNames}>
		<span className="list-group-item-label" onClick={onToggleRise}>
			{name}
		</span>

		{/* // todo подключаем пропс {props.salary} со значениями из employees-list.js */}
		{/* // ! defaultValue атрибут Реакта */}
		<input
			type="text"
			className="list-group-item-input"
			defaultValue={salary + '$'}
		/>
		<div className="d-flex justify-content-center align-items-center">
			<button
			type="button"
			className="btn-cookie btn-sm"
			onClick={onToggleIncrease} >
			<i className="fas fa-cookie"></i>
			</button>

			<button
			type="button"
			className="btn-trash btn-sm"
			// ? onDelete приходит из др файла от родителя
			onClick={onDelete} >
			<i className="fas fa-trash"></i>
			</button>

			<i className="fas fa-star"></i>
		</div>
		</li>
	);
}

export default EmployeesListItem;
