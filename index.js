const {Usuario}= require('./modulos/usuario')
const  {Banco} = require('./modulos/banco')



const jair = new Usuario(
    {
        id:1,
        nombre:"jair",
        pass:"1234"
    }
)

const banco_Azteca =new Banco(
    {
        identificacion: jair,
        saldo:5000
    }
)

//*Abonar
/*
banco_Azteca.abonar({
    cantidad:500
})

console.log(banco_Azteca.consultarSaldo());
*/
//*retirar
/*banco_Azteca.retirar({

    cantidad:1000

})
console.log(banco_Azteca.consultarSaldo());
 */
//*Consultar
/*
console.log(banco_Azteca.consultarSaldo());

*/
//*Transferencia

const juan = new Usuario(
    {
        id:2,
        nombre:"juan",
        pass:"1234juan"
    }
)

const banco_AztecaJuan =new Banco(
    {
        identificacion: juan,
        saldo:2000
    }
)

banco_Azteca.transferencia({
    user:banco_AztecaJuan,
    cantidad:1500

})

console.log(banco_AztecaJuan.consultarSaldo());

