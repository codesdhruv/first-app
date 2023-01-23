import { A } from "./component/A";
import { Z, X } from "./component/A";
import Signup from "./component/B";
import { Login } from "./component/B";

const App = () => {
  return (
    <div>
      <A></A>
      <Z></Z>
      <X></X>
      <Signup></Signup>
      <Login>{"here"} </Login>
    </div>
  );
};

export default App;
