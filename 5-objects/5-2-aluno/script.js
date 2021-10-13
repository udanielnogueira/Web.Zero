class Aluno{
    constructor(n,n1,n2){
        this.nome = n;
        this.nota1 = n1;
        this.nota2 = n2;
    }

    calcular(){
        return (this.nota1+this.nota2)/2;
    }

    verificar(){
        if (this.calcular() >= 7)
            return "aprovado";
        else
            return "reprovado";
    }
}