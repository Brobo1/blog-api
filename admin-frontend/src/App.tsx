import "./App.css";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { Content } from "./components/content/Content.tsx";

function App() {
  return (
    <>
      <AuthProvider>
        <Content />
      </AuthProvider>
    </>
  );
}

export default App;
