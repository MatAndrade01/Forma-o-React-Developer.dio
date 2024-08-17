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
        <div className="perfil">
          <img
           src="https://avatars.githubusercontent.com/u/125470760?v=4"
           className="profile"
           alt="imagem de perfil"
           />
          <div>
            <h3>Matheus Andrade</h3>
            <span>@MatheusAndrade01</span>
            <p>Descrição</p>
          </div>
        </div>
        <hr />
      </div>
      </div>
    </div>
  );
}

export default App;
