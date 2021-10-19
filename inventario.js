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
    let find = this.buscar(producto.getCodigo());
    if (pos > this.contar|| find != null) {
      return null;
    }
    if(pos!=1){
      let temp=this.inicio;
        for(let i=1;i<pos-1;i++){
            temp =temp.siguiente;
      }
      producto.siguiente=temp.siguiente;
      temp.siguiente=producto
      return producto
    }
    producto.siguiente=this.inicio;
    this.inicio=producto
    return producto
  }
  list(){
    if (!this.inicio)
      return '';
    else
      return this._listarRec(this.inicio);
  }
  _listarRec(n){
    if (n.siguiente==null)
      return n.infoHtml();
    else
      return n.infoHtml() + '\n' + this._listarRec(n.siguiente);
  }        
  inverseList(){
    if (!this.inicio)
      return '';
    else
      return this._listarRecInverso(this.inicio);
  }
  _listarRecInverso(n){
    if (n.siguiente==null)
      return n.infoHtml();
    else
      return   this._listarRecInverso(n.siguiente) + n.infoHtml() ;
  }  
  
  

  contar(){
    let resultado=0;
          if (!this.inicio)
            return 0;
          let temp=this.inicio;
          while(temp!=null){
           resultado++
            temp=temp.siguiente;
          }
          return resultado;
}
}
