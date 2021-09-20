export default class Producto{
    constructor(codigo, nombre, cantidad, costo){
      this.codigo=codigo;
      this.nombre=nombre;
      this.cantidad=cantidad;
      this.costo=costo;
    }
   getCodigo(){
       return this.codigo;
   }
   getNombre(){
       return this.nombre;
   }
   getCantidad(){
       return this.cantidad;
   }
   getCosto(){
       return this.costo;
   }
   getPrecioFinal(){
       return this.costo*this.cantidad;
   }
    infoHtml(){
      return `
                <div>
                    <h3>${this.codigo} - ${this.nombre}</h3>
                    <p> $${this.costo} ${this.cantidad} Precio final=${this.getPrecioFinal()}</p>
                </div>
            `;
    }
    static readForm(){
        let inpCodigo=document.getElementById("txtCodigo");
        let inpNombre=document.getElementById("txtNombre");
        let inpCantidad=document.getElementById("txtCantidad");
        let inpCosto=document.getElementById("txtCosto");
        let codigo=Number(inpCodigo.value);
        let nombre=inpNombre.value;
        let cantidad=Number(inpCantidad.value);
        let costo=Number(inpCosto.value);
        if(codigo&&nombre&&cantidad&&costo){
            inpCodigo.value="";
            inpNombre.value="";
            inpCantidad.value="";
            inpCosto.value=""; 
            return new Producto(codigo, nombre, cantidad, costo);
        }
        return null;
    }
  }