 
  export default class Inventario {
    constructor(){
      this.productos=new Array();
    }
    
  
    buscar(codigo){
        for (let i=0;i<this.productos.length;i++)
            if (codigo==this.productos[i].codigo)
              return this.productos[i];
          return null;
    }
    buscarIndex(codigo){
      for(let i=0; i<this.productos.length; i++){
        if(this.productos[i].codigo == codigo){
           return i;
         }
     }
     return -1;
    }      
   
    
    agregar(nuevo){
      if(this.productos.length>=20){
        return null;
      }
        let pos = this.buscar(nuevo.getCodigo());
        if(pos!=null){
            return null;
        }
    
        this.productos.push(nuevo);  
        return this.productos;
     
    }
    borrar(codigo){
      let pos= this.buscarIndex(codigo);
      for(let i=pos,j=pos+1, z=1;z<=(this.productos.length-1)-pos;i++,j++,z++){
       
        this.productos[i]=this.productos[j];
      }
      this.productos.pop()
     
  }
  insertar(pos,producto){
    if(this.productos.length>=20){
      return null;
    }
    let find = this.buscar(producto.getCodigo());
    if(pos>this.productos+1||find!=null){
      return null;
    }
    this.productos.push(this.productos[this.productos.length-1])
    for (let i = 0, j=this.productos.length-2, z=j-1; i < this.productos.length-(pos+1); i++,j--,z--) {
  this.productos[j]=this.productos[z];
    }
    this.productos[pos]=producto
    return this.productos;
  }
}
