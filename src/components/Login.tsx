import Button from './UI/Button'

interface Login {
  mode?: string
}


const Login = (props: Login) => {

  const loginButtonHandler = () => {
    // window.location.href = "http://localhost:8080/login";
    window.location.href = "https://myspoti-backend.netlify.app/api/login";
  };


  return (
    <Button onClick={loginButtonHandler} mode={props.mode}>Login with Spotify</Button>
  )
}

export default Login