//1 SUMA

function suma(num1,num2){
    return num1 + num2

}

console.log(suma(5,10))
console.log(suma(5,10), suma(5,5))
console.log(suma(suma(5,10), suma(5,5)))

//2 EXAMENES
  //FORMA1

function prom(exa1,exa2,exa3,exa4){
    return (exa1+exa2+exa3+exa4)/4
}

console.log(prom(10,10,20,20))

//FORMA2
/*  let exa1 = prompt('Ingrese exa1');
    let exa2 = prompt('Ingrese exa2');
    let exa3 = prompt('Ingrese exa3');
    let exa4 = prompt('Ingrese exa3');

    promedio = (parseInt (exa1) + parseInt (exa2) + parseInt (exa3) + parseInt  (exa4))

    alert ('Su promedio es: ' + promedio/4)*/

//3 AREA RECTANGULO

function area_rectangulo(base,altura){
    return base*altura
}

console.log(area_rectangulo(10,5))


//4 AREA TRIANGULO

function area_triangulo(base,altura){
    return (base*altura)/2
}

console.log(area_triangulo(10,5))

//5 AREA CIRCUNFERENCIA

function area_circulo(radio){
    const pi = 3.14
    return (pi*radio)**2
}

console.log(area_circulo(4))

//6 SUELDO SEMANAL

function sueldo(salario,horas){
    return salario*horas
}

console.log(sueldo(10,8))

//7 METROS PULGADAS

function tela(metros){
    const pulg=0.0254
    return metros/pulg
}

console.log(tela(50))

//8 DOLARES

function cambio_dolar(soles){
    const dolar=3.60
    return soles/dolar
}

console.log(cambio_dolar(100))

//9 ENTREVISTA

function entrevista(año){
    let año_actual=2020
    return año_actual-año
}

console.log(entrevista(50))

//10 Nombre_Edad

function edad_menor() {
    let abc;
    let nombres = [
        {
            nombre: "Laura",
            edad: 15,
        },
        {
            nombre: "Juanjo",
            edad: 20,
        },
        {
            nombre: "carmen",
            edad: 8,
        }
    ]

    if (nombres[0].edad < nombres[1].edad && nombres[0].edad < nombres[2].edad) {
        abc = ("El hermano menor es " + nombres[0].nombre + " y su edad es " + nombres[0].edad);
    }
    else {
        if (nombres[1].edad < nombres[2].edad && nombres[1].edad < nombres[0].edad) {
            abc = ("El hermano menor es " + nombres[1].nombre + " y su edad es " + nombres[1].edad);}
        
        else { abc = ("El hermano menor es " + nombres[2].nombre + " y su edad es " + nombres[2].edad) }
        }
        console.log(abc)
    }
    edad_menor()

//11 BONO

function anio(a) {
            
    if (a == 1) {
        return anio = "Tu bono es 100$";
    }
    else {
        if (a == 2) {
            return anio = "Tu bono es 200$";
        }

        else {
            if (a == 3) {
                return anio = "Tu bono es 300$";
            }
            else {
                if (a == 4) {
                    return anio = "Tu bono es 400$";
                }
                else {
                    if (a == 5) {
                        return anio = "Tu bono es 500$";
                    }
                    else {
                        return anio = "Tu bono es 1000$";
                    }
                }
            }
        }
    }
   
}
anio(10)
console.log(anio)

//12 PROFESOR SALARIO

let num = Number();
let salario = Number();
for (num = 1; num <= 5; num++) {
    salario = 1500*1.10**num;
    
}
console.log("Su salario en el año ", num, " es de ", salario);


//13 CALIFICACIONES ALUMNOS

/*let i = Number();
let aprobado = Number();
let desaprobado = Number();
aprobado = 0;
desaprobado = 0;

let n = Number(prompt("Ingrese numero de alumnos"));

for (i = 1; i <= n; i++) {
    let nota = Number(prompt("Ingrese nota del alumno", i));
    if (nota > 10) {
        aprobado = aprobado + 1;
    } else {
        desaprobado = desaprobado + 1;
    }
}

console.log("Aprobados: ", aprobado);
console.log("Desaprobados: ", desaprobado)*/

//14 FOCOS

/*let inicio = 0;
            let focos = [];
            let cantidad;
            let rojo = 0;
            let verde = 0;
            let blanco = 0;
            

        function datos() {
            
            cantidad = prompt('Ingresa cantidad de focos');
            for (inicio; inicio < cantidad; inicio++) {
                focos[inicio] = prompt("Ingresa color de foco ");
                if (focos[inicio] == "rojo") {
                   rojo = rojo + 1}
                                   
                else if (focos[inicio] == "verde") {                
                    verde = verde + 1;
            }

            else {
                blanco = blanco + 1;
            }
           
            }

        console.log('Rojo',rojo,"Verde ",verde,"Blanco",blanco)

        }
        datos()*/

//15 ELECCIONES

function datos() {
            
    edad = prompt('Ingresa tu edad');
  
        if (edad >= 18) {
            m = "Si puedes votar"
        }
                           
        else {                
            m = "No puedes votar";
    }
   
console.log(m)
}
datos()       

        