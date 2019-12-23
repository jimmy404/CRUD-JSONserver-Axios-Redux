import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

import clienteAxios from '../config/axios';

// Crear un nuevo producto - Funcion principal
export function crearNuevoProductoAction(producto){
    return (dispatch) => {
        dispatch(nuevoProducto());

        //insertar en la API
        clienteAxios.post('/libros', producto)
            .then(respuesta=> {
                console.log(respuesta)
                //si se inserta correctamente
                dispatch(agregarProductoExito(producto));

            })
            .catch(error => {
                console.log(error)

                //si hay un error
                dispatch(agregarProductoError(error));
            })

    }
}

export const nuevoProducto = () => ({
    type: AGREGAR_PRODUCTO
});

export const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

export const agregarProductoError = error => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: error
});