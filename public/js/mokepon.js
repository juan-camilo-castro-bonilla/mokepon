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

let jugadorId = null
let enemigoId = null
let mokepones = []
let mokeponesEnemigos = []
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
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 50
const anchoMaximoDelMapa = 1050

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 50
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")

class Mokepon{
    constructor(nombre, foto, vida, fotoMapa, id = null ){
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 80
        this.alto = 80 
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadx = 0
        this.velocidady = 0
    }
    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let hipodogue = new Mokepon("Hipodogue", "./imagenes/hipodogue.png", 5, "./imagenes/hipodogue - copia.png")

let capipepo = new Mokepon("Capipepo", "./imagenes/capipepo.webp", 5, "./imagenes/capipepo - copia.webp")

let ratigueya = new Mokepon("Ratigueya", "./imagenes/ratigueya.png", 5, "./imagenes/ratigueya - copia.png")

let langostelvis = new Mokepon("Langostelvis", "./imagenes/langostelvis.png", 5, "./imagenes/langostelvis - copia.png")

let tucapalma = new Mokepon("Tucapalma", "./imagenes/tucapalma.png", 5, "./imagenes/tucapalma - copia.png")

let pydos = new Mokepon("Pydos", "./imagenes/pydos.webp", 5, "./imagenes/pydos - copia.webp")



const HIPODOGUE_ATAQUES = [
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🌱", id: "boton-tierra"},
]

hipodogue.ataques.push(...HIPODOGUE_ATAQUES)

// hipodogueEnemigo.ataques.push(...HIPODOGUE_ATAQUES)

const CAPIPEPO_ATAQUES = [
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
]

capipepo.ataques.push(...CAPIPEPO_ATAQUES)

// capipepoEnemigo.ataques.push(...CAPIPEPO_ATAQUES)

const RATIGUEYA_ATAQUES = [
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🌱", id: "boton-tierra"},
]
ratigueya.ataques.push(...RATIGUEYA_ATAQUES)

// ratigueyaEnemigo.ataques.push(...RATIGUEYA_ATAQUES)

const LANGOSTELVIS_ATAQUES = [
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🌱", id: "boton-tierra"},
]
langostelvis.ataques.push(...LANGOSTELVIS_ATAQUES)

// langostelvisEnemigo.ataques.push(...LANGOSTELVIS_ATAQUES)

const TUCAPALMA_ATAQUES = [
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
]
tucapalma.ataques.push(...TUCAPALMA_ATAQUES)

// tucapalmaEnemigo.ataques.push(...TUCAPALMA_ATAQUES)

const PYDOS_ATAQUES = [
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🌱", id: "boton-tierra"},
]
pydos.ataques.push(...PYDOS_ATAQUES)

// pydosEnemigo.ataques.push(...PYDOS_ATAQUES)

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
    botonReiniciar =document.getElementById("boton-reiniciar")

    botonReiniciar.addEventListener("click", reiniciarJuego)
    unirseAlJuego()

 }
 function unirseAlJuego() {
    fetch("http://192.168.1.15:8080/unirse")
        .then(function(res){
            
            if (res.ok){
                res.text()
                   .then(function (respuesta) {
                     console.log(respuesta)
                     
                     jugadorId=respuesta
                   }) 
            }
        })
}

function seleccionarMascotaJugador(){
    
        
        if(inputHipodogue.checked){
            spanMascotaJugador.innerHTML = inputHipodogue.id
            mascotaJugador = inputHipodogue.id
            

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
           return
        }
        sectionSeleccionarMascota.style.display="none" 
        seleccionarMokepon(mascotaJugador)

        extraerAtaques(mascotaJugador)
        sectionVerMapa.style.display = "flex"
        iniciarMapa()
        //seleccionarMascotaEnemigo()
        
         }

    function seleccionarMokepon(mascotaJugador) {
        fetch(`http://192.168.1.15:8080/mokepon/${jugadorId}`, {
            method: "post",
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                mokepon: mascotaJugador
                
            })
            
        })
        
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
             if (ataqueJugador.length === 5) {
                enviarAtaques()
             }
             
            })
        
    })
    
}

