import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, Button, Image } from 'react-native'
import firebase from '../database/firebase'

function cerrarVenta(props) {

    const [venta, setVenta] = useState({
        name: props.route.params.name,
        pago: props.route.params.pago,
        cantidadProducto: props.route.params.cantidadVendida,
        imagen: props.route.params.imagen,
        id: props.route.params.productoId,
        valorUnitario: props.route.params.valorUnitario
    })

    const cerrarVenta = async ()=>{
        const totalPagar = totalApagar();
        const vueltosEntre = vueltos();
        await firebase.db.collection('venta').add({
            name: venta.name,
            cantidadProducto: venta.cantidadProducto,
            pago: venta.pago,
            totalApagar: totalPagar,
            vueltos: vueltosEntre,            
        })
        props.navigation.navigate('inventarioProducto')
    }

    const totalApagar = () => {
        const cantidadProducto = venta.cantidadProducto;
        const valorProductoUni = venta.valorUnitario;
        const resutl = cantidadProducto * valorProductoUni;
        return resutl;
    }
    const vueltos = () => {
        const totalPorPagar = totalApagar()
        const pagaron = venta.pago;
        const result = totalPorPagar - pagaron;
        return result
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: venta.imagen }} style={styles.image} />
            <View style={styles.imagen}>
                <Text>producto: {venta.name}</Text>
            </View>            
            <View style={styles.imagen}>
                <Text>precioUnidad: {venta.valorUnitario}</Text>
            </View>
            <View style={styles.imagen}>
                <Text>cantidadProducto: {venta.cantidadProducto}</Text>
            </View>          
            <View style={styles.imagen}>
                <Text>totalPorPagar: {totalApagar()}</Text>
            </View>
            <View style={styles.imagen}>
                <Text>pagaEfe: {venta.pago}</Text>
            </View>            
            <View style={styles.imagen}>
                <Text>vueltos: {vueltos()}</Text>
            </View>
            <View>
                <Button title='Cerrar Venta' onPress={() => cerrarVenta()} />
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    imagen: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1
    },
    image: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default cerrarVenta
