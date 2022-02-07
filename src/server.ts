import express, { Request, Response} from "express";
import path from "path";
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';

const server = express();

let caminho = path.join(__dirname, '../public');
server.use(express.static(caminho));
server.use('/', mainRoutes);
server.use('/painel', painelRoutes);

// Página 404
server.use( (req: Request, res: Response) => {
    res.status(404).send('Página não encontrada.')
} );

server.listen(3000);