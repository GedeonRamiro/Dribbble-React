
import { useGlobalState } from "../../context/GlobalContext";
import { apiWithAuth } from "../../service/api";


const Home = () => {

  const { auth } = useGlobalState()

  apiWithAuth.get('/profile')  

  return (
    <div>
      <h1>Usuário: {auth?.user.name}</h1>
    </div>
  );
}

export default Home;
