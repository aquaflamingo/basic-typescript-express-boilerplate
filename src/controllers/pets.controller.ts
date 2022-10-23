import { Controller, Param, Body, Get, Post, Put, Delete, HttpCode, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import petsService from '@services/pets.service';
import { validationMiddleware } from '@middlewares/validation.middleware';

@Controller()
export class PetsController {
  public petsService = new petsService();
}
