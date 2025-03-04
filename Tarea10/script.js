// TAREA 1: Función para saludar al mundo
function greetWorld() {
    return 'Hello, World!'; // Simplemente devuelve el saludo clásico
}

// TAREA 2: Función para verificar si alguien puede votar
function canIVote(age) {
    return age >= 18; // Si la edad es 18 o más, devuelve true
}
console.log(canIVote(19)); // Prueba: debería imprimir true

// TAREA 3: Función para ver si dos cadenas son iguales
function agreeOrDisagree(str1, str2) {
    if (str1 === str2) {
        return 'You agree!'; // Si son iguales
    } else {
        return 'You disagree!'; // Si son diferentes
    }
}
console.log(agreeOrDisagree("yep", "yep")); // Prueba: debería imprimir 'You agree!'

// TAREA 4: Función para determinar la fase de la vida
function lifePhase(age) {
    if (age < 0 || age > 140) {
        return 'This is not a valid age'; // Edad inválida
    } else if (age <= 3) {
        return 'baby'; // Bebé
    } else if (age <= 12) {
        return 'child'; // Niño
    } else if (age <= 19) {
        return 'teen'; // Adolescente
    } else if (age <= 64) {
        return 'adult'; // Adulto
    } else {
        return 'senior citizen'; // Adulto mayor
    }
}

// TAREA 5: Función para calcular la calificación final
function finalGrade(grade1, grade2, grade3) {
    // Verificar si las calificaciones son válidas
    if (grade1 < 0 || grade1 > 100 || grade2 < 0 || grade2 > 100 || grade3 < 0 || grade3 > 100) {
        return 'Ha ingresado una calificación no válida';
    }
    // Calcular el promedio
    const average = (grade1 + grade2 + grade3) / 3;
    // Determinar la calificación
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

// TAREA 6: Función para reportarse
function reportingForDuty(rank, lastName) {
    return `${rank} ${lastName} reporting for duty!`; // Devuelve el mensaje formateado
}
console.log(reportingForDuty('Private', 'Fido')); // Prueba: debería imprimir 'Private Fido reporting for duty!'

// TAREA 7: Función para simular el lanzamiento de dos dados
const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 6) + 1; // Dado 1
    let die2 = Math.floor(Math.random() * 6) + 1; // Dado 2
    return die1 + die2; // Suma de los dados
};

// TAREA 8: Función para calcular el peso en otro planeta
function calculateWeight(earthWeight, planet) {
    switch (planet) {
        case 'Mercury':
            return earthWeight * 0.378;
        case 'Venus':
            return earthWeight * 0.907;
        case 'Mars':
            return earthWeight * 0.377;
        case 'Jupiter':
            return earthWeight * 2.36;
        case 'Saturn':
            return earthWeight * 0.916;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    }
}
console.log(calculateWeight(100, 'Jupiter')); // Prueba: debería imprimir 236

// TAREA 9: Función para verificar si un valor es truthy o falsy
function truthyOrFalsy(value) {
    return !!value; // Convierte el valor a booleano
}

// TAREA 10: Función para calcular amigos imaginarios
function numImaginaryFriends(totalFriends) {
    return Math.ceil(totalFriends * 0.25); // Redondea hacia arriba
}
console.log(numImaginaryFriends(20)); // Prueba: debería imprimir 5
console.log(numImaginaryFriends(10)); // Prueba: debería imprimir 3

// TAREA 11: Función para crear una oración tonta
function sillySentence(adjective, verb, noun) {
    return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;
}
console.log(sillySentence('excited', 'love', 'functions')); // Prueba: debería imprimir la oración completa

// TAREA 12: Función para calcular la edad en un año específico
function howOld(age, year) {
    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();
    const birthYear = thisYear - age;
    const ageInYear = year - birthYear;

    if (year > thisYear) {
        return `You will be ${ageInYear} in the year ${year}.`;
    } else if (year < birthYear) {
        return `The year ${year} was ${birthYear - year} years before you were born.`;
    } else {
        return `You were ${ageInYear} in the year ${year}.`;
    }
}

// TAREA 13: Función para determinar la relación familiar
const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.';
    }
    if (percentSharedDNA > 34) {
        return 'You are likely parent and child or full siblings.';
    }
    if (percentSharedDNA > 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.';
    }
    if (percentSharedDNA > 5) {
        return 'You are likely 1st cousins.';
    }
    if (percentSharedDNA > 2) {
        return 'You are likely 2nd cousins.';
    }
    if (percentSharedDNA > 0) {
        return 'You are likely 3rd cousins.';
    }
    return 'You are likely not related.';
};
console.log(whatRelation(34)); // Prueba: debería imprimir 'You are likely grandparent and grandchild...'
console.log(whatRelation(3)); // Prueba: debería imprimir 'You are likely 2nd cousins.'

// TAREA 14: Función para calcular la propina
function tipCalculator(quality, total) {
    switch (quality) {
        case 'malo':
            return total * 0.05;
        case 'ok':
            return total * 0.15;
        case 'bueno':
            return total * 0.20;
        case 'excelente':
            return total * 0.30;
        default:
            return total * 0.18;
    }
}
console.log(tipCalculator('bueno', 100)); // Prueba: debería imprimir 20

// TAREA 15: Función para devolver un emoticón
function toEmoticon(emotion) {
    switch (emotion) {
        case 'shrug':
            return '|_{"}_|';
        case 'smiley face':
            return ':)';
        case 'frowny face':
            return ':(';
        case 'winky face':
            return ';)';
        case 'heart':
            return '<3';
        default:
            return '|_(* ~ *)_|';
    }
}


