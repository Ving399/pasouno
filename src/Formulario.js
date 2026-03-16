import Particulars from './Particulars';
import  Ods from './Ods';
import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Pdfdoc from './Pdfdoc';
import './Formulario.css';
import imgMaya from './assets/icons/maya.png';
import imgOtomi from './assets/icons/otomi.png';
import imgWixarica from './assets/icons/wixarica.png';
import imgKikapu from './assets/icons/kikapu.png';
import imgDownload from './assets/icons/download.png';


function Formulario() {
    const [rover, setRover] = useState(""); // 1. estado inicial vacío
    const [proyecto, setProyecto] = useState(""); // 1. estado inicial vacío
    const [objetivoGeneral, setObjetivoGeneral] = useState(""); // 1. estado inicial vacío
    const [ruta, setRuta] = useState(""); // 1. estado inicial vacío
    const [ods1, setOds1] = useState("");
    const [ods2, setOds2] = useState("");
    const [ods3, setOds3] = useState("");
    const [objetivos, setObjetivos] = useState([""]);


    return (
        <div>
            <form
            action=""
            onSubmit={(e) => {e.preventDefault(); console.log(rover, proyecto, objetivoGeneral, ruta, ods1, ods2, ods3, objetivos);}}>
            <div className="form-card">
            <ul>
                <li className="form-grupo">
                    <label htmlFor="rover">Mi nombre es:</label>
                    <input  //input DEL ROVER
                    id="rover"
                    type="text"
                    name="rover"
                    value={rover}
                    onChange={(e) => setRover(e.target.value)}
                    />
                </li>
                <li className="form-grupo">
                    <label htmlFor="proyecto">Mi proyecto es:</label>
                    <input  //input DEL PROYECTO
                    id="proyecto"
                    type="text"
                    name="proyecto"
                    value={proyecto}
                    onChange={(e) => setProyecto(e.target.value)}
                    />
                </li>
                <li className="form-grupo">
                    <label htmlFor="general">El objetivo general es:</label>
                    <input  //input DEL OBJETIVO GENERAL
                    id="general"
                    type="text"
                    name="general"
                    value={objetivoGeneral}
                    onChange={(e) => setObjetivoGeneral(e.target.value)}
                    />
                </li>
                <li className="form-grupo">
                    <p className="rutas-titulo">Elige una ruta rover:</p>
                    <div className="rutas-grid">
                        <div className={`ruta-opcion ${ruta === "maya" ? "seleccionada" : ""}`} onClick={() => setRuta("maya")}>
                            <img src={imgMaya} alt="Ruta Maya" />
                            <span>Medio ambiente y sostenibilidad</span>
                        </div>
                        <div className={`ruta-opcion ${ruta === "otomi" ? "seleccionada" : ""}`} onClick={() => setRuta("otomi")}>
                            <img src={imgOtomi} alt="Ruta Otomi" />
                            <span>Habilidades para la vida</span>
                        </div>
                        <div className={`ruta-opcion ${ruta === "wixarica" ? "seleccionada" : ""}`} onClick={() => setRuta("wixarica")}>
                            <img src={imgWixarica} alt="Ruta Wixárica" />
                            <span>Paz y participación comunitaria</span>
                        </div>
                        <div className={`ruta-opcion ${ruta === "kikapu" ? "seleccionada" : ""}`} onClick={() => setRuta("kikapu")}>
                            <img src={imgKikapu} alt="Ruta Kikapú" />
                            <span>Salud y bienestar</span>
                        </div>
                    </div>
                </li>
                <li>
                    <Particulars objetivos={objetivos} onChange={setObjetivos} />
                </li>
                <li>
                    <Ods value={ods1} onChange={setOds1} />
                    <Ods value={ods2} onChange={setOds2} />
                    <Ods value={ods3} onChange={setOds3} />
                </li>
                {/* <li>
                    <input type="submit" value="Save" />
                </li> */}
            </ul>
            </div>
            </form>

            <PDFDownloadLink
                className="btn-descargar"
                document={<Pdfdoc
                proyecto={proyecto}
                rover={rover}
                ruta={ruta}
                objetivoGeneral={objetivoGeneral}
                objetivos={objetivos}
                ods1={ods1}
                ods2={ods2}
                ods3={ods3}
            />}>
                DESCARGAR <img src={imgDownload} alt="descargar" />
            </PDFDownloadLink>
        </div>
    );
}

export default Formulario;