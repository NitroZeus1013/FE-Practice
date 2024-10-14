import "./App.css";
import Form from "./components/form/form";
import { FormProvider } from "./context/form_context";

function App() {
  return (
    <FormProvider>
      <div className="main-container">
        <Form />
      </div>
    </FormProvider>
  );
}

export default App;
