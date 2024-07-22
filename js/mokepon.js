const sectionSeleccionarAtaque=document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")


const sectionSeleccionarMascota=document.getElementById("seleccionar-mascota")


const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo") 

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")

const contenedorAtaques = document.getElementById("contenedorAtaques")
const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodogue 
let inputCapipepo   
let inputRatigueya 
let inputLangostelvis 
let inputTucapalma
let inputPydos 
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon 
let ataquesMokeponEnemigo
let botonFuego 
let botonAgua 
let botonTierra 
let botonReiniciar 
let botones = []
let indexAtaqueEnemigo
let indexAtaqueJugador
let victoriasJugador = 0
let victoriasEnemigo = 0
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./imagenes/mokemap.webp"

let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")

class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = 20
        this.y = 30
        this.ancho = 80
        this.alto = 80 
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.velocidadx = 0
        this.velocidady = 0
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
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🌱", id: "boton-tierra"},
)
tucapalma.ataques.push(
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
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🌱", id: "boton-tierra"},
)

mokepones.push(hipodogue,capipepo,ratigueya,langostelvis,tucapalma,pydos)

function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display="none"
    sectionReiniciar.style.display = "none"
    sectionVerMapa.style.display = "none"


    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
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
    

 }

function seleccionarMascotaJugador(){
  
        
        if(inputHipodogue.checked){
            spanMascotaJugador.innerHTML = inputHipodogue.id
            mascotaJugador = inputHipodogue.id
            seleccionarMascotaEnemigo()

        }else if(inputCapipepo.checked){
            spanMascotaJugador.innerHTML = inputCapipepo.id
            mascotaJugador = inputCapipepo.id
            

        }else if(inputRatigueya.checked){
            spanMascotaJugador.innerHTML = inputRatigueya.id
            mascotaJugador = inputRatigueya.id
            

        }else if(inputLangostelvis.checked){
            spanMascotaJugador.innerHTML = inputLangostelvis.id
            mascotaJugador = inputLangostelvis.id
            

        }else if(inputTucapalma.checked){
            spanMascotaJugador.innerHTML = inputTucapalma.id
            mascotaJugador = inputTucapalma.id
            

        }else if(inputPydos.checked){
            spanMascotaJugador.innerHTML = inputPydos.id
            mascotaJugador = inputPydos.id
            

        }else {
            alert("Aun no has elegido, selecciona por favor. ")
        }
        sectionVerMapa.style.display = "flex"
        iniciarMapa()
         extraerAtaques(mascotaJugador)
         seleccionarMascotaEnemigo()  
    }

 function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
                ataques = mokepones[i].ataques
        }
        
    }
    
    mostrarAtaques(ataques)

 }   
  
function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre} </button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    } )
     botonFuego = document.getElementById("boton-fuego")
     botonAgua = document.getElementById("boton-agua")
     botonTierra =document.getElementById("boton-tierra")
     botones = document.querySelectorAll(".BAtaque")
     botonReiniciar =document.getElementById("boton-reiniciar")

     botonReiniciar.addEventListener("click", reiniciarJuego)
     
} 

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
             if (e.target.innerText === "🔥"){
                ataqueJugador.push("FUEGO")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled=true
             } else if (e.target.innerText === "💧"){
                ataqueJugador.push("AGUA")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled=true
             } else {
                ataqueJugador.push("TIERRA")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled=true
             } 
        
             ataqueAleatorioEnemigo()
            })
        
    })
    
}
     
