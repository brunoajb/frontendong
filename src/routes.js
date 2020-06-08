import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import {isAuthenticated} from './services/auth';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Painel from './pages/PainelOng';
import CadastroCaso from './pages/CadastroCasos';

const PrivateRoute = ({component: Component, ...rest})=>(
	<Route 
		{...rest} 
		render={props=>
			isAuthenticated() ? (
				<Component {...props}/>
			):(
				<Redirect to={{pathname:'/', state:{from:props.location} }} />
			)
		}
	/>
)


const Routes = ()=>(

	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Login} />
			<PrivateRoute exact path="/dashboard" component={Dashboard} />
			<PrivateRoute exact path="/painel" component={Painel} />
			<PrivateRoute exact path="/cadastro-caso" component={CadastroCaso} />
		</Switch>
	</BrowserRouter>

	)


	export default Routes;