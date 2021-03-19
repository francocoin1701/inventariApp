import React, { useEffect, useState } from 'react'
import { View, TextInput, ScrollView, Button, StyleSheet } from 'react-native'
import firebase from '../database/firebase'

function detalleProducto(props) {

    const [producto, setProducto] = useState({
        id: '',
        name: '',
        imagen: '',
        valorUnitario: '',
        cantidadProductoVenta: '',
        pagoEfectivo: ''
    })

    const obtenerProductoPorId = async (id) => {
        const refdb = firebase.db.collection('producto').doc(id);
        const produc = await refdb.get();
        const articulo = produc.data()
        setProducto({
            ...articulo,
            id: produc.id

        })


    };

    useEffect(() => {
        obtenerProductoPorId(props.route.params.productoId)
    }, [])

    const manejadorDeCambioTexto = (inputPlaceholder, valor) => {
        setProducto({ ...producto, [inputPlaceholder]: valor })
    };

    const cerrarVenta = async()=>{
        if(producto.cantidadProductoVenta == ''){
            alert('cuanta cantidad de producto compro')
        }if(producto.pagoEfectivo == '' ){
            alert('cuanto dinero pago el cliente')
        }else{
            props.navigation.navigate('cerrarVenta',{
                productoId: producto.id,
                cantidadVendida: producto.cantidadProductoVenta,
                pago: producto.pagoEfectivo,
                imagen: producto.imagen,
                name: producto.name,
                valorUnitario: producto.valorUnitario
            })
        }
        
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imagen}>
                <TextInput
                    value={producto.name}
                    placeholder='nombreProducto'
                />
            </View>
            <View style={styles.imagen}>
                <TextInput
                    value={producto.valorUnitario}
                    placeholder='valorUnitario'
                />
            </View>
            <View style={styles.imagen}>
                <TextInput
                    onChangeText={(valor) => manejadorDeCambioTexto('cantidadProductoVenta', valor)}
                    placeholder='cantidadProductoVenta'
                />
            </View>           
            <View style={styles.imagen}>
                <TextInput
                    onChangeText={(valor) => manejadorDeCambioTexto('pagoEfectivo', valor)}
                    placeholder='pago Efectivo'
                />
            </View>
            
            <View>
                <Button title='creaProducto' onPress={() => cerrarVenta()} />
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
})


export default detalleProducto
