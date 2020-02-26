// Imports: Dependencies
import React from 'react';
import { showMessage } from "react-native-flash-message";
import * as colores from './Const'

export function funMessage(message, description){
 return showMessage({
    message: message,
    description: description,
    type: "success",
    backgroundColor: colores.COLOR_PRIMARIO_CLARO, // background color
    color:  colores.COLOR_BLANCO, // text color
  })
  

}




