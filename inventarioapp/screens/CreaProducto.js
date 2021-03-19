import React, {useState} from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet,Image } from 'react-native'
import firebase from '../database/firebase'

function CreaProducto(props) {

    const [producto, setProducto] = useState({
        name: '',
        imagen: '',
        valorUnitario: '',
        cantidadProducto: '',
        valorCompraProducto: ''
    });

    const manejadorDeCambioTexto = (inputPlaceholder, valor )=>{
        setProducto({...producto, [inputPlaceholder]: valor})
    };

    const guardarProducto = async ()=>{
        if(producto.name == ''){
            alert('porfavor escriba el nombre del producto')
        }if(producto.valorUnitario == ''){
            alert('porfavor escriba el valor producto')
        }if(producto.imagen == '' ){
            alert('porfavor proporcione la direccion de la imagen')
        }if(producto.cantidadProducto == ''){
            alert('porfavor escriba cantidad de producto inventario')
        }if(producto.valorCompraProducto == ''){
            alert('porfavor escriva el valor de compra del producto')
        }else{
           await firebase.db.collection('producto').add({
                name: producto.name,
                imagen: producto.imagen,
                valorUnitario: producto.valorUnitario,
                cantidad: producto.cantidadProducto,
                valorTotalProductoInventario: producto.valorCompraProducto
            })
            props.navigation.navigate('pantallaInicio')

        }
    }

 
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imagen}>
                <TextInput 
                    placeholder='nombreProducto' 
                    onChangeText={(valor)=>manejadorDeCambioTexto( 'name', valor)}
                />
            </View>
            <View style={styles.imagen}>
                <TextInput 
                    placeholder='urlImage'
                    onChangeText={(valor)=>manejadorDeCambioTexto('imagen', valor)}
                />
            </View>
            <View style={styles.imagen}>
                <TextInput 
                    placeholder='valorUnitario'
                    onChangeText={(valor)=>manejadorDeCambioTexto('valorUnitario', valor)}
                />
            </View>
            <View style={styles.imagen}>
                <TextInput 
                    placeholder='cantidadProducto'
                    onChangeText={(valor)=>manejadorDeCambioTexto('cantidadProducto', valor)}
                />
            </View>
            <View style={styles.imagen}>
                <TextInput 
                    placeholder='valorCompraProducto'
                    onChangeText={(valor)=>manejadorDeCambioTexto('valorCompraProducto', valor)}
                />
            </View>
            <View>
                <Button title='creaProducto' onPress={()=> guardarProducto()} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    imagen:{
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1
    },
})

export default CreaProducto
