import React from 'react';
import useResources from './useResources';

// const useResources = (resourceName)=>{
//   const [resources, setResources] = useState([]);

//   const fetchResources = async (resourceName) => {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);
//     setResources(response.data);
//   }

//   useEffect(() => {
//       fetchResources(resourceName);
//     }, [resourceName]
//     )
//     return resources;
// }


const ResourceList = ({ resourceName }) => {
  const resources= useResources(resourceName);

    return (
    <ul>
      {resources.map(resource => (
        <li key={resource.id}>{resource.title}</li>
      ))}
    </ul>
  )
}
export default ResourceList;
