const horaIngresoPermitida = new Date('2024-10-25T09:00:00'); 

const participantes = [
    { nombre: "Juan", horaLlegada: new Date('2024-10-25T09:05:00'), puntaje: 100 },
    { nombre: "Ana", horaLlegada: new Date('2024-10-25T08:55:00'), puntaje: 100 },
    { nombre: "Luis", horaLlegada: new Date('2024-10-25T09:10:00'), puntaje: 100 },
    { nombre: "Maria", horaLlegada: new Date('2024-10-25T08:59:00'), puntaje: 100 }
];

let totalAsistentes = 0;
let totalTarde = 0;

function registrarAsistencia() {
    participantes.forEach(participante => {
        totalAsistentes++;

        if (participante.horaLlegada > horaIngresoPermitida) {
            participante.puntaje *= 0.5; 
            participante.llegoTarde = true;
            totalTarde++;
        } else {
            participante.llegoTarde = false;
        }
    });
}

function mostrarResumenAsistencia() {
    console.log("Resumen de Asistencia:");
    console.log(`Total de Asistentes: ${totalAsistentes}`);
    console.log(`Total Llegaron Tarde: ${totalTarde}`);
    console.log("Detalles de cada participante:");

    participantes.forEach(participante => {
        console.log(`Nombre: ${participante.nombre}`);
        console.log(`Hora de Llegada: ${participante.horaLlegada.toLocaleTimeString()}`);
        console.log(`Puntaje Final: ${participante.puntaje}`);
        console.log(`Llegó Tarde: ${participante.llegoTarde ? "Sí" : "No"}`);
        console.log("-----");
    });
}

registrarAsistencia();
mostrarResumenAsistencia();