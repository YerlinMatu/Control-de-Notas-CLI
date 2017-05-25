"use strict"
/*
 Alumno: Yerlinson Maturana
 Faculta: Ingenieria de Sistemas
 Materia : Estructura de datos
 Semestre : 3º

*/
var table = require('konsole.table');
var lib = require('readline'),
	readlineSync = require('readline-sync'),
	teclado = lib.createInterface({
	input:process.stdin,
	output:process.stdout,
});
ClearDisplay();
var figura = require('figlet');
figura('UNICLARETIANA', function(err, data) {
    if (err) {
        console.dir(err);
        return;
    }
    console.log(data)
    var count = 0;
    console.log("Cargando...");
});
	
 String.prototype.Capitaze = function(){
	 return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
} 

setTimeout(function Cargar(){
// Ready. 
main() // PRINCIPAL.

function main(){
ClearDisplay();	
Menu();
// Fin de Main.
}

}, 2000)
// Colors 
var mora = '\x1b[35m%s\x1b[0m',
    bullRed = '\x1b[41m%s\x1b[0m';

/*
 DECLARACION DE ALUMNO COMO OBJETO:
*/
function ALUMNO (nombre, materia, resp){
    this.nombre = nombre || "Sin nombre";
    this.materia = materia || "Ninguna";
    this.setPromedio = function(nota){
    	this.nota = nota;
    }
    this.getPromedio = function(){
    	return this.nota || 0.0;
    }
    this.setAprobar = function(resp){
    	this.aprobacion = resp;
    }
    this.getAprobar = function(){
    	return this.aprobacion;
    }
    this.setNivel = function(nivel){
       this.nivel = nivel;
    }
    this.getNivel = function(){
      return this.nivel;
    }
}

// Declaraciones.
function Menu(){
var opcion;
	Header("      SISTEMA DE CALIFICACIONES - UNICLARETIANA   ");
	Body();
  // console.log("\007");
}

function Header(TITULO){
	cout("===================================================");
	cout(            TITULO  , '\x1b[42m%s\x1b[0m');
	cout("===================================================");
}
function Body(){
 	cout("[c] Calificar ","\x1b[40m%s\x1b[0m");
  cout("[t] Planilla  ", "\x1b[48m%s\x1b[0m");
  cout("[b] Buscacador")
 	cout("[s] Salir     ", "\x1b[41m%s\x1b[0m");
 	cout("___________________________________________________");
 
 	// Lectura de por teclado.
 	teclado.question('Elige una opción c/s :', function(opcion){
//	((opcion == 'c') || (opcion == 'C')) ? Formulario():Salir();
   switch(opcion){
      case "c" || "C":Formulario(); break;
      case "s" || "S":Salir(); break;
      case "t" || "T":BASEDATA(); break;
      case "b" || "B":Buscador(); break;
      default:{
         cout("No existe función asignada para "+opcion, bullRed);
         cout("Espere un momento");
         ClearDisplay();
         setTimeout(Menu(), 3000);
      }
   }
	//teclado.close() 
	});

	function Salir(){ cout("\n ¡Hasta Luego!"); process.exit(-1); }
}
function ClearDisplay(){ cout('\x1Bc') }

function cout(text, color){
	if(color) console.log(color, text);
	else console.log(text); 
}
 var info = {}, BD = [],  Estudiante = new ALUMNO, i;
function Formulario(){ 	

	Header("     FORMULARIO     ");
	 //teclado.question('Cantidad de alumnos :', function(CantidadAlumnos){
	// 	info.one = +CantidadAlumnos;
	   // cout('OK', mora);
	/* teclado.question('Cantidad de materias :', function(CantidadMaterias){
	    info.twe = +CantidadMaterias;
	    cout('OK', mora); */
	   teclado.close(); 
	  //  for(i = 1; i<=info.one; i++){

	    	 i = 1;   
         do{
         ClearDisplay(); 
	    	 SolicitarInfo();
        var R = readlineSync.question('[S]/[N] CONTINUAR CON SIGUIENTE => '.concat(i+1)+' :');
         i++;
         if((R != "S") || (R == "N") || (R == "n")){
          // Busqueda. 
          Menu();
          break;
         }
         if((R == "M") || (R == "menu") || (R == "m")){
            Menu(); 
            break;
         }
	  //  }
  }while((R == "S") || (R == "s") || (R.charAt(0) == "s") || (R == "") || (R == false));
	   
	//}); 
//});  
} 

function SolicitarInfo(){
	Header("    DATOS DE ALUMNO(S)     ".concat(i) +"  ");
	Estudiante.nombre = readlineSync.question(i+'ª'+' Nombre del estudiante :');
	cout(Estudiante.nombre, mora); 
	ElegirMaterias();
}

