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
