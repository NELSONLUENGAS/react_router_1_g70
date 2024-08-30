import React from 'react';
import AdminHeader from '../components/AdminHeader';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';

const AdminLayout = () => {
	return (
		<>
			<AdminHeader />
			<main>
				<Outlet />
			</main>
			<AdminSidebar />
		</>
	);
};

export default AdminLayout;
