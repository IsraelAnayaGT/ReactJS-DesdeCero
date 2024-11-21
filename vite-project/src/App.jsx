import { useState } from "react";
import "./App.css";
import imgRickMorty from "./img/rick-morty.png";
import Characters from "./components/Characters";

function App() {
  const [characters, setCaracters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCaracters(characterApi.results);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="title">Rick & Morty</h1>
          {characters ? (
            <Characters characters={characters} setCaracters={setCaracters}/>
          ) : (
            <>
              <img src={imgRickMorty} alt="Rick & Morty" className="img-home" />
              <div className="btn-aling">
                <button onClick={reqApi} className="btn-search">
                  Buscar Personajes
                </button>
              </div>
            </>
          )}
        </header>
      </div>
    </>
  );
}

export default App;
