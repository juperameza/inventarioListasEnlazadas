import Inventario from "./inventario.js";
import Producto from "./producto.js";
 class App {
    constructor(){
      this._inventory= new Inventario();
      const btnRegister= document.getElementById("btnAdd");
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
 }
 new App();

  //interacción con el usuario

  
  
  
  