(()=> {
    type Avenger = {
        name: string,
        weapon: string
    }


    const ironman: Avenger = {
        name: 'Tony Stark',
        weapon: 'Armorsuit'
    }
    const capAmerica: Avenger = {
        name: 'Capitán America',
        weapon: 'Shield'
    }
    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ironman, thor, capAmerica];

    for (const avenger of avengers) {
        console.log(avenger);
    }

})()