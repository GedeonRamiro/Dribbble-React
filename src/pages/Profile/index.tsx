import { useLocation } from "react-router-dom"


interface Istate {
    userId: string;
 }


const Profile = () => {

    const { state } = useLocation<Istate>()
    const userId = state.userId
    console.log(userId)


    return (
        <h1>{userId}</h1>
    )
}

export default Profile