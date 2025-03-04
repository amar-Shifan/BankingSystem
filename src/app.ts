import express from "express";
import path from "path";
import accountRoute from './routes/accountRoute';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname , 'public')));

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));

app.use('/' , accountRoute);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});