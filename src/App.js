import './App.css';
import axios, { Axios } from 'axios'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login'
function App() {
  const responseGoogle = (data) => {
    console.log(data);
    axios.post('http://13.213.74.100:8080/api/auth/login-google', {
      token: data.tokenId
    }).then(res => console.log(res)).catch(err => console.log(err))
  }
  const failGoogle = (data) => {
    console.log(data);
  }
  const responseFacebook = (data) => {
    console.log(data);
    axios.post('http://13.213.74.100:8080/api/auth/login-facebook', {
      token: data.accessToken
    }).then(res => console.log(res)).catch(err => console.log(err))
  }
  const componentClicked = () => {
    console.log('ddd');
  }
  return (
    <>
      <GoogleLogin
        clientId="502517293767-5r4ut28qecrla1h94mfhdb2t8p3qim0h.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={failGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <FacebookLogin
        appId="336284341932251"
        autoLoad={true}
        fields="email"
        onClick={componentClicked}
        onFailure={failGoogle}
        callback={responseFacebook} />
    </>
  );
}

export default App;
