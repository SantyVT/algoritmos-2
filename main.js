// EJERCICIO 1

function saludarAprendices() {
    //arreglo completo
    console.log("-- ARREGLO COMPLETO")
    let aprendices =['Jhonatan Gaitan', 'Juan Camilo', 'Santiago Rojas', 'Tinoco', 'Juan Amarillo', 'Angely', 'Julian Vargas', 'Juan Diego', 'Maria Paula', 'Juan Montoya', 'Santiago Vanegas', 'Erith Gomez', 'Erika Escobar', 'Daniel Barbosa', 'Danny Julian', 'Richard Arias', 'Felipe Guillen', 'Juan Jose Hoyos', 'Juan Fernando', 'Kevin Leandro'];

    for (let i = 0; i < aprendices.length; i++) {
        console.log("Hola, Bienvenido "+ aprendices[i])
    }
    //primer aprendiz
    console.log("-- PRIMER APRENDIZ:");
    console.log(aprendices[0]);
    
    //tercer aprendiz
    console.log("-- TERCER APRENDIZ:");
    console.log(aprendices[2]);

    //ultimo aprendiz usando length
    console.log("-- ULTIMO APRENDIZ USANDO LENGTH:");
    console.log(aprendices[aprendices.length - 1]);

    //cantidad total 
    console.log("Cantidad total de Aprendices: "+ aprendices.length);

    //recorrer arreglo y mostrar junto a posicion
    console.log("-- RECORRER ARREGLO Y MOSTRAR JUNTO A POSICION");
    for (let i = 0; i < aprendices.length; i++) {
        console.log(aprendices[i] + "        posicion:"+ i);
    }

    //solicitar uno nuevo y agregarlo, mostrar de nuevo la cantidad total 
    console.log("-- SOLICITAR UNO NUEVO  Y AGREGARLO, MOSTRAR DE NUEVO LA CANTIDAD TOTAL");
    aprendices.unshift(prompt("ingrese el nombre de un nuevo aprendiz"));
    console.log("Cantidad total de Aprendices: "+ aprendices.length);

    //mirar si uno especifico se encuentra o no 
    console.log("-- BUSCAR UNO ESPECIFICO")
    let buscar = prompt("ingrese el nombre del estudiante que quiere buscar");

    if (aprendices.includes(buscar)) {
        console.log("el aprendiz si se encuentra en la lista");
    }else {
        console.log("el aprendiz no se encuentra en la lista");
    }

    //listado actualizado
    console.log("-- LISTA ACTUALIZADA");

    for (let i = 0; i < aprendices.length; i++) {
        console.log("Hola, Bienvenido "+ aprendices[i])
    }
}

//EJERCICIO 2

function administracionDeProductos() {
    //arreglo completo
    console.log("-- ARREGLO COMPLETO");
    let productos = ["manzanas", "arroz", "dulces", "pan", "leche"];

    //productos registrados
    console.log("productos registrados: ");
    console.log(productos);

    //modificar el segundo producto
    productos[1] = "huevos";
    console.log("se modifico el segundo producto, paso de arroz a huevos");

    //agregar un producto al final
    productos.push("sal");
    console.log("se agrego un nuevo producto al final del arreglo");

    //agregar un producto al inicio 
    productos.unshift("cafe");
    console.log("se agrego un nuevo producto al principio del arreglo");

    //arreglo actualizado
    console.log("-- ARREGLO ACTUALIZADO: ");
    console.log(productos)

    //verificar si un producto existe
    console.log("-- VERIFICAR SI UN PRODUCTO EXISTE");
    let buscar = prompt("ingrese el nombre del producto que desea mirar si existe");

    if (productos.includes(buscar)) {
        console.log("el producto si existe en la lista");
    }else {
        console.log("el producto no existe en la lista");
    }

    //posicion del producto encontrado 
    let posicionP = productos.indexOf(buscar);
    console.log("la posicion del producto buscado es: "+ posicionP);

    //modificar otro producto indicando su posicion
    productos[4] = "panela";
    console.log("producto de la posicion 4 modificado, pan --> panela");

    //eliminar el ultimo producto
    productos.pop();
    console.log("se elimino el ultimo producto del arreglo");

    //cantidad de productos disponibles y listado final
    console.log("cantidad de productos: "+ productos.length);
    console.log("-- LISTADO FINAL");
    console.log(productos);
}

