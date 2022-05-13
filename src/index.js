
//ARRAY PRINCIPAL INICIALIZADO

var arrayElementos = [
  {
    titulo: "Babylon A.D",
    pictureUrl: "https://es.web.img3.acsta.net/pictures/15/11/05/10/33/549118.jpg",
    autor: "Mathieu Kassovitz",
    tipo: "pelicula",
    fechaCreacion: "20/09/2008"
  },
  {
    titulo: "V de Vendetta",
    pictureUrl: "https://pics.filmaffinity.com/V_de_Vendetta-296729466-large.jpg",
    autor: "James McTeigue",
    tipo: "pelicula",
    fechaCreacion: "07/04/2006"
  },
  {
    titulo: "Una vida en un año",
    pictureUrl: "https://pics.filmaffinity.com/Toda_una_vida_en_un_a_o-290993779-large.jpg",
    autor: "Mitja Okorn",
    tipo: "pelicula",
    fechaCreacion: "27/11/2020"
  },
  {
    titulo: "El señor de la guerra",
    pictureUrl: "https://pics.filmaffinity.com/El_se_or_de_la_guerra-604520828-large.jpg",
    autor: "Andrew Niccol",
    tipo: "pelicula",
    fechaCreacion: "16/09/2005"
  },
  {
    titulo: "Glass",
    pictureUrl: "https://pics.filmaffinity.com/Glass_Cristal-575981696-large.jpg",
    autor: "M. Night Shyamalan",
    tipo: "pelicula",
    fechaCreacion: "18/01/2019"
  },
  {
    titulo: "DOOM",
    pictureUrl: "https://static.wikia.nocookie.net/doblaje/images/b/b7/Doom2016cover.png/revision/latest?cb=20200320000157&path-prefix=es",
    autor: "id Software LLC",
    tipo: "videojuego",
    fechaCreacion: "13/05/2016"
  },
  {
    titulo: "God of War",
    pictureUrl: "https://s3.gaming-cdn.com/images/products/7325/orig-fallback-v1/god-of-war-pc-juego-steam-cover.jpg",
    autor: " SCE Santa Monica Studio",
    tipo: "videojuego",
    fechaCreacion: "20/04/2018"
  },
  {
    titulo: "Elden Ring",
    pictureUrl: "https://cdn-prod.scalefast.com/public/assets/user/122595/image/1f8c02c3b62c8fd288daa6a680dfd79a.jpg",
    autor: "FromSoftware",
    tipo: "videojuego",
    fechaCreacion: "25/02/2022"
  }, {
    titulo: "Grand theft auto 5",
    pictureUrl: "https://static.wikia.nocookie.net/esgta/images/1/1b/Car%C3%A1tula_GTA_V.jpg/revision/latest?cb=20130402191528",
    autor: "Rockstar Games",
    tipo: "videojuego",
    fechaCreacion: "17/08/2013"
  },
  {
    titulo: "Need for Speed: Carbon",
    pictureUrl: "https://static.wikia.nocookie.net/nfs/images/8/84/NFSCBoxArt.png/revision/latest?cb=20130612100826&path-prefix=es",
    autor: "EA Black Box",
    tipo: "videojuego",
    fechaCreacion: "30/10/2006"
  },
  {
    titulo: "El juego del angel",
    pictureUrl: "https://s1.eestatic.com/2020/06/19/cultura/libros/libros_498960668_154053517_1280x1706.jpg",
    autor: "Carlos Ruiz Zafon",
    tipo: "ebook",
    fechaCreacion: "17/04/2008"
  },
  {
    titulo: "El principe de la niebla",
    pictureUrl: "https://images-na.ssl-images-amazon.com/images/I/81KzqRjOSiL.jpg",
    autor: "Carlos Ruiz Zafon",
    tipo: "ebook",
    fechaCreacion: "01/01/1993"
  },
  {
    titulo: "El codigo da Vinci",
    pictureUrl: "https://m.media-amazon.com/images/I/51WmNPpn5sL._SL500_.jpg",
    autor: "Dan Brown",
    tipo: "ebook",
    fechaCreacion: "18/03/2003"
  },
  {
    titulo: "La brujula dorada",
    pictureUrl: "https://labrujuladorada.com/wp-content/uploads/labrujuladorada-e1492351972104.jpg",
    autor: "Philip Pullman",
    tipo: "ebook",
    fechaCreacion: "05/10/2017"
  },
  {
    titulo: "La sombra del viento",
    pictureUrl: "https://www.popularlibros.com/imagenes.webp_grandes/9788408/978840811231.webp",
    autor: "Carlos Ruiz Zafon",
    tipo: "ebook",
    fechaCreacion: "01/01/2010"
  }
];


