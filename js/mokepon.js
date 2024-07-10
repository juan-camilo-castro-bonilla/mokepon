

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego(){
    let sectionSeleccionarAtaque=document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display="none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
        botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
        botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra =document.getElementById("boton-tierra")
        botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar =document.getElementById("boton-reiniciar")
        botonReiniciar.addEventListener("click", reiniciarJuego)

 }

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota=document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display="none"
    let sectionSeleccionarAtaque=document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display="flex"

 

    let inputHipodogue = document.getElementById("hipodogue")
    let inputCapipepo = document.getElementById("capipepo")  
    let inputRatigueya = document.getElementById("ratigueya")
    let inputLangostelvis = document.getElementById("langostelvis")
    let inputTucapalma = document.getElementById("tucapalma")
    let inputPydos = document.getElementById("pydos")
    let spanMascotaJugador = document.getElementById("mascota-jugador")
   
        
        if(inputHipodogue.checked){
            spanMascotaJugador.innerHTML = "Hipodogue"
        }else if(inputCapipepo.checked){
            spanMascotaJugador.innerHTML = "Capipepo"
        }else if(inputRatigueya.checked){
            spanMascotaJugador.innerHTML = "Ratigueya"
        }else if(inputLangostelvis.checked){
            spanMascotaJugador.innerHTML = "Langostelvis"
        }else if(inputTucapalma.checked){
            spanMascotaJugador.innerHTML = "Tucapalma"
        }else if(inputPydos.checked){
            spanMascotaJugador.innerHTML = "Pydos"
        }else {
            
             reiniciarJuego(alert("Aun no has elegido, selecciona por favor. "))
        }
        
        
        seleccionarMascotaEnemigo()

    }

    
  
     
    function seleccionarMascotaEnemigo() {
            let mascotaAleatoria = aleatorio(1,6)
            let spanMascotaEnemigo = document.getElementById("mascota-enemigo")  

            if (mascotaAleatoria == 1){
                spanMascotaEnemigo.innerHTML = "Hipodogue"
            }else if (mascotaAleatoria ==2){
                spanMascotaEnemigo.innerHTML = "Capipepo"
            }else if (mascotaAleatoria ==3){
                spanMascotaEnemigo.innerHTML = "Ratigueya"
            }else if (mascotaAleatoria ==4){
                spanMascotaEnemigo.innerHTML = "Langostelvis"
            }else if(mascotaAleatoria ==5){
                spanMascotaEnemigo.innerHTML = "Tucapalma"
            }else {
                spanMascotaEnemigo.innerHTML = "Pydos"
            }
        }

            function ataqueFuego(){
                ataqueJugador = "FUEGO"
                ataqueAleatorioEnemigo()
            }
            function ataqueAgua(){
                ataqueJugador = "AGUA" 
                ataqueAleatorioEnemigo()
            }
            function ataqueTierra(){
                ataqueJugador = "TIERRA"
                ataqueAleatorioEnemigo() 
            }

        
        function ataqueAleatorioEnemigo(){
            let ataqueAleatorio = aleatorio(1,3)   
           if (ataqueAleatorio ==1){
            ataqueEnemigo = "FUEGO"
           }else if (ataqueAleatorio ==2){
            ataqueEnemigo ="AGUA"
           }else if (ataqueAleatorio ==3){
            ataqueEnemigo ="TIERRA"
           }
            
           combate()

        }

        function combate() {
                let spanVidasJugador = document.getElementById("vidas-jugador")
                let spanVidasEnemigo = document.getElementById("vidas-enemigo")

            if (ataqueEnemigo == ataqueJugador ){
                crearMensaje("empate ")
            } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA" ){
                crearMensaje("ganaste ")
                vidasEnemigo--
                spanVidasEnemigo.innerHTML=vidasEnemigo
            } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO" ){
                crearMensaje("ganaste")
                vidasEnemigo--
                spanVidasEnemigo.innerHTML=vidasEnemigo
                
            }  else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA" ){
                crearMensaje("ganaste")
                vidasEnemigo--
                spanVidasEnemigo.innerHTML=vidasEnemigo
                
            }
            else {
                crearMensaje("perdiste")
                vidasJugador--
                spanVidasJugador.innerHTML= vidasJugador
            }

            revisarVidas()

        }

        function revisarVidas(){
            if(vidasEnemigo==0){
                crearMensajeFinal("FELICITACIONES CAMPEONES LO LOGRARON 🎉😊")
            }else if (vidasJugador == 0){
                crearMensajeFinal("PERDISTE PERO PUEDES MEJORAR INTENTALO LUEGO 🙍‍♂️🥹")
            } 

        }

        function crearMensaje(resultado){
            let sectionMensajes = document.getElementById("resultado")
            let ataquesDelJugador = document.getElementById("ataques-del-jugador")
            let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")


            
            let nuevoAtaqueDelJugador = document.createElement("p")
            let nuevoAtaqueDelEnemigo = document.createElement("p")

            sectionMensajes.innerHTML = resultado
            nuevoAtaqueDelJugador.innerHTML = ataqueJugador
            nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

            
            ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
            ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
        }    

        function crearMensajeFinal (resultadoFinal){

            

            let sectionMensajes = document.getElementById("resultado")

            
            sectionMensajes.innerHTML = resultadoFinal
            

            let botonFuego = document.getElementById("boton-fuego")
                botonFuego.disabled=true
            let botonAgua = document.getElementById("boton-agua")
                botonAgua.disabled=true
            let botonTierra =document.getElementById("boton-tierra")
                botonTierra.disabled=true

                let sectionReiniciar = document.getElementById("reiniciar")
                sectionReiniciar.style.display = "block"

        }    


        function reiniciarJuego(){
            location.reload()
        }

        function aleatorio(min, max){
            return  Math.floor( Math.random() * (max - min + 1) + min)
          }




window.addEventListener("load", iniciarJuego)
