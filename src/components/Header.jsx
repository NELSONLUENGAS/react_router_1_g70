import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreProvider';

const Header = () => {
	const { count } = useContext(StoreContext);
	return (
		<header className="p-3 bg-dark text-white">
			<div className="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
					<Link
						to="/"
						className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
					>
						👩‍🚀
					</Link>

					<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
						{/* <li>
							<Link
								to="/register"
								className="nav-link px-2 text-secondary"
							>
								Register
							</Link>
						</li>
						<li>
							<Link
								to="/login"
								className="nav-link px-2 text-white"
							>
								Login
							</Link>
						</li> */}
						<li>
							<Link
								to="/profile"
								className="nav-link px-2 text-white"
							>
								Profile 🧙‍♂️
							</Link>
						</li>
						<li>
							<Link
								to="/cart"
								className="nav-link px-2 text-white"
							>
								<button
									type="button"
									className="btn "
								>
									Cart 🛒 <span class="badge text-bg-secondary">{count}</span>
								</button>
							</Link>
						</li>
						<li>
							<a
								href="/notfound"
								className="nav-link px-2 text-white"
							>
								Not Found 😥
							</a>
						</li>
					</ul>

					<form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
						<input
							type="search"
							className="form-control form-control-dark"
							placeholder="Search..."
							aria-label="Search"
						/>
					</form>

					<div className="text-end">
						<Link to="/login">
							<button
								type="button"
								className="btn btn-outline-light me-2"
							>
								Login
							</button>
						</Link>
						<Link to="/register">
							<button
								type="button"
								className="btn btn-warning"
							>
								Sign-up
							</button>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
