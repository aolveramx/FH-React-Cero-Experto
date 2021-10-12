import { useContext } from "react"

import { AuthContext } from "../../auth/AuthContext"
import { types } from "../../types/types"

const LoginScreen = ({ history}) => {

  const { dispatch } = useContext(AuthContext) // #1

  const handleLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'

    dispatch({ // #2
      type: types.login,
      payload: {
        name: 'Ari',
      }
    })
    history.replace(lastPath)
  }

  return (
    <div className="container .t-5">
      <h1>Login Screen</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}

export default LoginScreen
