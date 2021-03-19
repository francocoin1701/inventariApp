import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TextInput, Button, ScrollView} from 'react-native'
import firebase from '../database/firebase'
import {ListItem, Avatar} from 'react-native-elements'

function PaginaInicio(props) {

    const [product, setProduct] = useState([]);

    useEffect(()=>{
        firebase.db.collection('producto').onSnapshot(querySnapshot => {
            const articuloMuestra = [];
            querySnapshot.docs.forEach(doc=>{
                const {name,valorUnitario,imagen } = doc.data();
                articuloMuestra.push({
                    id: doc.id,
                    name,
                    valorUnitario,
                    imagen
                });
            });
            setProduct(articuloMuestra)
        });
    },[])

    const IrCrearProducto = ()=>{
        props.navigation.navigate('crearProducto')
    }
    return (
        <ScrollView>
            <Button title="ir create" onPress={()=> IrCrearProducto()}/>
            {
                product.map(producto =>{
                    return(
                        <ListItem key={producto.id} bottomDivider onPress={()=>{
                            props.navigation.navigate('detalleProducto',{
                                productoId: producto.id
                            })
                        }}>
                            <ListItem.Chevron/>
                            <Avatar source={{uri: producto.imagen}} size='50px'/>
                            <ListItem.Content>
                                <ListItem.Title>producto: {producto.name}</ListItem.Title>
                                <ListItem.Title>precio: {producto.valorUnitario}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }
        </ScrollView>  
      
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        textAlign: 'center',
        justifyContent: 'center',
        
    }
})

export default PaginaInicio
