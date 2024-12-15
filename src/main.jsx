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

import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import './index.css'
import Header from './Header.jsx'
import FirstForm from './First.jsx'
import SecondForm from './Second.jsx'
import ThirdForm from './Third.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  	<BrowserRouter>
    	<Header/>
		<Routes>
			<Route index element={<FirstForm/>}/>
			<Route path="/step-1" element={<FirstForm/>}/>
			<Route path="/step-2" element={<SecondForm/>}/>
			<Route path="/step-3" element={<ThirdForm/>}/>
		</Routes>
	</BrowserRouter>
  </StrictMode>,
)
