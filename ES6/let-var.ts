(() => {
    console.log('let');

    const nombre = 'Javier';

    const getName = () => {
        console.log('viejo getName')
    }
    // function getName() {
    //     console.log('viejo getName')
    // }

    // getName = () => { console.log('Nuevo getName') };

    getName();

})()