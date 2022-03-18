import { frases } from './dados';

export function retornarMensagemDoDia(dia: number): string {
  return frases[dia - 1];
}
