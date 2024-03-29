import { Aluno } from "./aluno";
import { Disciplina } from "./disciplina";

export class Turma {
  constructor(
    public disciplina: Disciplina,
    public ano: number,
    public periodo: number,
    public alunos: Aluno[],
  ){
  }

  public get nome(){
    return `${this.disciplina.codigo}-${this.ano}/${this.periodo}`;
  }

}
