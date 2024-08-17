import Background from "../../assets/background.png"
import { Header } from "../../components/Header";
import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
      <img src={Background} className="background" alt="Background app"/>
      <div className="info">
        <div>
          <input name="usuario" placeholder="@Username"/>
          <button>Buscar</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
