import "./App.css";
import { Login } from "./components/login/Login.tsx";
import { Register } from "./components/register/Register.tsx";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Login />
        <Register />
      </div>
    </>
  );
}

export default App;
