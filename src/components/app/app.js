import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';		// * импортируем стили


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'Maxim N.', salary: 18000, increase: false, id: 1},
				{name: 'ALexsander M.', salary: 25000, increase: true, id: 2},
				{name: 'Evgenyi T.', salary: 32000, increase: false, id: 3},
			]
		}
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({data}) => {

			// ? 1 вариант правильного изменения состояния
			// const index = data.findIndex(elem => elem.id === id); // findIndex() метод находит индекс объекта (элемента)

			// const before = data.slice(0, index);
			// const after = data.slice(index + 1);

			// const newArr = [...before, ...after]; // так мы создали новый массив с нужными изменениями, не меняя старый
			// return {
			// 	data: newArr
			// }

			// * 2 вариант правильного изменения состояния. Этот предпочтительней
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			id: this.maxId++
		}
		this.setState(({data}) => {
			const newArr = [...data, newItem];
				return {
					data: newArr
				}
		});
	}

	render() {
		return (
			<div className='app'>
				<AppInfo/>
	
				<div className='search-panel'>
					<SearchPanel/>
					<AppFilter/>
				</div>
	
				<EmployeesList 
					data={this.state.data}
					onDelete={this.deleteItem}/> {/* // ? onDelete из файла employees-list.js */}
				<EmployeesAddForm onAdd={this.addItem}/>
			</div>
		);
	}
}

export default App;		// ! экспортируем по умолчанию компонент