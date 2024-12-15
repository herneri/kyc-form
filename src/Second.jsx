import { useNavigate } from 'react-router-dom';

function SecondForm() {
	const navigate = useNavigate();

	function handle_back() {
		navigate("/step-1");
		return;
	}

	function handle_next() {
		navigate("/step-3");
		return;
	}

	return (
		<form>
			<p> <b> Step 2/3: </b> Enter account information</p>

			<h2> Email </h2>
			<input type="email" id="email"/>

			<h2> Password </h2>
			<input type="password" id="password"/>

			<h2> Account Type </h2>
			<select>
				<option> Trading </option>
				<option> Custodial </option>
				<option> Donor Advised </option>
				<option> IRA </option>
			</select>

			<h2> Bio </h2>
			<input type="text" id="bio"/>

			<br/>
			<button onClick={handle_back}> Back </button>
			<button onClick={handle_next}> Next </button>
		</form>
	);
}

export default SecondForm
