import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from './assets/icons/rebels_icon.png';

const colores = {
    negro:      '#111111',
    grisOscuro: '#444444',
    grisMedio:  '#222222',
    blanco:     '#ffffff',
    cajaMorada: '#8989ef',
    badgeVerde: '#4ade80',
};

const s = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: colores.blanco,
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

                {/* Header: nombre del proyecto + logo */}
                <View style={s.header}>
                    <Text style={s.proyecto}>{proyecto}</Text>
                    <Image style={s.logo} src={logo} />
                </View>

                {/* Rover */}
                <Text style={s.rover}>{rover}</Text>

                {/* Ruta badge */}
                <View style={s.rutaRow}>
                    <Text style={s.rutaLabel}>Ruta</Text>
                    <View style={s.rutaBadge}>
                        <Text style={s.rutaBadgeText}>{ruta}</Text>
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

            </Page>
        </Document>
    );
}

export default PDFDoc;
