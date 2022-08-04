// Una variable que contenga tu altura en centímetros (entero)
let altura_cm = 173;
console.log(altura_cm);
// Una variable que contenga tu altura en metros (número de coma flotante)
let altura_m = 1.73;
console.log(altura_m);
// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso_kg = 6.8;
console.log(peso_kg);
// Una variable que contenga tu altura en metros redondeada hacia arriba
let altura_m_redond_arriba = Math.ceil(altura_m);
console.log(altura_m_redond_arriba);
// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso_kg_redond_abajo = Math.floor(peso_kg);
console.log(peso_kg_redond_abajo);
// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let max_valor_mas_1 = (Number.MAX_VALUE + 1);
let max_valor_js = Number.MAX_VALUE;
let res_max = true;
if(max_valor_mas_1 === max_valor_js) {
    console.log(res_max);
}
