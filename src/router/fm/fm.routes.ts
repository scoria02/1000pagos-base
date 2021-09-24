import { Router } from 'express';
import {
	fm_valid_client,
	valid_existin_client,
	fm_create_commerce,
	FM_create,
} from '../../controllers/FM_request/index';
import { validExistingClient, validClientData } from '../../Middlewares/data/auth';
import { validCommerceData } from '../../Middlewares/data/commerce';
import { validFmData } from '../../Middlewares/data/fm';
import { getFm } from '../../controllers/FM_request/index';

const FM: Router = Router();

// RC
//
FM.route('/FM/client').post(validClientData, fm_valid_client);
//
FM.route('/FM/:id/commerce').post(validCommerceData, fm_create_commerce);
//
FM.route('/FM').post(validFmData, FM_create);
//
FM.route('/FM/client/valid').post(validExistingClient, valid_existin_client);
//
// entregar data GET
//
FM.route('/FM').get(getFm);

export default FM;