//EJERCICIO  3

function eliminacionDeElementos() {
    let ciudades = ["bogota", "medellin", "cartagena", "cali", "barranquilla", "ibague"];
    console.log(ciudades);

    //eliminar ultima ciudad
    ciudades.pop();
    console.log("se elimino la ultima ciudad que es ibague");

    console.log(ciudades);

    //eliminar la primera ciudad 
    ciudades.shift();
    console.log("se elimino la primera ciudad que es bogota");

    console.log(ciudades);

    //eliminar elemento tercer indice 
    ciudades.splice(3,1);
    console.log("se elimino el elemento del tercer indice");
    console.log(ciudades);

    //ciudades nuevas 
    ciudades.unshift("neiva");
    ciudades.push("armenia");
    console.log("se agregaron 2 ciudades nuevas que son: "+ ciudades[0] + "y "+ ciudades[4]);

    //total ciudades
    console.log("total de ciudades registradas: "+ ciudades.length);

    //recorrer y mostrar su numero 
    for (let i = 1; i < ciudades.length; i++) {
        console.log(i +". " + ciudades[i]);
    }

    //verificar si una ciudad existe 
    console.log("-- VERIFICAR SI UNA CIUDAD EXISTE");
    let buscar = prompt("ingrese la ciudad que desea verificar si esta registrada");
    
    if (ciudades.includes(buscar)) {
        console.log("la ciudad se encuentra registrada");
    }else {
        console.log("la ciudad no se encuentra registrada");
    }
}

//EJERCICIO 4 

function busquedaDeEstudiantes() {
    let estudiantes =["dylan", "andres", "fabian", "samuel", "duvan", "stiven", "sebastian", "santiago"];
    for (let i = 0; i < estudiantes.length; i++) {
        console.log(estudiantes[i]);
    }

    //solicitar un nombre y mirar si existe y su posicion 
    console.log("-- SOLICITAR UN NOMBRE Y MIRAR SI EXISTE Y SU POSICION");
    let buscar = prompt("ingrese el nombre del estudiante que desea verificar si esta en la lista");
    if (estudiantes.includes(buscar)) {
        console.log("el estudiante: "+ buscar +" si existe en la lista,  posicion: "+ estudiantes.indexOf(buscar));
    }else {
        console.log("el estudiante: "+ buscar +" no existe en la lista");
    }

    //aolicitar un segundo nombre y mirar si existe y su posicion
    console.log("-- SOLICITAR UN SEGUNDO NOMBRE Y MIRAR SI EXISTE Y SU POSICION");
    let buscar2 = prompt("ingrese el nombre del estudiante que desea verificar si esta en la lista");
    if (estudiantes.includes(buscar2)) {
        console.log("el estudiante: "+ buscar2 +" si existe en la lista,  posicion: "+ estudiantes.indexOf(buscar2));
    }else {
        console.log("el estudiante: "+ buscar2 +" no existe en la lista");
    }

    //contar cuantos estudiantes tienen un nombre que comienza por una letra determinada
    let buscarle = prompt("-- INGRESA UNA LETRA PARA CONTAR CUANTOS ESTUDIANTES EMPIEZAN POR LA MISMA LETRA");
    let contador = 0;
    if (buscarle) {
        buscarle = buscarle.toUpperCase();
        for (let i = 0; i < estudiantes.length; i++) {
            if (estudiantes[i].toUpperCase().startsWith(buscarle)) { contador++;
            }
        }
        console.log("numero de estudiantes que empiezan por la letra "+ buscarle +": " +contador);
    }

    //mostrar todos los nombres 
    console.log("-- MOSTRAR TODOS LOS NOMBRES");
    for (let i = 0;  i < estudiantes.length; i++) {
        console.log(estudiantes[i]);
    }

    //agregar un estudiante nuevo si no esta registrado
    console.log("-- AGREGAR UN ESTUDIANTE NUEVO SI NO ESTA REGISTRADO");
    let nuevoEst = prompt("ingrese el nuevo estudiante que desea agregar");

    if (estudiantes.includes(nuevoEst)) {
        console.log("el estudiante ya esta registrado no se puede agregar");
    }else {
        estudiantes.push(nuevoEst);
        console.log("el estudiante se registro correctamente");
    }

    //listado actualizado y cantidad final 
    console.log("-- LISTADO ACTUALIZADO")
    for (let i = 0; i < estudiantes.length; i++) {
        console.log(estudiantes[i]);
    }
    console.log("cantidad total final: " + estudiantes.length);
}

