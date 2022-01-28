// Configuración
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};



function updateRecords(records, id, prop, value) {
    if (prop !== "tracks" && value !== "") {
        records[id][prop] = value;
    } else if (prop !== "tracks" && value === "") {
        delete records[id][prop]//?
    }

    if (prop === "tracks") {
        if (!records[id].hasOwnProperty("tracks")) {
            records[id][prop] = [value];
        } else if (prop === "tracks" && value !== "") {
            records[id][prop].push(value)
        }
    }

    if (value === "") {
        delete records[id][prop];
    }
    console.log(records)
}


updateRecords(recordCollection, 5439, 'artist', 'ABBA'); //?
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")//tracks debe tener la cadena Take a Chance on Me como último elemento.
updateRecords(recordCollection, 2548, "artist", "") //'artist' no se debe haber establecido
