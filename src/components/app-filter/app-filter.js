import './app-filter.css';

const AppFilter = () => {
	return (
		// ? класс тянет стили из bootstrap
		<div className='btn-group'>	

			<button 
				className='btn btn-light'		// ? bootstrap
				type='button'>
					Все сотрудники
			</button>

			<button 
				className='btn btn-outline-light'		// ? bootstrap
				type='button'>
					На повышение
			</button>

			<button 
				className='btn btn-outline-light'		// ? bootstrap
				type='button'>
					З/П больше 1000$
			</button>
			
		</div>
	)
}

export default AppFilter;