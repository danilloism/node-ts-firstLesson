import express from 'express';
import { retornarMensagemDoDia } from './mensagemDoDia';

import type { Request, Response } from 'express';

const app = express();
const PORT = 8080;

const data = new Date();
const dia = data.getDate();

const mensagem: string = retornarMensagemDoDia(dia);

app.get('/', (req: Request, res: Response) => {
  return res.json({ mensagem: mensagem });
});

app.listen(PORT, () => {
  console.log(`[server]: running at https://localhost:${PORT}`);
  console.log(`[server]: started at ${data}`);
});
