import { MessageToggler } from "./1_use/MessageToggler";
import { ThemeExample } from "./1_use/Theme";
import { UserInfo } from "./1_use/Users";
import { Form } from "./2_forms/Form";
import { FormStatus } from "./2_forms/FormStatus";
import { FormQuiz } from "./2_forms/FormState";
import { Optimistic } from "./3_optimistic/Optimistic";
import "./App.css";

function App() {
  return (
    <div>
      <title>React 19 Testing</title>
      <h2>Theme Toggler</h2>
      <ThemeExample></ThemeExample>
      <h2>Message Toggler</h2>
      <MessageToggler />
      <h2>User Information</h2>
      <UserInfo />
      <h2>Form</h2>
      <Form />
      <h2>Form Status</h2>
      <FormStatus />
      <h2>QUIZ</h2>
      <FormQuiz />
      <h2>GET / POST Users</h2>
      <Optimistic />
    </div>
  );
}

export default App;
