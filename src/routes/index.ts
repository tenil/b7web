import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    // pegar os produtos no BD
    // organizar nas informaçoes
    // envia para o template engine

    res.send('Método GET');
});

router.post('/', (req: Request, res: Response) => {
    res.send('Método POST');
});

router.get('/contato', (req: Request, res: Response) => {
    res.send('Formulário de Contato');
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send('Sobre a empresa');
});

router.get('/noticia/:slug', (req: Request, res: Response) => {
    let slug: string = req.params.slug;
    res.send(`Notícia: ${slug}`);
});

router.get('/voo/:origem-:destino', (req: Request, res: Response) => {
    let { origem, destino } = req.params;
    res.send(`De: ${origem} Para: ${destino}`);
});



export default router;
