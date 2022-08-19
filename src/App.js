import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
      <header className="navbar">Navbar</header>
      <div className="body">
        <Card>
          <Form></Form>
        </Card>
      </div>
    </div>
  );
}

export default App;
