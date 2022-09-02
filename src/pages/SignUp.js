import Layout from "./layout";
import Input from "./component/Input";
import Icon from "./component/Icon";
import Footer from "./component/Footer";
import { ButtonContainer, LoginButton, SignButton } from "./component/Button";
import GlobalStyles from "../global-style/Global";

function SignUp() {
  return (
    <Layout>
      <form>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            color="darkgray"
            icon={
              <Icon.FiMail size="24px" color="darkgray" strokeWidth={"2"} />
            }
            margin="20"
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            color="darkgray"
            icon={
              <Icon.FiLock size="24px" color="darkgray" strokeWidth={"2"} />
            }
            margin="20"
          />
        </div>
        <SignButton>Sign up</SignButton>
        <ButtonContainer>
          <LoginButton icon={<Icon.Apple />} />
          <LoginButton icon={<Icon.Facebook />} />
          <LoginButton icon={<Icon.Google />} />
        </ButtonContainer>
        <Footer>
          <span>If you have an account</span>
          <a href="#">Sign In here</a>
        </Footer>
      </form>
      <GlobalStyles />
    </Layout>
  );
}

export default SignUp;
