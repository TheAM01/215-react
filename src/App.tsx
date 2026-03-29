import { useEffect, useState } from 'react';
import Navigation from './components/layout/Navigation';
import type { APIUser, LoggedInUser } from './types/user';
import UserCard from './components/ui/UserCard';
import Greeting from './components/ui/Greeting';

function App() {

	const user: LoggedInUser = {
		age: 21,
		name: "John Doe",
		isLoggedIn: true,
		username: "jonathandoe01"
	}

	const [users, setUsers] = useState<APIUser[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function loadUsers() {
			try {
				const usersData = await fetchUsers();
				setUsers(usersData);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : 'Unknown error'
				);
			} finally {
				setLoading(false);
			}
		}
		loadUsers();
	}, []);

	return (
		<div className='bg-black text-white'>
			<Navigation />

			<Greeting
				user={user}
				videosType='saved'
			/>


			<section className='flex w-max mx-auto gap-6 flex-col'>
				{loading
					? <p>Loading users...</p>
					: users.map((u) => (
						<UserCard key={u.id} user={u} />
					))
				}
				{error && <p className='text-red-500'>{error}</p>}
			</section>
		</div>
	);
}

async function fetchUsers(): Promise<APIUser[]> {
	await wait(5000);
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	return data as APIUser[];
}

function wait(time: number) {
	return new Promise(resolve => setTimeout(resolve, time));
}

export default App;