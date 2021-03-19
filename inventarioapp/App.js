import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import CreaProducto from './screens/CreaProducto'
import InventarioProducto from './screens/inventario'
import PaginaInicio from './screens/PaginaInicio'
import DetalleProducto from './screens/ventaProducto'
import CerrarVenta from './screens/cerrarVenta'

const Stack = createStackNavigator()


const MyStack = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name= 'pantallaInicio' component={PaginaInicio} options={{title: 'Inventario de Inicio'}}/>
      <Stack.Screen name= 'detalleProducto' component={DetalleProducto} options={{title: 'Venta de Producto'}}/>
      <Stack.Screen name= 'cerrarVenta' component={CerrarVenta} options={{title: 'Cerrar la Venta'}}/>
      <Stack.Screen name= 'inventarioProducto' component={InventarioProducto} options={{title: 'Inventario General'}}/>
      <Stack.Screen name= 'crearProducto' component={CreaProducto} options={{title: 'Crear un Producto'}}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
