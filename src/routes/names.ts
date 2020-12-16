import express from 'express';
import nameService from '../services/nameService';
import { Sort } from '../types';

const router = express.Router();

router.get('/', (request, response) => {
  const sort = request.query.sort as Sort;
  response.send(nameService.getNames(sort));
});

router.get('/:name', (request, response) => {
  const result = nameService.findByName(request.params.name);
  if (result) {
    response.send(result);
  } else {
    response.status(404).end();
  }
});

export default router;