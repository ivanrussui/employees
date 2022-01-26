import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'Maxim N.', salary: 18000, increase: false, rise: true, id: 1},
				{name: 'ALexsander M.', salary: 25000, increase: true, rise: false, id: 2},
				{name: 'Evgenyi T.', salary: 32000, increase: false, rise: false, id: 3},
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
			rise: false,
			id: this.maxId++
		}
		this.setState(({data}) => {
			const newArr = [...data, newItem];
				return {
					data: newArr
				}
		});
	}

	// ! Код более читабелен, но длинее
	// onToggleIncrease = (id) => {
		// this.setState(({data}) => {
		// 	const index = data.findIndex(elem => elem.id === id); // получаем индекс элемента с которым бу работать

		// 	const old = data[index]; // получ старый объект
		// 	const newItem = {...old, increase: !old.increase}; // ...old получаем новый объект из старого не нарушая иммутабельность, это копия старого.  increase: !old.increase берет значение из old и меняет их на противоположные
		// 	const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; // ...data.slice(0, index) тут разворачиваем все объекты до того который изменился / newItem доб нов измененный элемент / ...data.slice(index + 1) это остаток от массива

		// 	return {
		// 		data: newArr
		// 	}
		// })
	// }

	// ! Алгоритм альтернатива попроще с использованием map()
	// onToggleIncrease = (id) => {
	// 	this.setState(({data}) => ({
	// 		data: data.map(item => {  // map() возвращ нов массив. item - каждый отдельный объект внутри массива
	// 			if (item.id === id) { // item.id === id - каждый id внутри этого объекта совпал с id внутри метода onToggleIncrease
	// 				return {...item, increase: !item.increase} // возращаем новый объект с свойствами item / increase: !item.increase берет значение из item и меняет их на противоположные
	// 			}
	// 			return item; // условие не срабатывает, то возращ item
	// 		})
	// 	}))
	// }

	// onToggleRise = (id) => {
	// 	this.setState(({data}) => ({
	// 		data: data.map(item => {
	// 			if (item.id === id) {
	// 				return {...item, rise: !item.rise}
	// 			}
	// 			return item;
	// 		})
	// 	}))
	// }

	// ? чтобы не писать 2 раза похожий функционал onToggleIncrease и onToggleRise, оптимизируем
	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item;
			})
		}))
	}

	render() {
		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;

		return (
			<div className='app'>
				<AppInfo employees={employees} increased={increased} />
	
				<div className='search-panel'>
					<SearchPanel/>
					<AppFilter/>
				</div>
	
				<EmployeesList 
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}/>
				<EmployeesAddForm onAdd={this.addItem}/>
			</div>
		);
	}
}

export default App;		// ! экспортируем по умолчанию компонент