//EJERCICIO 5

function analisisDeNumeros() {
    let numeros = [90, 39, 8, 58, 27, -56, -3, -9, 0, -77];
    let original = numeros.slice();

    //declarar las variables a usar
    let sm = 0;
    let pr = 0; 
    let pares = 0; 
    let impares = 0;
    let my = numeros[0];
    let mn = numeros[2];
    let pst = 0; 
    let ngt = 0;
    let ceros = 0;

    //recorrer utlizando for 
    console.log("-- RECORRER USANDO FOR");
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);

        // suma de los numeros
        sm = sm + numeros[i];

        // pares e impares 
        if (numeros[i] % 2 == 0) {
            pares++;
        }else {
            impares++;
        }

        // numero mayor y menor 
        if (numeros[i] > my){
            my = numeros[i];
        }
        if (numeros[i] < mn) {
            mn = numeros[i];
        }

        // cuantos positivos, negativos y ceros 
        if (numeros[i] > 0) {
            pst++;
        }else if (numeros[i] < 0) {
            ngt++;
        }else {
            ceros++;
        }
    }
    
    // promedio 
    pr = sm / numeros.length;

    //resultado de suma
    console.log("el resultado de la suma es: "+ sm);

    //resultado de promedio 
    console.log("el resultado del promedio es: "+ pr);

    //numeros pares e impares 
    console.log("hay "+ pares +" numeros pares y "+ impares +" numeros impares");

    //mayor y menor 
    console.log("el numero mayor es: "+ my +", y el menor es: "+ mn);

    //positivos, negativos y ceros 
    console.log("hay "+ pst +" numeros positivos, "+ ngt +" numeros negativos y "+ ceros +" numeros iguales a cero");

    //numeros mayores que el promedio
    console.log("numeros mayores que el promedio: ");
    for (let i = 0; i < numeros.length; i++) {
        let contador = 1;
        if (numeros[i] > pr){
            console.log(i +". "+ numeros[i]);
        }
    }

    //verificar si esta un numero en el listado
    console.log("--VERIFICAR SI UN NUMERO ESTA EN LA LISTA O NO");
    let buscarN = parseFloat(prompt("ingrese el numero que desea buscar si esta en la lista"));

    if (numeros.includes(buscarN)){
        console.log("el numero si existe en la lista");
    }else {
        console.log("el numero no existe en la lista");
    }

    //mostrar en orden inverso
    console.log("numeros en orden inverso: "+ numeros.reverse());

    //ordenar de menor a mayor 
    console.log("numeros ordenados de menor a mayor: "+ numeros.sort(function(a, b) {
        return a - b;
    }));

    //arreglo original y despues de las operaciones
    console.log("arreglo original sin ninguna operacion:");
    console.log(original);
    console.log("arreglo despues de realizar las operaciones:");
    console.log(numeros);
}