function enviarAtaques () {
    fetch(`http://192.168.1.15:8080/mokepon/${jugadorId}/ataques`, {
        method:"post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
           ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques() {
    fetch(`http://192.168.1.15:8080/mokepon/${enemigoId}/ataques`)
    .then(function (res) {
        if (res.ok){
            res.json()
                .then(function ({ ataques }) {
                     if (ataques.length === 5) {
                        ataqueEnemigo = ataques
                        combate()
                     }   
                })

        }
    })
}
     
function seleccionarMascotaEnemigo(enemigo) {
    

        //sectionSeleccionarAtaque.style.display="flex"
        sectionSeleccionarMascota.style.display="none"
        
            
        spanMascotaEnemigo.innerHTML = enemigo.nombre
        ataquesMokeponEnemigo = enemigo.ataques
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
        clearInterval(intervalo)    

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
        mascotaJugadorObjeto.pintarMokepon()
        enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

        mokeponesEnemigos.forEach(function (mokepon){
            mokepon.pintarMokepon()
            revisarColision(mokepon)
        })
    }

    function enviarPosicion(x, y){
        fetch(`http://192.168.1.15:8080/mokepon/${jugadorId}/posicion`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                x,
                y
            })
        })
        .then(function(res){
            if(res.ok){
                res.json()
                    .then(function ({ enemigos }){
                        console.log(enemigos)
                        
                       mokeponesEnemigos = enemigos.map(function (enemigo) {
                            let mokeponEnemigo = null
                            const mokeponNombre = enemigo.mokepon.nombre || ""
                            if (mokeponNombre === "Hipodogue") {
                                mokeponEnemigo = new Mokepon("Hipodogue", "./imagenes/hipodogue.png", 5, "./imagenes/hipodogue - copia.png", enemigo.id)        
                            } else if (mokeponNombre === "Capipepo"){
                                mokeponEnemigo = new Mokepon("Capipepo", "./imagenes/capipepo.webp", 5, "./imagenes/capipepo - copia.webp", enemigo.id)
                            } else if (mokeponNombre === "Ratigueya"){
                                mokeponEnemigo = new Mokepon("Ratigueya", "./imagenes/ratigueya.png", 5, "./imagenes/ratigueya - copia.png", enemigo.id)
                            } else if (mokeponNombre === "Langostelvis"){
                                mokeponEnemigo = new Mokepon("Langostelvis", "./imagenes/langostelvis.png", 5, "./imagenes/langostelvis - copia.png", enemigo.id)
                            } else if (mokeponNombre === "Tucapalma"){
                                mokeponEnemigo = new Mokepon("Tucapalma", "./imagenes/tucapalma.png", 5, "./imagenes/tucapalma - copia.png", enemigo.id)
                            } else {
                                mokeponEnemigo = new Mokepon("Pydos", "./imagenes/pydos.webp", 5, "./imagenes/pydos - copia.webp",enemigo.id)
                            }
                            
                            mokeponEnemigo.x = enemigo.x
                            mokeponEnemigo.y = enemigo.y
                            return mokeponEnemigo
                        })
                     })
            }
        })
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
       
        mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
        intervalo = setInterval(pintarCanvas, 100)

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
    function revisarColision(enemigo) {
        const arribaEnemigo = enemigo.y
        const abajoEnemigo = enemigo.y + enemigo.alto
        const derechaEnemigo = enemigo.x + enemigo.ancho
        const izquierdaEnemigo = enemigo.x

        const arribaMascota = 
                mascotaJugadorObjeto.y
        const abajoMascota = 
                mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
        const derechaMascota =
                mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
        const izquierdaMascota = 
                mascotaJugadorObjeto.x

        if (
            abajoMascota < arribaEnemigo ||
            arribaMascota > abajoEnemigo ||
            derechaMascota < izquierdaEnemigo ||
            izquierdaMascota > derechaEnemigo 
            
        ) {
            return
        }
        detenerMovimiento()
        clearInterval(intervalo)
        enemigoId = enemigo.id
        sectionSeleccionarAtaque.style.display = "flex"
        sectionVerMapa.style.display = "none"
        seleccionarMascotaEnemigo(enemigo)
        
        // alert("chocaste con " + JSON.stringify(enemigo.nombre) ) 

    }

window.addEventListener("load", iniciarJuego)
