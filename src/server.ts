import App from '@/app';
import { IndexController } from '@controllers/index.controller';
import { PetsController } from '@controllers/pets.controller';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([IndexController, PetsController]);
app.listen();
