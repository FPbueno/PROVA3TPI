// import Mensalista from "./Mensalista"
// import Horista from "./Horista"
// const mens = new Mensalista(1, "Fulano", 18, "fulano@adm.xpto.tec.br",1412,1,"Estagiário");
// console.log("<< MENSALISTA >>");
// console.log("Matricula: ",mens.matricula);
// console.log("Nome: ",mens.nome);
// console.log("e-Mail: ",mens.email," - ", mens.validaEmail()?"Válido":"Inválido");
// console.log("Idade: ",mens.idade);
// console.log("Cargo: ",mens.cargo);
// console.log("(+) Salário Mês: ",mens.salario.toLocaleString('pt-BR', { style: 'currency', currency:
// 'BRL' }));
// console.log("(-) Falta(s) ",mens.faltas,"dia(s): ",mens.calcFaltas().toLocaleString('pt-BR', { style:
// 'currency', currency: 'BRL' }));
// console.log("(-) INSS: ",mens.calcINSS().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'
// }));
// console.log("(=) Salário Líquido: ",mens.calcSalario().toLocaleString('pt-BR', { style: 'currency',
// currency: 'BRL' }));
// const hor = new Horista(15, "Cicrano", 30, "cicrano@gmail.com",50,100,"Técnico Redes");
// console.log("<< HORISTA >>");
// console.log("Matricula: ",hor.matricula);
// console.log("Nome: ",hor.nome);
// console.log("e-Mail: ",hor.email," - ", hor.validaEmail()?"Válido":"Inválido");
// console.log("Idade: ",hor.idade);
// console.log("Função: ",hor.funcao);
// console.log("Quantidades Horas Trabalhadas no mês: ",hor.horas);
// console.log("Valor Hora: ",hor.salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'
// }));

// console.log("(+) Salário Bruto: ",hor.calcSalarioBruto().toLocaleString('pt-BR', { style: 'currency',
//     currency: 'BRL' }));
//     console.log("(+) Descanso Semanal Remunerado: ",hor.calcDsr().toLocaleString('pt-BR', { style:
//     'currency', currency: 'BRL' }));
//     console.log("(=) Salário Mês: ",(hor.calcSalarioBruto()+hor.calcDsr()).toLocaleString('pt-BR', { style:
//     'currency', currency: 'BRL' }));
//     console.log("(-) INSS: ",hor.calcINSS().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'
//     }));
//     console.log("(=) Salário Líquido: ",hor.calcSalario().toLocaleString('pt-BR', { style: 'currency',
//     currency: 'BRL' }));
    

import Mensalista from "./Mensalista";
import Horista from "./Horista";
const mens = new Mensalista(1, "Fulano", 18, "fulano@adm.xpto.tec.br",1412,1,"Estagiário");
console.log("<< MENSALISTA >>");
console.log("Matricula: ",mens.matricula);
console.log("Nome: ",mens.nome);
console.log("e-Mail: ",mens.email," - ", mens.validaEmail()?"Válido":"Inválido");
console.log("Idade: ",mens.idade);
console.log("Cargo: ",mens.cargo);
console.log("(+) Salário Mês: ",mens.salario.toLocaleString('pt-BR', { style: 'currency', currency:
'BRL' }));
console.log("(-) Falta(s) ",mens.faltas,"dia(s): ",mens.calcFaltas().toLocaleString('pt-BR', { style:
'currency', currency: 'BRL' }));
console.log("(-) INSS: ",mens.calcINSS().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'
}));
console.log("(=) Salário Líquido: ",mens.calcSalario().toLocaleString('pt-BR', { style: 'currency',
currency: 'BRL' }));
const hor = new Horista(15, "Cicrano", 30, "cicrano@gmail.com",50,100,"Técnico Redes");
console.log("<< HORISTA >>");
console.log("Matricula: ",hor.matricula);
console.log("Nome: ",hor.nome);
console.log("e-Mail: ",hor.email," - ", hor.validaEmail()?"Válido":"Inválido");
console.log("Idade: ",hor.idade);
console.log("Função: ",hor.funcao);
console.log("Quantidades Horas Trabalhadas no mês: ",hor.horas);
console.log("Valor Hora: ",hor.salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'
}));
console.log("(+) Salário Bruto: ",hor.calcSalarioBruto().toLocaleString('pt-BR', { style: 'currency',
    currency: 'BRL' }));
    console.log("(+) Descanso Semanal Remunerado: ",hor.calcDsr().toLocaleString('pt-BR', { style:
    'currency', currency: 'BRL' }));
    console.log("(=) Salário Mês: ",(hor.calcSalarioBruto()+hor.calcDsr()).toLocaleString('pt-BR', { style:
    'currency', currency: 'BRL' }));
    console.log("(-) INSS: ",hor.calcINSS().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'
    }));
    console.log("(=) Salário Líquido: ",hor.calcSalario().toLocaleString('pt-BR', { style: 'currency',
    currency: 'BRL' }));