import React from 'react';
import useResources from './useResources';
import '../css/hookApp.css'


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
      <div className="Row">

          <li key={resource.id}><strong>{resource.title}</strong></li>
          <p>
          {resource.body}
          </p>

      </div>
      ))}
    </ul>
  )
}
export default ResourceList;
