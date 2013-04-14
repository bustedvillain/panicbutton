/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    
    $("#btnAlerta").click(function(event){
        $("#activaAlarma").show("slow")
        navigator.notification.vibrate(1000);
        navigator.notification.beep(3);
        
        if(localStorage.getItem("base_iniciada")){
            alert("Config ok");
        }else{
            alert("Primero configura la app");
        }
    })
})


