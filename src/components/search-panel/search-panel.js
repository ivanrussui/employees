import './search-panel.css';

const SearchPanel = () => {
	return (
		<input 
				type='text' 
				className='form-control search-input' // ? эти классы из бутстрапа. search-input похоже бесполезный класс))
				placeholder='Найти сотрудника'/>
	)
}

export default SearchPanel;