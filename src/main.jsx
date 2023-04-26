import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routeConfig.jsx'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RecoilRoot>
		<RouterProvider router={router} />
		</RecoilRoot>
	</React.StrictMode>,
)
