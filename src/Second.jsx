/*
    Copyright (C) 2024  Eric Hernandez

    This file is part of kyc-form.

    kyc-form is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    kyc-form is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with kyc-form.  If not, see <https://www.gnu.org/licenses/>.
*/

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
