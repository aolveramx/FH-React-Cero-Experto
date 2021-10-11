const LoginScreen = ({ history}) => {

  const handleLogin = () => {
    //history.push('/') // saves history
    history.replace('/')
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
