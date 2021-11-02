import express from 'express';
import fileUpload from 'express-fileupload';

import indexRoutes from './routes/index.routes';
import imagesRoutes from './routes/images.routes';
import pressureRoutes from './routes/pressure.routes';

import './database'

const app = express()
const cors = require('cors')
app.use(cors({
    origin:'*'
}));

app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.set('port', process.env.PORT || 4000); //Si hay una variable de entorno usela, sino use la 4000

app.use(fileUpload({
    tempFileDir: '/temp'
}))
app.use(indexRoutes);
app.use(imagesRoutes);
app.use(pressureRoutes);

app.listen(app.get('port')); //Servidor ejecutandose
console.log('Server on port: ', app.get('port'));