export default class Inventario {
  constructor() {
    this.inicio = null;
  }
  buscar(codigo){
    let temp=this.inicio;
    while(temp!=null){
      if(temp.codigo==codigo)
        return temp;
      temp=temp.siguiente;
    }
    return null;
  }
  
  agregar(nuevo) {
    if(this.buscar(nuevo.codigo)==null){
      if (this.inicio == null) {
         this.inicio = nuevo;
         return nuevo
      }
    else {
       this._agregar(nuevo, this.inicio);
       return nuevo
     }
    }
    else{
    return null;
  }
  } 

  _agregar(nuevo, nodo) {
    if (nodo.siguiente == null) nodo.siguiente = nuevo;
    
    else this._agregar(nuevo, nodo.siguiente);
  } 


  eliminar(codigo){
    let elim=null;
    if (codigo==this.inicio.codigo){
      elim=this.inicio;
      this.inicio=this.inicio.siguiente;
      elim.siguiente=null;
      return elim;
    }
    let temp=this.inicio;
    while(temp.siguiente != null ){
      if (temp.siguiente.codigo==codigo)
      {
        elim=temp.siguiente;
        temp.siguiente=temp.siguiente.siguiente;
        elim.siguiente=null;
        return elim;
      } else
        temp=temp.siguiente;
    }
    return elim;
  }
  insertar(pos, producto) {
    if (this.productos.length >= 20) {
      return null;
    }
    let find = this.buscar(producto.getCodigo());
    if (pos > this.productos + 1 || find != null) {
      return null;
    }
    this.productos.push(null);
    for (
      let i = pos, j = this.productos.length - 1;
      i < this.productos.length - 1;
      i++, j--
    ) {
      this.productos[j] = this.productos[j - 1];
    }
    this.productos[pos] = producto;
    return this.productos;
  }
  list(){
    let aux=this.inicio;
    let resultado="";
    if(this.inicio==null){
        return "Error";
    }
    else{
    while(aux!=null){
        resultado+=aux.infoHtml();
        aux=aux.siguiente;
    }
    return resultado;
}
}
  inverseList() {
    let detalles = "";
    for (let i = this.productos.length - 1; i >= 0; i--) {
      const p = this.productos[i];
      detalles += p.infoHtml();
    }
    return detalles;
  }
  getLength() {
    return this.productos.length;
  }
}
