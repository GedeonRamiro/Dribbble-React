
import { useGlobalState } from "../../context/GlobalContext";
import { apiWithAuth } from "../../service/api";
import NavBar from '../../components/NavBar'


const Home = () => {

  const { auth } = useGlobalState()
  console.log(auth)

  apiWithAuth.get('/profile')  

  return (
    <div>
      <NavBar></NavBar>
      {/* <h1>Usuário: {auth?.user.name}</h1> */}
    </div>
  );
}

export default Home;
