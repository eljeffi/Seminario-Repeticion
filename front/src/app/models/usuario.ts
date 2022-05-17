export class Usuario {
    public id;
    public nombreCompleto;
    public cedula;
    public celular;


    setValues(data: any){
        this.id = data.id;
        this.nombreCompleto = data.nombreCompleto;
        this.cedula = data.cedula;
        this.celular = data.celular;
        
        
    }
}
