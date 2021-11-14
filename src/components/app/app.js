import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';		// * импортируем стили


function App() {

	// ! Imitation Server
	const data = [
				// ? id: это потом будет атрибут key - благодаря key реакт понимает что этот компонент не надо перересовывать
				{name: 'Maxim N.', salary: 18000, increase: false, id: 1},
				{name: 'ALexsander M.', salary: 25000, increase: true, id: 2},
				{name: 'Evgenyi T.', salary: 32000, increase: false, id: 3},
	];

	return (
		<div className='app'>
			<AppInfo/>

			<div className='search-panel'>
				<SearchPanel/>
				<AppFilter/>
			</div>

			{/* 	// ! получаем данные Imitation Server {data} */}
			{/* // * когда передаем так пропс, то потом можем использовать его внутри компонента EmployeesList */}
			<EmployeesList data={data}/>
			<EmployeesAddForm/>
		</div>
	);
}

export default App;		// ! экспортируем по умолчанию компонент