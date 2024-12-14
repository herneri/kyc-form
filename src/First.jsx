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

import React, {useRef} from 'react';

function FirstForm() {
	const element_ref = useRef(null);

	return (
		<form>
			<p> <b>Step 1/3:</b> Enter your personal information in the fields below </p>

			<h2> Full Name </h2>
			<input type="text" id="name"/>
			
			<h2> Date of Birth </h2>
			<input type="date" id="dob"/>
			
			<h2> Address </h2>
			<input type="text" id="address"/>

			<h2> Country </h2>
			<select id="country">
			</select>

			<h2> ID document </h2>
			<input type="file" id="doc"/>

			<br/>
			<button> Next </button>
		</form>

	);
}

export default FirstForm
