// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(mailaddress) {
    const at = mailaddress.indexOf('@');
    const domain = mailaddress.substring(at + 1);

    return domain;
}

const result1 = getEmailDomain("n.eeken@novi-education.nl");
const result2 = getEmailDomain("t.mellink@novi.nl");
const result3 = getEmailDomain("a.wiersma@outlook.com");

console.log(result1);
console.log(result2);
console.log(result3);




/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(mailaddress) {
    const at = mailaddress.indexOf('@');
    const domain = mailaddress.substring(at + 1);
    console.log(domain);

    if (domain === "novi-education.nl") {
        return "Student";
    } else if (domain === "novi.nl") {
        return "Medewerker";
    } else {
        return "Extern";

    }
}


const result4 = typeOfEmail("n.eeken@novi-education.nl");
const result5 = typeOfEmail("t.mellink@novi.nl");
const result6 = typeOfEmail("novi.nlaapjes@outlook.com");
const result7 = typeOfEmail("a.wiersma@outlook.com");

console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in


function checkEmailValidity(mailaddress) {
    const hasAtSign = mailaddress.includes('@');
    const hasComma = mailaddress.includes(',');
    const hasEndDot = mailaddress.lastIndexOf('.');
    const hasNoEndDot = hasEndDot !== mailaddress.length -1;

    if (hasAtSign && !hasComma && hasNoEndDot) {
        return true;
    } else {
        return false;
    }
}


const result8 = checkEmailValidity("n.eeken@novi.nl");
const result9 = checkEmailValidity("tessmellink@novi.nl");
const result10 = checkEmailValidity("n.eekenanovi.nl");
const result11 = checkEmailValidity("n.eeken@novinl.");
const result12 = checkEmailValidity("tessmellink@novi,nl");

console.log(result8);
console.log(result9);
console.log(result10);
console.log(result11);
console.log(result12);


