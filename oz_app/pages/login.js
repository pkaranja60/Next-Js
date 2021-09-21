import { auth, provider } from '../firebase'
import styled from "styled-components";
import { Button } from '@material-ui/core'
import Head from "next/head";

function Login() {

    const signIn = () => {
        firebase.auth().signInWithPopup(auth,provider).catch(alert);
    }

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://images-platform.99static.com/FbbF1colDxG3gGrtyN0-bjZ2Y-o=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/91/91331/attachment_91331353" />
        <LoginButton onClick={signIn} variant='outlined'>Google Sign In</LoginButton> 
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
display: grid;
place-items: center;
height: 100vh;
`;
const LoginContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;
const Logo = styled.img`
height: 500px;
width: 500px;
margin-bottom: 30px;
`;
const LoginButton =styled(Button)`
width: 200px;
background-color: lightBlue;
`;