import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component{
	constructor(props) {
		super(props);
		this.state = {
			increase: false
		}
	}

	// метод для onIncrease
	onIncrease = () => {
		this.setState(({increase}) => ({ // ? синтаксис деструктуризации
			increase: !increase
		}))
	}

	render() {
		const {name, salary} = this.props;
		const {increase} = this.state;

		// ? оборачиваем в переменную классы
		let classNames = "list-group-item d-flex justufy-content-between";

		// * проверяем на условие если increase: true from app.js 
		if (increase) {
			classNames += ' increase'; // * тогда доб класс .increase from css
		}
		
		return (
			<li className={classNames}>
				<span className="list-group-item-label">{name}</span>
				
				{/* // todo подключаем пропс {props.salary} со значениями из employees-list.js */}
				{/* // ! defaultValue атрибут Реакта */}
				<input type="text" className='list-group-item-input' defaultValue={salary + '$'}/> 
				<div className="d-flex justify-content-center align-items-center">

					<button type='button'
							className='btn-cookie btn-sm'
							onClick={this.onIncrease}>
						<i className="fas fa-cookie"></i>
					</button>
					
					<button type='button'
							className='btn-trash.btn-sm'>
						<i className="fas fa-trash"></i>		
					</button>

					<i className="fas fa-star"></i>
					
				</div>
			</li>
		)
	}
}

export default EmployeesListItem;