
import {
  useQuery,
  gql,
} from "@apollo/client";
import NavBar from "./components/NavBar";
import RocketsPage from './pages/RocketsPage'

function App() {

  const {  data } = useQuery(Rockets);


  return (
    <div>
      <NavBar />
      <RocketsPage/>
      {console.log(data)}
    </div>
  );
}

const Rockets = gql`query GetRockets {
  rockets {
    name
  }
}`

export default App;