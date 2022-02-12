import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}

	onUpdateSearch = (e) => { // метод считывающий то что ввел юзер в строку поиска
		const term = e.target.value; // переменная и поля ввода
		this.setState({term});		// установка локального состояния, в пределах этого класса
		this.props.onUpdateSearch(term);  // это локал сост пробрасываем наверх. onUpdateSearch тут это другой компон уровнем выше; (term) это то что ввел юзер
	}
	
	render() {
		return (
			<input  type='text' 
					className='form-control search-input' // ? эти классы из бутстрапа. search-input похоже бесполезный класс))
					placeholder='Найти сотрудника'
					value={this.state.term}
					onChange={this.onUpdateSearch} />
		)
	}
}

export default SearchPanel;