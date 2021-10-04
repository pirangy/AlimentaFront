import { Postagem } from "./Postagem"

export class Tema {
  public id: number
  public fomeZero: boolean
  public segurancaAlimentar: boolean
  public agriculturaSustentavel: boolean
  public palavraChave: string
  public postagem: Postagem[]
}