function ElegirMaterias(){
	 Header("    MATERIA(S) A CALIFICAR     ");
  var Materias = ['Estructura de Datos', 'Cálculo Integral', 'Epistemologia', 'Algebra Lineal', 'Física 2', 'Otra'],
 index = readlineSync.keyInSelect(Materias, 'Elige la materia a calificar :');
  console.log('Ok, ' + Materias[index] + ' Genial! ');
  Estudiante.materia = Materias[index];
  if(Materias[index] === 'Otra'){
	 Estudiante.materia = readlineSync.question('Nombre de nueva materia :');
	    Materias[index] = nueva_materia;
	    cout('\n Materia agregada exitosamente',mora);
	    var z = 0;
	    while(z<Materias.length){
	    	cout('['+z+']'+Materias[z], '\x1b[38m%s\x1b[0m');
	    	z++;
	    }
	   Estudiante.materia = Materias[index];
  }

  else{
  	    Header("  1º PRIMER  CORTE      ");
  	    var t1 = readlineSync.question('Nota de 1ª taller :');
  	    if(t1 <= 2.9 || t1>5.0) cout(t1, bullRed);
  	    var	exp1 = readlineSync.question('Nota de 1ª exposición :');
  	    if(exp1 <= 2.9 || exp1>5.0)	cout(exp1, bullRed); 
  	    var	parc1 = readlineSync.question('Nota de 1ª parcial :');
  	    if(parc1 <= 2.9 || parc1>5.0) cout(parc1, bullRed); 
  	    Header("  2º SEGUNDO CORTE     ");
  	    var t2 = readlineSync.question('Nota de 2ª taller :');
  	    if(t2 <= 2.9 || t2>5.0)    cout(t2, bullRed);
  	    var exp2 = readlineSync.question('Nota de 2ª exposición :');
  	    if(exp2 <= 2.9 || exp2>5.0)   cout(exp2, bullRed);
  	    var parc2 = readlineSync.question('Nota de 2ª parcial :');
  	    if(parc2 <= 2.9 || parc2>5.0) cout(parc2, bullRed);
  	    Header("  3º TERCER  CORTE     ");
  	    var exp3 = readlineSync.question('Nota 3º exposición :');
  	    if(exp3 <= 2.9 || exp3>5.0)  cout(exp3, bullRed);
  	    var parc3 = readlineSync.question('Nota 3º parcial :');
  	    if(parc3 <= 2.9 || parc3>5.0)  cout(parc3, bullRed);
  	     Header("Sr(a). "+ Estudiante.nombre.toUpperCase()+" SU  NOTA FINAL  EN "+Estudiante.materia.toUpperCase() +" :");

  	   t1*=0.10; t2*=0.10; exp1*=0.10; exp2*=0.10; exp3*=0.40;
  	   parc1*=0.80; parc2*=0.80; parc3*=0.60; 
  	   var sumatoria1 = t1+exp1+parc1,
  	       sumatoria2 = t2+exp2+parc2,
  	       sumatoria3 = exp3+parc3;

  	       // Porcentajes.
  	       sumatoria1 *= 0.30;
  	       sumatoria2 *= 0.30;
  	       sumatoria3 *= 0.40;
           
  	     var PromedioFinal = (sumatoria1+sumatoria2+sumatoria3);
  	     Estudiante.setPromedio(PromedioFinal.toFixed(1));
  	     cout(Estudiante.getPromedio(), bullRed);

  	     if(Estudiante.getPromedio() > 3.0 && Estudiante.getPromedio() < 4.0){
  	     		 cout('¡Ha aprobado, con un promedio básico! :| ');
             Estudiante.setAprobar("Sí");
             Estudiante.setNivel("Básico");
  	     }
  	     if(Estudiante.getPromedio() >= 4.0 &&  Estudiante.getPromedio() < 5.0){
  	     	     cout('¡Ha aprobado, con un promedio alto! :) ');
               Estudiante.setAprobar("Sí");
               Estudiante.setNivel("Alto");
  	     }
  	     if(Estudiante.getPromedio() == 5.0){
  	     	     cout('¡Excelente, su promedio es superior! :D');
               Estudiante.setAprobar("Sí");
               Estudiante.setNivel("Superior");
  	     }
  	     else if(Estudiante.getPromedio() <= 2.9){
    	     		cout('Su promedio es muy bajo para cursar el siguiente semestre. \n', bullRed);
    	     		cout('REPROBÓ. :(', bullRed);
              Estudiante.setAprobar("No");
              Estudiante.setNivel("Bajo")
  	     }
  	     else if(Estudiante.getPromedio() > 5.0){
      	     	cout("¡ESE PROMEDIO NO ES POSIBLE, POR FAVOR INTENTE DE NUEVO!", bullRed);
              Estudiante.setAprobar("En Investigación");
              Estudiante.setNivel("DIOS");
  	     }
  	    
     var prom = Estudiante.getPromedio(),
         apro = Estudiante.getAprobar(),
         level = Estudiante.getNivel(),
         tiempo = new Date(),
         hora = (tiempo.getHours() > 12) ? tiempo.getHours():tiempo.getHours() - 12,
         minutos = tiempo.getMinutes(),
         segundos = tiempo.getSeconds(),
         Alumx = {
              ID:i,
              NOMBRE:Estudiante.nombre || "Anonimo",
              MATERIAS:Estudiante.materia || "Otra",
              PROMEDIO:prom || 0,
              APROBACION:apro || "Ninguna",
              NIVEL:level || "Ninguno",
              HORA:  hora+':'+minutos+':'+segundos
         }
  	     BD.push(Alumx);
  }
  	BASEDATA();
}
function BASEDATA(){
  try{
  ClearDisplay();
 	console.table(BD);
 }catch(err){
   cout("  No se encontraron calificaciones en la base de datos :'( ".toUpperCase(), bullRed);
   cout("  Intente primero calificando ", bullRed);
   Menu();
 }

 function Buscador(){

      var sh = readlineSync.question('Digite el ID del alumno:'); sh = parseInt(sh);
      var peticion = Alumx.ID.indexOf(sh), ok = 0;
      if(peticion === ok){
         cout('El alumno SÍ existe en la base de datos');
         if(BD){
         cout(BD[sh-1].NOMBRE);
         cout(BD[sh-1].PROMEDIO);
         }
        }
      else if((peticion != ok)){
         cout('El alumno NO existe en la base de datos');
         cout('Intente añadiendolo a la base de datos.');
        }
     }

  //var buscar = readlineSync("AQUÍ PUEDE BUSCAR UN ALUMNO \n POR SU NOMBRE PARA OBTENER SU PROMEDIO :");
  
}