//EJERCICIO GESTION MATERIAS EDUTRACE
function gestionMaterias() {
    
    //arreglo que almacene al menos ocho elementos relacionados con el contexto
    let materiasEduTrace = ["Matematicas","Fisica","Español","Biologia","Ingles","Sociales","Quimica","Informatica"];
    console.log("Arreglo inicial de materias");

    console.log("MOSTRAR ELEMENTOS Y CONSULTAR POR INDICE");
    // 2. Mostrar todos los elementos registrados y consultar elementos mediante su indice
    console.log("Primera materia (Indice 0):");
    console.log(materiasEduTrace[0]);
    
    console.log("Tercera materia (Indice 2):");
    console.log(materiasEduTrace[2]);

    console.log("CANTIDAD DE ELEMENTOS CON length");
    // 3. Mostrar la cantidad de elementos almacenados utilizando length
    console.log("Total de materias registradas en el plan de estudios:");
    console.log(materiasEduTrace.length);

    console.log("RECORRIDO DEL ARREGLO CON BUCLE FOR");
    // 4. Recorrer el arreglo utilizando un bucle y presentar la informacion de cada elemento
    for (let i = 0; i < materiasEduTrace.length; i++) {
        console.log(`Posicion [${i}]: ${materiasEduTrace[i]}`);
    }

    console.log("AGREGAR NUEVOS ELEMENTOS (push / unshift)");
    // 5. Permitir agregar nuevos elementos al arreglo utilizando push() o unshift()
    materiasEduTrace.push("Etica y Valores");
    materiasEduTrace.unshift("Filosofia");
    console.log("Materias actualizadas tras agregar elementos al inicio y al final:");
    for (let i = 0; i < materiasEduTrace.length; i++) {
        console.log(`Posicion [${i}]: ${materiasEduTrace[i]}`);
    }

    console.log("MODIFICAR UN ELEMENTO EXISTENTE");
    // 6. Modificar un elemento existente indicando su posicion
    console.log("Antes de modificar en el indice 3:");
    console.log(materiasEduTrace[3]);
    
    materiasEduTrace[3] = "Biologia Avanzada";
    
    console.log("Despues de modificar en el indice 3:");
    console.log(materiasEduTrace[3]);

    // 7. Eliminar elementos utilizando pop(), shift() o splice()
    let eliminadoPop = materiasEduTrace.pop();
    console.log("Materia eliminada del final con pop():");
    console.log(eliminadoPop);

    let eliminadoShift = materiasEduTrace.shift();
    console.log("Materia eliminada del inicio con shift():");
    console.log(eliminadoShift);

    let eliminadoSplice = materiasEduTrace.splice(2, 1);
    console.log("Materia eliminada en el indice 2 con splice():");
    console.log(eliminadoSplice[0]);

    // 8. Implementar una busqueda utilizando includes() o indexOf()
    let materiaBuscada = "Fisica";
    let existeMateria = materiasEduTrace.includes(materiaBuscada);
    
    console.log(`¿La materia "${materiaBuscada}" se encuentra registrada?:`);
    console.log(existeMateria);
    
    if (existeMateria) {
        let posicionEncontrada = materiasEduTrace.indexOf(materiaBuscada);
        console.log("Su posicion exacta (indice) es:");
        console.log(posicionEncontrada);
    }

    // 9. Mostrar un listado actualizado despues de realizar las operaciones
    console.log("Listado final de materias activas:");
    for (let i = 0; i < materiasEduTrace.length; i++) {
        console.log(`${i + 1}. ${materiasEduTrace[i]}`);
    }

    // 10. Incorporar al menos dos funcionalidades adicionales que aporten valor
    console.log("Funcionalidad 1 - Cantidad total de materias vigentes:");
    console.log(materiasEduTrace.length);

    console.log("Funcionalidad 2 - Listado ordenado alfabeticamente (sort):");
    let materiasOrdenadas = [...materiasEduTrace].sort();
    for (let i = 0; i < materiasOrdenadas.length; i++) {
        console.log(`- ${materiasOrdenadas[i]}`);
    }
}


//INTRODUCCION A OBJETOS EN JAVASCRIPT

function inventarioProductos() {
    let nombre, marca, precio, cantidad;
    
    nombre = "pc portatil";
    marca = "asus";
    precio = 3000000;
    cantidad = 30;

    let nombre2, marca2, precio2, cantidad2;

    nombre2 = "calular";
    marca2 = "realme 11 pro+ 5g";
    precio2 = 3000000;
    cantidad2 = 20;

    const producto={
        nombre : "pc portatil",
        marca : "asus",
        precio : 3000000,
        cantidad : 30,
    }

    const aprendiz={
        identificacion : 1188964839,
        nombre : "santiago",
        genero : "masculino",
        edad : 17,
        ficha : 3593362,
    }

    console.log(producto);
}

//EJERCICIOS EN CLASE
function gestionarPersona() {
    const persona = {
        nombre: "juanito",
        edad: 27,
        genero: "masculino",
        saludar:function(){
            console.log("hola, soy "+ this.nombre + " y tengo "+ this.edad + " años");
        }
    }
    persona.saludar();
}

function gestionarProducto(){
    const producto = {
        nombre: "teclado",
        precio: 320000,
        cantidad: 30,
        mostrarInfo: function(){
            console.log("producto: "+ this.nombre);
            console.log("precio: "+ this.precio);
            console.log("cantidad: "+ this.cantidad);
        },
        
        mostrarTotal: function(){
            console.log("el valor total del inventario es de: "+ this.precio * this.cantidad);
        },
    }
    producto.mostrarInfo();
    producto.mostrarTotal();
}

