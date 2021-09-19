 
  export default class Inventario {
    constructor(){
      this.productos=new Array();
    }
    
    eliminar(codigos){
      //eliminarlo y regresar true o false
      
    }
    buscar(codigo){
        for (let i=0;i<this.productos.length;i++){
        if (codigo==this.productos[i].getCodigo()){
            return i;
        }
    }
          
   
    }
    agregar(nuevo){
        let pos = this.buscar(nuevo.getCodigo());
        if(pos>=0){
            return null;
        }
    
        this.productos.push(nuevo);  
        return this.productos;
     
    }
  }
