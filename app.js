"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Fuerzas;
    (function (Fuerzas) {
        Fuerzas[Fuerzas["flash"] = 5] = "flash";
        Fuerzas[Fuerzas["superman"] = 100] = "superman";
        Fuerzas[Fuerzas["batman"] = 1] = "batman";
        Fuerzas[Fuerzas["acuaman"] = 0] = "acuaman";
    })(Fuerzas || (Fuerzas = {}));
    const fuerzaFlash = Fuerzas.flash;
    const fuerzaSuperman = Fuerzas.superman;
    const fuerzaBatman = Fuerzas.batman;
    const fuerzaAcuaman = Fuerzas.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = String(poder).length;
    console.log(largoDelPoder);
    let enumeracion;
    (function (enumeracion) {
        enumeracion[enumeracion["a"] = 10] = "a";
        enumeracion[enumeracion["b"] = 11] = "b";
        enumeracion[enumeracion["c"] = 9] = "c";
        enumeracion[enumeracion["d"] = 10] = "d";
    })(enumeracion || (enumeracion = {}));
    console.log(enumeracion);
})();
