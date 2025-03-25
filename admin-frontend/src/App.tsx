import "./App.css";
import { Login } from "./components/login/Login.tsx";
import { Register } from "./components/register/Register.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";

function App() {
  return (
    <>
      <AuthProvider>
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
      </AuthProvider>
    </>
  );
}

export default App;