function gestionEmpleado() {
    const empleado = {
        nombre: prompt("ingrese su nombre: "),
        cargo: prompt("ingrese su cargo: "),
        salarioMensual: parseFloat(prompt("ingrese el salario mensual: ")),
        diasTrabajados: parseFloat(prompt("ingrese los dias trabajados: ")),
        porcentajeDeDescuento: 0.04,
        calcularSalario: function() {
            let salarioDia = this.salarioMensual/30;
            let salarioSD = this.diasTrabajados*salarioDia;
            return parseInt (salarioSD);
        },

        calcularDescuento: function() {
            let descuento = (this.calcularSalario() * this.porcentajeDeDescuento);
            return parseInt (descuento);
        },
        calcularTotalPagar: function (){
            let totalPagar = this.calcularSalario() - this.calcularDescuento();
            alert("el total a pagar sin decuento es: $"+ this.calcularSalario());
            alert("el total del descuento es de: $"+ this.calcularDescuento());
            alert("el total a pagar es de: $"+ totalPagar); 
        }
    }
    empleado.calcularTotalPagar();
}


// //EJERCICIO 1 OBJETOS

function registroDeUnEstudiante() {

    console.log("-- REGISTRO DE UN ESTUDIANTE");

    const estudiante={
     nombre:"santiago",
     apellido:"vanegas",
     edad:17,
     programaDeFormacion: "analisis y desarrollo de software",
     numeroDeFicha: 3593362,
     correoElectronico: "yojansantiagovan@gmail.com",
    }

    //objeto completo 
    console.log("-- OBJETO COMPLETO");
    console.log(estudiante);

    //consultar nombre y apellido
    console.log("-- CONSULTAR NOMBRE Y APELLIDO");
    console.log("Nombre: "+ estudiante.nombre);
    console.log("Apellido:" + estudiante.apellido);

    //consultar programa de formacion utilizando corchetes 
    console.log("-- CONSULTAR PROGRAMA DE FORMACION USANDO CORCHETES")
    console.log(estudiante["programaDeFormacion"]);

    //modificar edad del estudiante
    console.log("-- MODIFICAR EDAD DEL ESTUDIANTE");
    console.log("edad antes de modificar: " + estudiante.edad);
    estudiante.edad = 30;
    console.log("edad despues de modificar: " + estudiante.edad);

    //agregar ciudad
    console.log("-- AGREGAR UNA CIUDAD");
    estudiante.ciudad = "cali",
    console.log("ciudad agregada: "+ estudiante.ciudad);

    //eliminar correo
    console.log("-- ELIMINAR CORREO");
    delete estudiante.correoElectronico;
    console.log("se elimino el correo del estudiante");

    //recorrer utilizando for...in}
    console.log("-- RECORRER EL OBJETO UTILIZANDO FOR...IN");
    for (let propiedad in estudiante) {
     console.log(propiedad + ": " + estudiante [propiedad]);
    }

    //objeto actualizado 
    console.log("-- OBJETO ACTUALIZADO");
    console.log(estudiante);
}


//EJERCICIO 2 OBJETOS

function registroDeUnProducto() {
    const producto = {
        codigo: 8328,
        nombre: "jugo",
        categoria: "bebidas",
        precio: 30000,
        cantidadDisponible: 27,
        mostrarInformacion: function () {
            console.log("el codigo del producto comprado es: "+ this.codigo);
            console.log("el nombre del producto es: "+ this.nombre);
            console.log("la categoria a la pertenece el producto es: "+ this.categoria);
            console.log("el precio del producto es de: $"+ this.precio);
            console.log("la cantidad disponible del producto es "+ this.cantidadDisponible +" unidades");
        }
    }
    producto.mostrarInformacion();
    let totalInventario = producto.precio * producto.cantidadDisponible;
    console.log("el valor total del inventario es de: $"+ totalInventario);
    producto.precio = 20000;
    console.log("se modifico el precio del producto, paso de $30000 a $"+ producto.precio);
    producto.cantidadDisponible = 18;
    console.log("se actualizo la cantidad disponible, paso de 27 a "+ producto.cantidadDisponible +" unidades");
    producto.marca = "Hit";
    console.log(producto);
}