export class Usuario {
    public id;
    public nombre;
    public celular;
    public clave;
    public saldo;  


    setValues(data: any){
        this.id = data.id
        this.nombre = data.nombreCompleto;
        this.clave = data.cedula;
        this.celular = data.celular;
        this.saldo = data.saldo;
    }
}
