import Inventario from "./inventario.js";
import Producto from "./producto.js";
 class App {
    constructor(){
      this._inventory= new Inventario();
      const btnRegister= document.getElementById("btnAdd");
      const  btnBuscar=document.getElementById("btnSearch");
      btnBuscar.addEventListener("click",  this._searchProduct)
      btnRegister.addEventListener("click", this._addProduct)    
    }
    _addProduct=()=>{
      let producto= Producto.readForm();
      if(producto==null){
        document.getElementById("resultado").innerHTML="Error todos los campos son requeridos";
        return;
      }
      let added=this._inventory.agregar(producto);
      if(added==null){
        document.getElementById("resultado").innerHTML="Error producto ya registrado";
        return;
      }
      document.getElementById("resultado").innerHTML=`Agregaste el producto ${producto.infoHtml()}`;
      console.log(this._inventory)
    }
    _searchProduct=()=>{
      let codigo=document.getElementById('txtCodigo').value;
    let buscado=this._inventory.buscar(codigo);
    let detalles=document.getElementById('resultado');
    if (buscado==null)
      detalles.innerHTML = "<h3>No se encontro la codigo buscada</h3>";
    else
      detalles.innerHTML = "<h3>encontramos</h3>" + buscado.infoHtml()
    }
 }
 new App();

  //interacción con el usuario

  
  
  
  