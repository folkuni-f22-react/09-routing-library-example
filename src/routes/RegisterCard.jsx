
const RegisterCard = () => (
	<div className="content">
		<h2> Get a library card </h2>
		<p>Please register to receive a library account.</p>
		<form action="#">
			<label htmlFor="username"> Name </label>
			<input id="username" type="text" />

			<label htmlFor="password"> Password </label>
			<input id="password" type="text" />

			<button type="button"> Give me that card! </button>
		</form>
	</div>
)

export default RegisterCard
