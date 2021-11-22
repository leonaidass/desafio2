Vue.component('navbar',{
    props:['nombre'],
    template:`<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>`
  }),


Vue.component('tabla',{
    props:["items","estilo"],
    
    template:`
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Edad</th>
            <th scope="col">Foto</th>
            <th scope="col">Estilos</th>
            </tr>
        </thead>
            <tbody>
               
                <tr v-for="(item,i) in items">
                    <th scope="row">{{item.id}}</th>
                    <td >{{item.nombre}}</td>
                    <td >{{item.apellido}}</td>
                    <td>{{item.edad}}</td>
                    <td><img :src=item.foto></td>
                    <td>{{estilo}}</td>
                </tr>
            </tbody>
</table>  
        
    
`
})

var app = new Vue({
    el: '#app',
    data: {
            dark:"table-dark",
            primary:"table-primary",
            datos:[{
                    id:1,
                    nombre:"leonardo",
                    apellido:"esquivel",
                    edad:31,
                    foto:"https://photoprint.com.co/wp-content/uploads/2020/05/pasaporte-alemana8_217x150.jpg"
                    },
                    {   
                        id:2,
                        nombre:"Juan",
                        apellido:"Perez",
                        edad:24,
                        foto:"https://photoprint.com.co/wp-content/uploads/2020/05/documento_217x150.png"
                    },
                    {   
                        id:3,
                        nombre:"Emiliano",
                        apellido:"Gonzalez",
                        edad:40,
                        foto:"https://www.matrixchipichape.com/2018/wp-content/uploads/2019/11/8shengen-233x300.jpg"
                    },
                ]
         }
  })