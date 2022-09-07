
class Banco{
    constructor({
        identificacion,
        saldo
    })
    {
        this.identificacion=identificacion
        this.saldo=saldo
    }
    abonar({cantidad})
    {
    
        this.saldo=this.saldo+cantidad
    
    }
    retirar({cantidad}){
        this.saldo=this.saldo-cantidad
    
    }
    transferencia({user,cantidad}){
        user.saldo=user.saldo+cantidad
    }
    consultarSaldo(){
        return this.saldo
    }
}

module.exports ={
    Banco
}