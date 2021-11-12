import './search-panel.css';

const SearchPanel = () => {
	return (
		<input 
				type='text' 
				className='form-control search-input' // ? эти классы из бутстрапа
				placeholder='Найти сотрудника'/>
	)
}

export default SearchPanel;