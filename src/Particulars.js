
import './Particulars.css';
import deleteIcon from './assets/icons/delete.svg';

function Particulars( {objetivos, onChange} ) {

        const agregar = () => {
        onChange([...objetivos, ""]);
    };

    const actualizar = (index, valor) => {
        const nuevo = [...objetivos];
        nuevo[index] = valor;
        onChange(nuevo);
    };

    const eliminar = (index) => {
        onChange(objetivos.filter((_, i) => i !== index));
    };

    return (
        <div>
            <ul className="particulars-lista">
                {objetivos.map((objetivo, index) => (
                <li key={index} className="particulars-fila">
                    <label>Objetivos especificos</label>
                    <input
                        type="text"
                        value={objetivo}
                        onChange={(e) => actualizar(index, e.target.value)}
                    />
                    <button type="button" className="btn-eliminar" onClick={() => eliminar(index)}>
                        <img src={deleteIcon} alt="eliminar" />
                    </button>
                </li>
                ))}
            </ul>
            <button type="button" className="btn-agregar" onClick={agregar}>+</button>
        </div>
    );
}

export default Particulars;