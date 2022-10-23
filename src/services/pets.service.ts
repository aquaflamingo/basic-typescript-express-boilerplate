import { HttpException } from '@exceptions/HttpException';
import { Pet } from '@interfaces/pets.interface';
import petModel from '@models/pets.model';
import { isEmpty } from '@utils/util';

class PetService {
  public pets = petModel;
}

export default PetService;
