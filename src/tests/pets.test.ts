import request from 'supertest';
import App from '@/app';
import { PetsController } from '@controllers/pets.controller';
import { Pet } from '@interfaces/pets.interface';
import petModel from '@models/pets.model';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Pets', () => {
  // TODO
});
