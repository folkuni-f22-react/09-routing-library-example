import { NavLink } from 'react-router-dom'


const Header = () => (
	<header>
		<h1> RR library </h1>
		<nav>
			<ul>
				<li className="selected"> <NavLink to="/">Home</NavLink> </li>
				<li> <NavLink to="/toplist">The toplist</NavLink> </li>
				<li> <NavLink to="/find-book">Find a book</NavLink> </li>
				<li> <NavLink to="/favorites">My favorites</NavLink> </li>
				<li> <NavLink to="/get-a-card">Get a library card</NavLink> </li>
			</ul>
		</nav>
	</header>
)

export default Header
