import GlobalStyles from "../global-style/Global";
import { FiMail, FiLock } from "react-icons/fi";
import Input from "../component/Input";
import Layout from "../layout";
import { SignButton } from "../component/Button";

export default function SignIn() {
  return (
    <Layout>
      <form>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            color="darkgray"
            icon={<FiMail size="24px" color="darkgray" strokeWidth={"2"} />}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            color="darkgray"
            icon={<FiLock size="24px" color="darkgray" strokeWidth={"2"} />}
          />
        </div>
        <div>
          <a href="#">Forgot Password</a>
        </div>
        <SignButton>Sign in</SignButton>
        <span>Didn't have any account?</span>
        <a href="#">Sign up here</a>
      </form>
      <GlobalStyles />
    </Layout>
  );
}
