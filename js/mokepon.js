const sectionSeleccionarAtaque=document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra =document.getElementById("boton-tierra")
const botonReiniciar =document.getElementById("boton-reiniciar")



const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo") 

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")

let sectionSeleccionarMascota=document.getElementById("seleccionar-mascota")

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputHipodogue 
let inputCapipepo   
let inputRatigueya 
let inputLangostelvis 
let inputTucapalma
let inputPydos 

let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodogue = new Mokepon("Hipodogue", "./imagenes/hipodogue.png", 5)

let capipepo = new Mokepon("Capipepo", "./imagenes/capipepo.webp", 5)

let ratigueya = new Mokepon("Ratigueya", "./imagenes/ratigueya.png", 5)

let langostelvis = new Mokepon("Langostelvis", "./imagenes/langostelvis.png", 5)

let tucapalma = new Mokepon("Tucapalma", "./imagenes/tucapalma.png", 5)

let pydos = new Mokepon("Pydos", "./imagenes/pydos.webp", 5)

hipodogue.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🌱", id: "boton-tierra"},
)
capipepo.ataques.push(
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    
)
ratigueya.ataques.push(
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🌱", id: "boton-tierra"},
)
langostelvis.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🌱", id: "boton-tierra"},
)
tucapalma.ataques.push(
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
)
pydos.ataques.push(
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🌱", id: "boton-tierra"},
)

mokepones.push(hipodogue,capipepo,ratigueya,langostelvis,tucapalma,pydos)

function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display="none"
    sectionReiniciar.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}/>
        <label class="tarjeta-de-mokepon" for =${mokepon.nombre}>
        <p>${mokepon.nombre}</p> 
        <img width="100px" src=${mokepon.foto} alt=${mokepon.nombre}/>
        </label> 
        `
        contenedorTarjetas.innerHTML+= opcionDeMokepones
        inputHipodogue = document.getElementById("Hipodogue")
        inputCapipepo = document.getElementById("Capipepo")  
        inputRatigueya = document.getElementById("Ratigueya")
        inputLangostelvis = document.getElementById("Langostelvis")
        inputTucapalma = document.getElementById("Tucapalma")
        inputPydos = document.getElementById("Pydos")
        

    })
    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)
    botonReiniciar.addEventListener("click", reiniciarJuego)

 }

function seleccionarMascotaJugador(){
  

        if(inputHipodogue.checked){
            spanMascotaJugador.innerHTML = "Hipodogue"
            seleccionarMascotaEnemigo()

        }else if(inputCapipepo.checked){
            spanMascotaJugador.innerHTML = "Capipepo"
            seleccionarMascotaEnemigo()
        }else if(inputRatigueya.checked){
            spanMascotaJugador.innerHTML = "Ratigueya"
            seleccionarMascotaEnemigo()
        }else if(inputLangostelvis.checked){
            spanMascotaJugador.innerHTML = "Langostelvis"
            seleccionarMascotaEnemigo()
        }else if(inputTucapalma.checked){
            spanMascotaJugador.innerHTML = "Tucapalma"
            seleccionarMascotaEnemigo()
        }else if(inputPydos.checked){
            spanMascotaJugador.innerHTML = "Pydos"
            seleccionarMascotaEnemigo()
        }else {
            alert("Aun no has elegido, selecciona por favor. ")
        }
         

    }

    
  
     
function seleccionarMascotaEnemigo() {
        sectionSeleccionarAtaque.style.display="flex"
        sectionSeleccionarMascota.style.display="none"
        let mascotaAleatoria = aleatorio(1,6)
            

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
        
        let nuevoAtaqueDelJugador = document.createElement("p")
        let nuevoAtaqueDelEnemigo = document.createElement("p")

        sectionMensajes.innerHTML = resultado
        nuevoAtaqueDelJugador.innerHTML = ataqueJugador
        nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

        ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
        ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    }    

    function crearMensajeFinal (resultadoFinal){ 
        sectionMensajes.innerHTML = resultadoFinal
            botonFuego.disabled=true
            botonAgua.disabled=true
            botonTierra.disabled=true
            sectionReiniciar.style.display = "block"
    }    


    function reiniciarJuego(){
        location.reload()
    }

    function aleatorio(min, max){
        return  Math.floor( Math.random() * (max - min + 1) + min)
        }




window.addEventListener("load", iniciarJuego)
