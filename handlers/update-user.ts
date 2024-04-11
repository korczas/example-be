import {Container} from 'typedi';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { UserController } from '../controllers/user.controller';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const region = process.env.REGION;
    const stage = process.env.STAGE;

    Container.set('REGION', region);
    Container.set('STAGE', stage);

    const controller = new UserController(); // is it correct?

    return controller.updateUser(event);
};
