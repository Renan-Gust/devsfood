import { useAuth } from "../../contexts/AuthContext"

export function Orders(){
    const { user, setUser, setTest } = useAuth()

    console.log(user)

    return(
        <h1>{user?.name}</h1>
    )
}