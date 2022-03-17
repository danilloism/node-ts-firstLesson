const dados = require('./dados');

function retornarMensagemDoDia(dia: number) {
  return dados.frases[dia - 1];
}

exports.retornarMensagemDoDia = retornarMensagemDoDia;
