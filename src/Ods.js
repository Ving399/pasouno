


import './Ods.css';

function Ods({ value, onChange }) {
    return (
        <div className="ods-grupo">
                <label>Objetivos ODS</label>
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                >
                    <option value="">Selecciona un objetivo</option>
                    <option value="Fin de la pobreza">Fin de la pobreza</option>
                    <option value="Hambre cero">Hambre cero</option>
                    <option value="Salud y bienestar">Salud y bienestar</option>
                    <option value="Educación de calidad">Educación de calidad</option>
                    <option value="Igualdad de género">Igualdad de género</option>
                    <option value="Agua limpia y saneamiento">Agua limpia y saneamiento</option>
                    <option value="Energía asequible y no contaminante">Energía asequible y no contaminante</option>
                    <option value="Trabajo decente y crecimiento económico">Trabajo decente y crecimiento económico</option>
                    <option value="Industria, innovación e infraestructura">Industria, innovación e infraestructura</option>
                    <option value="Reducción de las desigualdades">Reducción de las desigualdades</option>
                    <option value="Ciudades y comunidades sostenibles">Ciudades y comunidades sostenibles</option>
                    <option value="Producción y consumo responsables">Producción y consumo responsables</option>
                    <option value="Acción por el clima">Acción por el clima</option>
                    <option value="Vida submarina">Vida submarina</option>
                    <option value="Vida de ecosistemas terrestres">Vida de ecosistemas terrestres</option>
                    <option value="Paz, justicia e instituciones sólidas">Paz, justicia e instituciones sólidas</option>
                    <option value="Alianzas para lograr los objetivos">Alianzas para lograr los objetivos</option>
                </select>
        </div>
    );
}

export default Ods;