import { Tema } from './Tema';
import { User } from './User';

export class Postagem {
  public id: number
  public titulo: string
  public texto: string
  public imagem: string
  public dataHora: Date
  public usuario: User
  public tema: Tema
  public liked: boolean
}