function seleccionarMascotaEnemigo() {
    

        // sectionSeleccionarAtaque.style.display="flex"
        sectionSeleccionarMascota.style.display="none"
        let mascotaAleatoria = aleatorio(0, mokepones.length -1)
            
        spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
        ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
        secuenciaAtaque()
    }

    
    function ataqueAleatorioEnemigo(){
        let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)   
        if (ataqueAleatorio == 0 || ataqueAleatorio == 1 ){
        ataqueEnemigo.push("FUEGO")
        }else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push("AGUA")
        }else {
        ataqueEnemigo.push("TIERRA")
        }

        console.log(ataqueEnemigo)
       
        iniciarPelea()
    }
    function iniciarPelea(){
        if (ataqueJugador.length === 5){
            combate()
        }
    }
    function indexAmbosOponentes(jugador,enemigo){
        indexAtaqueJugador = ataqueJugador[jugador]
        indexAtaqueEnemigo = ataqueEnemigo[enemigo]
    }

    function combate() {
            
        for (let index = 0; index < ataqueJugador.length; index++) {
            if (ataqueJugador[index] === ataqueEnemigo[index]) {
                indexAmbosOponentes(index,index)
                crearMensaje("EMPATE")
            } else if (ataqueJugador[index] === "FUEGO" && ataqueEnemigo[index] === "TIERRA"){
                indexAmbosOponentes(index,index)
                crearMensaje("GANASTE")
                victoriasJugador++
                spanVidasJugador.innerHTML = victoriasJugador
               
            } else if (ataqueJugador[index] === "AGUA" && ataqueEnemigo[index] === "FUEGO"){
                indexAmbosOponentes(index,index)
                crearMensaje("GANASTE")
                victoriasJugador++
                spanVidasJugador.innerHTML = victoriasJugador
               
            } else if (ataqueJugador[index] === "TIERRA" && ataqueEnemigo[index] === "AGUA"){
                indexAmbosOponentes(index,index)
                crearMensaje("GANASTE")
                victoriasJugador++
                spanVidasJugador.innerHTML = victoriasJugador
                
            } else {
                indexAmbosOponentes(index,index)
                crearMensaje("PERDISTE")
                victoriasEnemigo++
                spanVidasEnemigo.innerHTML = victoriasEnemigo
                 }
             }

      
        revisarVictorias()

    }

    function revisarVictorias(){
        if(victoriasJugador === victoriasEnemigo){
            crearMensajeFinal("QUE BUEN JUEGO, PERO FUE EMPATE")
        }else if (victoriasJugador > victoriasEnemigo){
            crearMensajeFinal("GANASTE, QUE BUEN JUEGO..")
        }else {
            crearMensajeFinal("PERDISTE, PERO NO TE DESANIMES VUELVE Y JUEGA...")
        }

    }

    function crearMensaje(resultado){
        
        let nuevoAtaqueDelJugador = document.createElement("p")
        let nuevoAtaqueDelEnemigo = document.createElement("p")

        sectionMensajes.innerHTML = resultado
        nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
        nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

        ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
        ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    }    

    function crearMensajeFinal (resultadoFinal){ 
        sectionMensajes.innerHTML = resultadoFinal
            
            sectionReiniciar.style.display = "block"
    }    


    function reiniciarJuego(){
        location.reload()
    }

    function aleatorio(min, max){
        return  Math.floor( Math.random() * (max - min + 1) + min)
        }

    function pintarCanvas() {

        mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadx
        mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidady
        lienzo.clearRect(0, 0, mapa.width, mapa.height)
        lienzo.drawImage(
            mapaBackground,
            0,
            0,
            mapa.width,
            mapa.height
        )
        lienzo.drawImage(
            mascotaJugadorObjeto.mapaFoto,
            mascotaJugadorObjeto.x,
            mascotaJugadorObjeto.y,
            mascotaJugadorObjeto.ancho,
            mascotaJugadorObjeto.alto
        )
        
    }

    function moverArriba() {
        
        mascotaJugadorObjeto.velocidady = - 5
        
    }
    function moverIzquierda() {
        
        mascotaJugadorObjeto.velocidadx = - 5
        
    }
    function moverAbajo() {
        
        mascotaJugadorObjeto.velocidady = 5
        
    }
    function moverDerecha() {
        
        mascotaJugadorObjeto.velocidadx = 5
        
    }
    function detenerMovimiento() {
        
        mascotaJugadorObjeto.velocidadx = 0
        mascotaJugadorObjeto.velocidady = 0
    }
    function sePresionoUnaTecla(event) {
        
        switch (event.key) {
            case "ArrowUp":
                moverArriba()
                break;
            case "ArrowDown":
                moverAbajo()
                break;
            case "ArrowLeft":
                moverIzquierda()
                break;
            case "ArrowRight":
                moverDerecha()
                break;        
            default:
                break;
        }
    }
    function iniciarMapa() {
        mapa.width = 800
        mapa.height = 500
        mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
        intervalo = setInterval(pintarCanvas, 50)

       window.addEventListener("keydown", sePresionoUnaTecla)
       window.addEventListener("keyup", detenerMovimiento)
    }
    function obtenerObjetoMascota(){
        for (let i = 0; i < mokepones.length; i++) {
            if (mascotaJugador === mokepones[i].nombre) {
                    return mokepones[i]
            }
            
        }
        
    }


window.addEventListener("load", iniciarJuego)