//CONSTRUCTOR TARJETAS

function constructorTarjeta(titulo, pictureUrl, autor, tipo, fechaCreacion) {
  this.titulo = titulo;
  this.pictureUrl = pictureUrl;
  this.autor = autor;
  this.tipo = tipo;
  this.fechaCreacion = fechaCreacion;
}


//FUNCION BUSCAR ELEMENTO EN LA LISTA

function buscarElemento() {

  //Creamos array para guardar los elementos encontrados
  var arrayElementosBuscados = [];

  //Obtenemos  valores de los campos
  var valorCajaOpciones = document.getElementById("cajaOpciones").value;
  var valorInputBuscarPorNombre = document.getElementById("inputBuscarPorNombre").value;
  var valorInputBuscarPorFecha = document.getElementById("inputBuscarPorFecha").value;

  //se pasa el nombre a minusculas
  valorInputBuscarPorNombre = valorInputBuscarPorNombre.toLowerCase();

  //Comprobamos todos los posibles casos de busqueda
  if (valorInputBuscarPorNombre != "" && valorInputBuscarPorFecha != "") {
    arrayElementosBuscados = arrayElementos.filter(campo => campo.fechaCreacion === valorInputBuscarPorFecha
      && campo.titulo.toLowerCase() === valorInputBuscarPorNombre);
  }
  else if (valorInputBuscarPorNombre != "" && valorInputBuscarPorFecha == "") {
    arrayElementosBuscados = arrayElementos.filter(campo => campo.titulo.toLowerCase() === valorInputBuscarPorNombre
      && campo.tipo === valorCajaOpciones);
  }
  else if (valorInputBuscarPorNombre == "" && valorInputBuscarPorFecha != "") {
    arrayElementosBuscados = arrayElementos.filter(campo => campo.fechaCreacion === valorInputBuscarPorFecha
      && campo.tipo === valorCajaOpciones);
  }
  else if (valorInputBuscarPorNombre == "" && valorInputBuscarPorFecha == "") {
    arrayElementosBuscados = arrayElementos.filter(campo => campo.tipo === valorCajaOpciones);
  }

  //Comprobamos que el array de elementos no esta vacio
  if (arrayElementosBuscados.length === 0) {
    window.alert("No se ha encontrado ningun archivo con esa busqueda");
  }
  else {
    //Limpiamos campos de busqueda
    document.getElementById("inputBuscarPorNombre").value = "";
    document.getElementById("inputBuscarPorFecha").value = "";
    document.getElementById("cajaOpciones").value = "pelicula";

    //Creamos las tarjetas encontradas
    crearTarjetas(arrayElementosBuscados);

  }
}


//FUNCION COMPROBAR QUE EL TITULO NO SE REPITA EN EL ARRAY

function comprobarSiExisteArchivo(nombre_archivo, tipo_archivo) {
  //Creamos un array para guardar el resultado
  var arrayElementosRepetidos;

  //Convertimos el nombre del archivo a minusculas para proveer posibles errores
  var nombre_archivo = nombre_archivo.toLowerCase();

  //Buscamos una coincidencia en el array principal
  arrayElementosRepetidos = arrayElementos.filter(campo => campo.tipo === tipo_archivo
    && campo.titulo.toLowerCase() === nombre_archivo);

  if (arrayElementosRepetidos.length === 0) {
    return false;
  }
  else {
    return true;
  }
}


//FUNCION ANADIR ELEMENTO

function anadirElemento() {
  //Obtenemos valores de los campos
  var tituloElementoAnadir = document.getElementById("tituloElemento").value;
  var imagenElementoAnadir = document.getElementById("imagenElemento").value;
  var autorElementoAnadir = document.getElementById("autorElemento").value;
  var tipoElemento = document.getElementById("cajaOpcionesAnadir").value;

  if (tituloElementoAnadir === "") {
    window.alert("El campo titulo no puede estar vacio");
  }
  else if (imagenElementoAnadir === "") {
    window.alert("Debe añadir un enlace a una imagen");
  }
  else if (comprobarSiExisteArchivo(tituloElementoAnadir, tipoElemento) === true) {
    window.alert("El archivo ya existe en la base de datos");
  }
  else {
    //Obtener fecha del sistema
    let fechaCreacion = new Date().toLocaleDateString('en-GB');

    //Creamos el nuevo objeto
    var nuevaTarjeta = new constructorTarjeta(tituloElementoAnadir, imagenElementoAnadir,
      autorElementoAnadir, tipoElemento, fechaCreacion);

    //Añadimos el nuevo objeto al array
    arrayElementos.push(nuevaTarjeta);

    //Limpiamos campos 
    document.getElementById("tituloElemento").value = "";
    document.getElementById("imagenElemento").value = "";
    document.getElementById("autorElemento").value = "";

    //crearTarjetas(arrayElementosDos);
    crearTarjetas(arrayElementos);

  }//fin else titulo - imagen
}


