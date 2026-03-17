import './App.css';
import Formulario from './Formulario';
import logoPasouno from './assets/icons/pasounof.png';

function App() {
  return (
    <div>
      <header className="app-navbar">
        <img src={logoPasouno} alt="Paso Uno" className="app-logo" />
      </header>
      <div className="app-header">
      <h1 className="app-titulo">Guía para Anteproyectos SCOUT</h1>
      <p className="app-subtitulo">¿Estás lista/listo para compartir tus talentos?</p>
      <p className="app-lema">Es tu momento para vivir nuestro lema: <span className="app-lema-acento">¡SERVIR!</span></p>
      <p className="app-lema-sub">Es tiempo de crear tu propio camino Rover</p>

      <Formulario/>

      </div>
    </div>
  );
}

export default App;
