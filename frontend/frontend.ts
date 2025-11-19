import * as express from "express";
import * as path from "path";

const app = express();
const port: number = 2000;
const backendUrl = "http://backend:3601";

// Настраиваем шаблонизатор
app.set('views', path.join(__dirname));
app.set('view engine', 'jade');

app.get('/', async (req, res) => {
    try {
        const cat_data = await fetch(`${backendUrl}/cat_get`);
        const data = await cat_data.text();
        res.render('index.jade', { title: "KITTY frontend", cat_url: data });
    } catch (error) {
        console.error('Error fetching cat:', error);
        res.render('index.jade', { title: "KITTY frontend", cat_url: '' });
    }
});

app.listen(port, () => {
    console.log(`Frontend app listening on port ${port}`);
});
