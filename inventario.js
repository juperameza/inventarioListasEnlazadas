 
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
      for(let i=pos;i<=(this.productos.length-1);i++){
       
        this.productos[i]=this.productos[i+1];
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
    this.productos.push(null)
    for (let i = pos, j=this.productos.length-1; i < this.productos.length-1; i++,j--) {
      this.productos[j]=this.productos[j-1];
    }
    this.productos[pos]=producto
    return this.productos;
  }
  list(){
    let info="";
    this.productos.forEach(i => {
      info+=i.infoHtml();
    });
    return info;
  }
  inverseList(){
    let detalles="";
    for(let i=this.productos.length-1;i>=0;i--){
      const p = this.productos[i];
      detalles+= p.infoHtml();
  }
  return detalles;
}
getLength(){
  return this.productos.length;
}
}
