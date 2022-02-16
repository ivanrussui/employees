import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: ''
		}
	}

	onValueChange = (e) => { // ? передаем (объект событие) чтобы потом отменить по умолч поведение
		this.setState({
			[e.target.name] : e.target.value // через name мы получаем доступ к атрибуту name в верстке у input
		})
	}


	// ? метод для отправки формы
	onSubmit = (e) => {
		e.preventDefault();
		// * мой вариант
		// if (this.state.name.length >= 3 && this.state.salary !== '') {
		// 	this.props.onAdd(this.state.name, this.state.salary);
		// 	this.setState({
		// 		name: '',
		// 		salary: ''
		// 	})
		// }
		// * вариант из ответов
			if (this.state.name.length < 3 || !this.state.salary) return;
			this.props.onAdd(this.state.name, this.state.salary);
			this.setState({
				name: '',
				salary: ''
			})

  }
	
	render() {
		const {name, salary} = this.state;
		
		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form className="add-form d-flex"
					  onSubmit={this.onSubmit}>
	
						<input type="text" 
								className="form-control new-post-label"
								placeholder="Как его зовут?"
								name='name'
								value={name} // value нужен чтобы реакт контролировал поведение формы в ответ на юзерский ввод
								onChange={this.onValueChange}/>
						<input type="number" 
								className="form-control new-post-label"
								placeholder="З/П в $?"
								name='salary'
								value={salary}
								onChange={this.onValueChange}/>
	
						<button type="submit"
								className="btn btn-outline-light">Добавить</button>
															
				</form>
			</div>
		)
	}
}

export default EmployeesAddForm;