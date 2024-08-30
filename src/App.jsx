import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import AdminLayout from './layouts/AdminLayout';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Login from './pages/Login';

function App() {
	return (
		<Router>
			<Routes>
				{/* Rutas para usuarios */}
				<Route
					path="/"
					element={<Layout />}
				>
					<Route
						index
						element={<Home />}
					/>

					<Route
						path="/profile"
						element={<Profile />}
					/>

					<Route
						path="/register"
						element={<Register />}
					/>

					<Route
						path="/login"
						element={<Login />}
					/>

					<Route
						path="/cart"
						element={<Cart />}
					/>
				</Route>

				{/* Rutas para Admin */}
				<Route
					path="/admin"
					element={<AdminLayout />}
				>
					<Route
						index
						element={<Home />}
					/>
				</Route>

				{/* NoT FOUND */}
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
