//declaro array  vacios
const  alumno = []
const año = []
const vacantes = 3;

//clases a usar
class Alumno {
    constructor(nombre, apellido, edad, grado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.grado = grado;
    }

}

class Año{
    constructor(grado, cantidaddealumnos){
    this.grado = grado; 
    this.cantidaddealumnos = 0 ; 
}
}
// informacion preingresada
año.push(new Año("primer-grado"));
año.push(new Año("segundo-grado" ));
año.push(new Año("tercer-grado"));
//corroborando info
console.log(año[0], año[1])

// funcion regitro de alumnos
function registroalumno(){
    nombre = prompt("ingrese el nombre del alumno");
        apellido = prompt("ingrese el apellido del alumno");
        edad = prompt("ingrese la edad del alumno");
        grado = prompt ("primer-grado\nsegundo-grado\ntercer-grado\n   ingrese el año al que se inscribe");
        while(grado != "primer-grado" && grado != "segundo-grado" && grado != "tercer-grado"){
        alert("ah ingresado un dato incorrecto")
        grado = prompt ("primer-grado\nsegundo-grado\ntercer-grado\n   ingrese el año al que se inscribe");
    }
        
}
function afterpush(){
    let indice = año.findIndex(c => c.grado == grado);
        console.log(indice)
        console.log(año[indice])
        año[indice].cantidaddealumnos = año[indice].cantidaddealumnos + 1;
        console.log(año[indice].cantidaddealumnos)
}
// inicio del programa ingreso de 4 alumnos para no hacerlo muy largo
for (i = 0 ; i <= vacantes ; i++){
    switch (i) {
        case i=0:
        registroalumno()
        alumno1 = new Alumno(nombre, apellido, edad, grado );
        if (grado =="primer-grado" || grado =="segundo-grado"  || grado =="tercer-grado"){
            alumno.push(alumno1)
            console.log(alumno1)
            afterpush()
        }
        break            
        case i=1:
        registroalumno()
        alumno2 = new Alumno(nombre, apellido, edad, grado );
        if (grado =="primer-grado" || grado =="segundo-grado"  || grado =="tercer-grado"){
            alumno.push(alumno2)
            console.log(alumno2)
            afterpush()
        }    
        break
        case i=2:
        registroalumno()
        alumno3 = new Alumno(nombre, apellido, edad, grado );
        if (grado =="primer-grado" || grado =="segundo-grado"  || grado =="tercer-grado"){
            alumno.push(alumno3)
            console.log(alumno3)
            afterpush()
        }    
        break 
        case i=3:
        registroalumno()
        alumno4 = new Alumno(nombre, apellido, edad, grado );
        if (grado =="primer-grado" || grado =="segundo-grado"  || grado =="tercer-grado"){
            alumno.push(alumno4)
            console.log(alumno4)
            afterpush()
        }    
        break       
    }
    }


    console.log(alumno[2].nombre)
    tomarlista = prompt("desea tomar lista ? si \n o \n no ")
    while(tomarlista !="si");
    
    // segunda parte del programa
    let alumnos = 0 ; 
    const totalclaces = 10;
    let presente = 0, presente2 = 0 ;
    let ausencia = 0, ausencia2 = 0;
    let porciento, porciento2;
    
    
    function asistencia (){
    while( alumnos != "si" && alumnos != "no"){
    alert("los datos son incorrectos vulva a intentarlo por favor")
    alumnos = prompt("esta el alumno " + alumno[0].nombre );
    }
    }   
    function mostrar(){
        if (alumnos == "si"){
            presente = presente + 1;
            porciento = (presente * 100) / totalclaces;
            } else{
            ausencia = ausencia + 1 ;
                console.log(ausencia)
            };
    }
    
    for(i=0; i<=4; i++){
        switch (i) {
            case i=0:
                document.write("lunes <br>")
                alumnos = prompt("lunes  esta el alumno " + alumno[0].nombre );
        asistencia()
        mostrar()
        mostar =  document.write( alumno[0].nombre + ": presentes " +  presente , " ausencias " +  ausencia + " <br> " );
        document.write("<br>" + "<br>");
    
        alumnos = prompt(" lunes esta el alumno " + alumno[1].nombre );
        asistencia()
        if (alumnos == "si"){
            alumnos++
            presente2 = presente2 + 1;
        } else{
            ausencia2 = ausencia2  + 1 ;
                console.log(ausencia)
        };
        document.write( alumno[1].nombre +" :presentes " + presente2 , " ausencias " + ausencia2  + " <br> " );
    
        document.write("<br>" + "<br>");
        break
            case i=1:
                document.write(" martes <br>")
                alumnos = prompt("martes  esta el alumno " + alumno[0].nombre );
                asistencia()
                mostrar()
                mostar =  document.write( alumno[0].nombre + ": presentes " +  presente , " ausencias " +  ausencia + " <br> " );
                document.write("<br>" + "<br>");
            
                alumnos = prompt(" martes esta el alumno  " + alumno[1].nombre );
                asistencia()
                if (alumnos == "si"){
                    alumnos++
                    presente2 = presente2 + 1;
                } else{
                    ausencia2 = ausencia2  + 1 ;
                        console.log(ausencia)
                };
                document.write(alumno[1].nombre  + ": presentes " + presente2 , " ausencias " + ausencia2  + " <br> " );
            
                document.write("<br>" + "<br>");
                break
            case i=2:
                    document.write(" miercoles <br>")
                alumnos = prompt(" miercoles esta el alumno " + alumno[0].nombre );
                asistencia()
                mostrar()
                mostar =  document.write( alumno[0].nombre + ": presentes " +  presente , " ausencias " +  ausencia + " <br> " );
                document.write("<br>" + "<br>");
            
                alumnos = prompt(" miercoles esta el alumno  " + alumno[1].nombre );
                asistencia()
                if (alumnos == "si"){
                    alumnos++
                    presente2 = presente2 + 1;
                } else{
                    ausencia2 = ausencia2  + 1 ;
                        console.log(ausencia)
                };
                document.write( alumno[1].nombre + ": presentes " + presente2 , " ausencias " + ausencia2  + " <br> " );
            
                document.write("<br>" + "<br>");
                break
            case i=3:
                    document.write(" jueves <br>")
                alumnos = prompt(" jueves esta el alumno  " + alumno[0].nombre );
                asistencia()
                mostrar()
                mostar =  document.write( alumno[0].nombre + ": presentes " +  presente , " ausencias " +  ausencia + " <br> " );
                document.write("<br>" + "<br>");
            
                alumnos = prompt(" jueves esta el alumno? " +  alumno[1].nombre);
                asistencia()
                if (alumnos == "si"){
                    alumnos++
                    presente2 = presente2 + 1;
                } else{
                    ausencia2 = ausencia2  + 1 ;
                        console.log(ausencia)
                };
                document.write( alumno[1].nombre + ": presentes " + presente2 , " ausencias " + ausencia2  + " <br> " );
            
                document.write("<br>" + "<br>");
                break
            case i=4:
                    document.write("viernes <br>")
                alumnos = prompt(" viernes esta el alumno  " + alumno[0].nombre );
                asistencia()
                mostrar()
                mostar =  document.write( alumno[0].nombre + ": presentes " +  presente , " ausencias " +  ausencia + " <br> " );
                document.write("el alumno" + alumno[0].nombre + "tiene un " + porciento +"%" + "  del total de las claces");
                document.write("<br>" + "<br>");
            
                alumnos = prompt(" viernes esta el alumno ?" + alumno[1].nombre  );
                asistencia()
                if (alumnos == "si"){
                    alumnos++
                    presente2 = presente2 + 1;
                    porciento2 = (presente2 * 100) / totalclaces;
                } else{
                    ausencia2 = ausencia2  + 1 ;
                    porciento2 = (presente2 * 100) / totalclaces;
                        console.log(ausencia)
                };
                document.write( alumno[1].nombre + ": presentes " + presente2 , " ausencias " + ausencia2  + " <br> " );
                
                document.write("el alumno " + alumno[1].nombre + " tiene un " + porciento2 +"%" + "  del total de las claces");
            
                document.write("<br>" + "<br>");
            default:
                    break
            } 
        }