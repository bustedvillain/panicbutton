/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 * 
 * Guardar datos:
 * localStorage.setItem('variable', variable);
 * 
 * Obtener Datos:
 * localStorage.getItem('variable);
 * 
 * Remover Datos:
 * localStorage.removeItem('variable');
 */

function checarStorage(){
    if (Modernizr.localstorage) {
        // window.localStorage is available!
        alert("Si hay Storage");
        if(localStorage.getItem("base_iniciada"))
            return true;
        else
            return false;
    } else {
        // no native support for HTML5 storage :(
        // maybe try dojox.storage or a third-party solution
        alert("No hay storage");
        return false;
    }   
}

function guardarPropietario(nombre, correo, pin, sexo, edad){
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("correo", pin);
    localStorage.setItem("sexo", sexo);
    localStorage.setItem("edad", edad);
}





