import Funcionario from "./Funcionario";

export default class Horista extends Funcionario {
    horas:number;
    funcao:string;
    constructor(matricula:number, nome:string, idade:number, email:string, salario:number, horas:number, funcao:string){
        super(matricula,nome,idade,email,salario);
        this.horas = horas;
        this.funcao = funcao
        if (!this.validaEmail()) {
            console.log("E-mail inválido!");
        }
    }
    validaEmail(): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.email)) {
            return false;
        }

        const domainRegex = /@(adm|dev|vendas)\.xpto\.tec\.br$/;
        if (!domainRegex.test(this.email)) {
            return false;
        }
        return true;
    }

    calcSalario(): number {
        const sb = this.calcSalarioBruto();
        const dsr = this.calcDsr();
        const inss = this.calcINSS();
        return sb + dsr - inss;
    }
    calcINSS(): number {
        const salarioBruto = this.calcSalarioBruto(); 
        const dsr = this.calcDsr();
        const salarioContribuicao = salarioBruto + dsr; 

        let inss = 0;

        if (salarioContribuicao <= 1412.00) {
            inss = salarioContribuicao * 0.075;
        } else if (salarioContribuicao > 1421.01 && salarioContribuicao <= 2666.68) {
            inss = salarioContribuicao * 0.09;
        } else if (salarioContribuicao > 2666.69 && salarioContribuicao <= 4000.03) {
            inss = salarioContribuicao * 0.12;
        } else if (salarioContribuicao > 4000.04 && salarioContribuicao <= 7786.02) {
            inss = salarioContribuicao* 0.14 ;
        } else {
            inss = 908.85; 
        }

        return inss;
    }

    calcDsr(): number {
        const sb = this.calcSalarioBruto();
        return sb / 25 * 4;
    }

    calcSalarioBruto(): number{
        const sh = this.salario; 
        const horasTrabalhadas = this.horas; 
        return sh * horasTrabalhadas;
    }
}