import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from './assets/icons/rebels_icon.png';
import logoPasouno from './assets/icons/pasounof.png';
import imgMaya from './assets/icons/maya.png';
import imgOtomi from './assets/icons/otomi.png';
import imgWixarica from './assets/icons/wixarica.png';
import imgKikapu from './assets/icons/kikapu.png';

const iconosRuta = {
    maya:     imgMaya,
    otomi:    imgOtomi,
    wixarica: imgWixarica,
    kikapu:   imgKikapu,
};

const descripcionesRuta = {
    maya:     'Medio ambiente y sostenibilidad',
    otomi:    'Habilidades para la vida',
    wixarica: 'Paz y participación comunitaria',
    kikapu:   'Salud y bienestar',
};

const colores = {
    negro:      '#111111',
    grisOscuro: '#444444',
    grisMedio:  '#222222',
    blanco:     '#ffffff',
    cajaMorada: '#e0e0ff',
    badgeVerde: '#4ade80',
};

const s = StyleSheet.create({
    page: {
        backgroundColor: colores.blanco,
    },
    contenido: {
        padding: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 6,
    },
    proyecto: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colores.negro,
    },
    logo: {
        width: 50,
        height: 50,
    },
    navbar: {
        backgroundColor: '#7f60ed',
        padding: 12,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    navbarLogo: {
        width: 60,
        height: 24,
    },
    rover: {
        fontSize: 12,
        color: colores.grisOscuro,
        marginBottom: 10,
    },
    rutaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        gap: 8,
    },
    rutaLabel: {
        fontSize: 13,
        fontWeight: 'bold',
        color: colores.negro,
        marginRight: 8,
    },
    rutaBadge: {
        backgroundColor: colores.badgeVerde,
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    rutaBadgeText: {
        fontSize: 11,
        fontWeight: 'bold',
        color: colores.negro,
        textTransform: 'uppercase',
    },
    seccionTitulo: {
        fontSize: 13,
        fontWeight: 'bold',
        color: colores.negro,
        marginBottom: 6,
        marginTop: 10,
    },
    caja: {
        backgroundColor: colores.cajaMorada,
        borderRadius: 6,
        padding: 10,
        marginBottom: 6,
    },
    cajaTexto: {
        fontSize: 11,
        color: colores.grisMedio,
    },
});

function PDFDoc({ proyecto, rover, ruta, objetivoGeneral, objetivos, ods1, ods2, ods3 }) {
    return (
        <Document>
            <Page style={s.page}>

                {/* Navbar */}
                <View style={s.navbar}>
                    <Image style={s.navbarLogo} src={logoPasouno} />
                </View>

                <View style={s.contenido}>
                {/* Header: nombre del proyecto + logo */}
                <View style={s.header}>
                    <Text style={s.proyecto}>{proyecto}</Text>
                    
                </View>

                {/* Rover */}
                <Text style={s.rover}>{rover}</Text>

                {/* Ruta badge */}
                <View style={s.rutaRow}>
                    <Text style={s.rutaLabel}>Ruta</Text>
                    {iconosRuta[ruta] && (
                        <Image style={{ width: 40, height: 40 }} src={iconosRuta[ruta]} />
                    )}
                    <View style={s.rutaBadge}>
                        <Text style={s.rutaBadgeText}>{descripcionesRuta[ruta]}</Text>
                    </View>
                </View>

                {/* Objetivo general */}
                <Text style={s.seccionTitulo}>Este proyecto pretende</Text>
                <View style={s.caja}>
                    <Text style={s.cajaTexto}>{objetivoGeneral}</Text>
                </View>

                {/* Objetivos particulares */}
                <Text style={s.seccionTitulo}>Los objetivos específicos de este proyecto son:</Text>
                {objetivos.map((objetivo, index) => (
                    <View key={index} style={s.caja}>
                        <Text style={s.cajaTexto}>{objetivo}</Text>
                    </View>
                ))}

                {/* ODS */}
                <Text style={s.seccionTitulo}>Los ODS relacionados con este proyecto son:</Text>
                {[ods1, ods2, ods3].filter(o => o !== "").map((ods, index) => (
                    <View key={index} style={s.caja}>
                        <Text style={s.cajaTexto}>{ods}</Text>
                    </View>
                ))}
                </View>

            </Page>
        </Document>
    );
}

export default PDFDoc;
