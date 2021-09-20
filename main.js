import Inventario from "./inventario.js";
import Producto from "./producto.js";
 class App {
    constructor(){
      this._inventory= new Inventario();
      const btnRegister= document.getElementById("btnAdd");
      const  btnBuscar=document.getElementById("btnSearch");
        const  btnEliminar=document.getElementById("btnDelete");
        const  btnListar=document.getElementById("btnList");
        const  btnListarReves=document.getElementById("btnInvList");
        const  btnInsertar=document.getElementById("btnInsert");
        btnEliminar.addEventListener("click",  this._deleteProduct)
        btnInsertar.addEventListener("click",  this._insertProduct)
        btnListarReves.addEventListener("click",  this._inverseListProducts)
        btnListar.addEventListener("click",  this._listProducts)
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
        if(this._inventory.productos.length>=20){
          document.getElementById("resultado").innerHTML="Error maximo 20 productos";
          return
        }
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
    _deleteProduct=()=>{
      let codigo=document.getElementById('txtCodigo').value;
      let buscado=this._inventory.buscar(codigo);
      let detalles=document.getElementById('resultado');
    if (buscado==null)
      detalles.innerHTML = "<h3>El codigo que deseas eliminar no se encuentra</h3>";
    else{
      detalles.innerHTML = "<h3>Eliminaste el producto</h3>" + buscado.infoHtml()
     this._inventory.borrar(codigo);
    }
    
     
    }
    _listProducts=()=>{
      let detalles=document.getElementById('resultado');
      detalles.innerHTML=""
      this._inventory.productos.forEach(p => {
        detalles.innerHTML+= p.infoHtml();
      });
    }
    _inverseListProducts=()=>{
      let detalles=document.getElementById('resultado');
      detalles.innerHTML=""
      for(let i=this._inventory.productos.length-1;i>=0;i--){
        const p = this._inventory.productos[i];
        detalles.innerHTML+= p.infoHtml();
      }
    }
    _insertProduct=()=>{
      let pos=document.getElementById('txtPos').value;
      let producto= Producto.readForm();
      if(producto==null||pos==""){
        document.getElementById("resultado").innerHTML="Error todos los campos son requeridos";
        return;
      }
      pos=Number(pos)
      if(pos>this._inventory.productos.length-1){
        document.getElementById("resultado").innerHTML=`Error posicion fuera de el limite <i>Limite : ${this._inventory.productos.length-1}</i>`;
        return;
      }
      let added=this._inventory.insertar(pos,producto);
      if(added==null){
        if(this._inventory.productos.length>=20){
          document.getElementById("resultado").innerHTML="Error maximo 20 productos";
          return
        }
        document.getElementById("resultado").innerHTML="Error producto ya registrado";
        return;
      }
      document.getElementById("resultado").innerHTML=`Agregaste el producto ${producto.infoHtml()} en la posicion ${pos}`;
      console.log(this._inventory)
    }
 }
 new App();

  //interacción con el usuario

  
  
  
  