//FUNCION BORRAR ELEMENTO

function funcionBorrado(titulo) {
  //Comprobacion seguro de borrado
  var borradoSeguro = window.confirm("Esta apunto de borrar un elemento. ¿Desea seguir el proceso?");

  //Si desea borrar
  if (borradoSeguro === true) {
    //Obtenemos el indice
    var indexElement = arrayElementos.findIndex(object => {
      return object.titulo === titulo
    });

    //Eliminamos elemento
    if (indexElement != -1) {
      arrayElementos.splice(indexElement, 1);

      //Creamos la lista completa sin el elemento borrado
      crearTarjetas(arrayElementos);

    }
    else {
      alert("Se ha producido un fallo en el borrado");
    }
  }
};


//FUNCION MODIFICADO TARJETAS

function funcionEditado(titulo) {

  //Obtenemos el indice
  var indexElement = arrayElementos.findIndex(object => {
    return object.titulo === titulo
  });

  window.alert("Si deja cualquier campo vacio, no se modificara");

  //Obtenemos el nuevo titulo  
  var nuevo_titulo = prompt('Introduce el nuevo titulo');

  //Obtenemos la nueva imagen 
  var nueva_imagen = prompt('Introduce la url de la nueva imagen');

  //Obtenemos el nuevo tipo

  var nuevo_tipo = prompt('Introduce el nuevo tipo, solo se aceptan ("pelicula","videojuego","ebook")');

  nuevo_tipo = nuevo_tipo.toLowerCase();
  //console.log(nuevo_titulo + " - " + nueva_imagen);

  //Se comprueba que el archivo no exista ya en la base de datos
  if (comprobarSiExisteArchivo(nuevo_titulo.toLowerCase(), nuevo_tipo) === true) {
    window.alert("El archivo ya existe en la base de datos");
  }
  else {
    //Se procede al cambio de datos
    if (indexElement != -1) {
      //Si el nuevo titulo no esta vacio, se sustituye
      if (nuevo_titulo != "") {
        arrayElementos[indexElement].titulo = nuevo_titulo;
      }

      //Si la nueva imagen no esta vacia, se sustituye
      if (nueva_imagen != "") {
        arrayElementos[indexElement].pictureUrl = nueva_imagen;
      }

      //Si el nuevo tipo es correcto, se modifica
      if (nuevo_tipo === "pelicula" || nuevo_tipo === "videojuego" || nuevo_tipo === "ebook") {
        arrayElementos[indexElement].tipo = nuevo_tipo;
      }

      //Se procede a crear las tarjetas
      crearTarjetas(arrayElementos);
    }
  }
}


//FUNCION RESTAURAR TARJETAS 

function volverAInicio() {
  crearTarjetas(arrayElementos);
}


//FUNCION CREACION TARJETAS

function crearTarjetas(arrayTarjetas) {
  var htmlCode = "";
  var i = 0;
  arrayTarjetas.forEach(function (elementoUnicoArray) {

    htmlCode =
      htmlCode +
      `
    <article>
      <div class="card-text">
      <h3 id="titulo" >${elementoUnicoArray.titulo}</h3>
      <img src="${elementoUnicoArray.pictureUrl}">
      </div>
      <div>
      <p id="cardBodyText" >Autor: ${elementoUnicoArray.autor}</p>
      <p id="cardBodyText" >Tipo: ${elementoUnicoArray.tipo}</p>
      <p id="cardBodyText" >Fecha creacion: ${elementoUnicoArray.fechaCreacion}</p>
      </div>
      <button type="button" id="botonTarjetaBorrar" onclick="funcionBorrado( '${elementoUnicoArray.titulo}' )"> Borrar </button>
      <button type="button" id="botonTarjetaEditar" onclick="funcionEditado( '${elementoUnicoArray.titulo}' )"> Editar </button>
    </article>
  `;
    i++;
  });

  var fichasTodos = document.querySelector(".inventarioCompleto");

  fichasTodos.innerHTML = htmlCode;
};

crearTarjetas(arrayElementos);





