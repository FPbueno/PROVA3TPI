import Funcionario from "./Funcionario";

export default class Mensalista extends Funcionario{
    faltas:number;
    cargo:string;
    constructor(matricula:number, nome:string, idade:number, email:string, salario:number, faltas:number, cargo:string){
        super(matricula, nome,idade, email, salario);
        this.faltas = faltas;
        this.cargo = cargo;
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
        const salarioBruto = this.salario; 
        const fts = this.calcFaltas(); 
        const inss = this.calcINSS(); 
        return salarioBruto - fts - inss;
    }
    calcINSS(): number {
        const salarioBruto = this.salario; 
        const fts = this.calcFaltas(); 
        const salarioContribuicao = salarioBruto - fts; 
        let inss = 0;

        if (salarioContribuicao <= 1412.00) {
            inss = salarioContribuicao * 0.075;
        } else if (salarioContribuicao <= 2666.68) {
            inss = (1412.00 * 0.075) + ((salarioContribuicao - 1412.00) * 0.09);
        } else if (salarioContribuicao <= 4000.03) {
            inss = (1412.00 * 0.075) + ((2666.68 - 1412.00) * 0.09) + ((salarioContribuicao - 2666.68) * 0.12);
        } else if (salarioContribuicao <= 7786.02) {
            inss = (1412.00 * 0.075) + ((2666.68 - 1412.00) * 0.09) + ((4000.03 - 2666.68) * 0.12) + ((salarioContribuicao - 4000.03) * 0.14);
        } else {
            inss = 908.85; 
        }

        return inss;
    }

    calcFaltas(): number{
        const sb = this.salario;
        const faltas = this.faltas;
        return (sb / 30) * faltas;
    }
}