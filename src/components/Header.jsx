import { NavLink } from 'react-router-dom'


const Header = () => (
	<header>
		<h1> RR library </h1>
		<nav>
			<ul>
				<li className="selected"> <NavLink to="/">Home</NavLink> </li>
				<li> The toplist </li>
				<li> Find a book </li>
				<li> My favorites </li>
				<li> Get a library card </li>
			</ul>
		</nav>
	</header>
)

export default Header
