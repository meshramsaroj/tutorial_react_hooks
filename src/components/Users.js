import React ,{ useState,useEffect}from 'react'
import axios from 'axios';

import useResources from './useResources'

// const useResources = ({ userName}) => {

// 	const [resources, setResources] = useState([]);

// 			const fetchResources = async (userName) => {
// 					const response = await axios.get(`https://jsonplaceholder.typicode.com/${userName}`);
// 					setResources(response.data);
// 					console.log(response.data)
// 			}


// 	useEffect(() => {
// 			fetchResources(userName);
// 	}, [userName]
// 	)
// 	return resources;
// }
const Users = ({ userName }) => {
	const users = useResources(userName);
	console.log(users)
	return (
		<ul>
			{users.map(user => (
				<div className="Row">

					<li key={user.id}><strong>{user.name}</strong></li>
					<p>
						{user.email}
					</p>

				</div>
			))}
		</ul>
	)
}

export default Users;
