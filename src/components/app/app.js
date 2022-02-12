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
			],
			term: ''
		}
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
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

	// * 1) арг. строчка по которой бу искать; 2) массив данных для фильтрации 
	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter(item => {
			return item.name.indexOf(term) > -1
		})
	}

	onUpdateSearch = (term) => {
		this.setState({term});
	}

	render() {
		const {data, term} = this.state;
		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;
		const visibleDate = this.searchEmp(data, term);

		return (
			<div className='app'>
				<AppInfo employees={employees} increased={increased} />
	
				<div className='search-panel'>
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter/>
				</div>
	
				<EmployeesList 
					data={visibleDate}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}/>
				<EmployeesAddForm onAdd={this.addItem}/>
			</div>
		);
	}
}

export default App;