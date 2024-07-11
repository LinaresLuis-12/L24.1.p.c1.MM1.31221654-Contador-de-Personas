document.addEventListener("DOMContentLoaded", function() {
    const personas = [
        { nombre: 'Luisa', sexo: 'F' },
        { nombre: 'Ana', sexo: 'F' },
        { nombre: 'José', sexo: 'M' },
        { nombre: 'Carmen', sexo: 'F' },
        { nombre: 'Rosa', sexo: 'F' },
        { nombre: 'José', sexo: 'M' },
        { nombre: 'María', sexo: 'F' },
        { nombre: 'Luz', sexo: 'F' },
        { nombre: 'Rafael', sexo: 'M' },
        { nombre: 'Liz', sexo: 'F' },
        { nombre: 'Marcos', sexo: 'M' },
        { nombre: 'Leo', sexo: 'M' }
    ];
    let hombres = 0;
    let mujeres = 0;
    personas.forEach(persona => {
        if (persona.sexo === 'M') {
            hombres++;
        } else if (persona.sexo === 'F') {
            mujeres++;
        }
    });
    const totalPersonas = personas.length;
    let salida = document.getElementById("salida");
    salida.innerHTML = "Contador de Personas:";
    salida.innerHTML += `<br>Cantidad de Hombres: ${hombres}`;
    salida.innerHTML += `<br>Cantidad de Mujeres: ${mujeres}`;
    salida.innerHTML += `<br>Cantidad total de personas: ${totalPersonas}`;
});