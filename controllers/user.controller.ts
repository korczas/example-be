import { Container } from 'typedi';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { ResponseService } from '@preciselydata/communicate-shared-lib-node';

import { UserService } from '../services/User.service';
import { FailNotError } from '../FailNotError';
import { validateUserData } from '../validators/user.validator';

export class UserController {
    async getUser(event: APIGatewayProxyEvent) {
        try {
            const userId = event.pathParameters.userId;
            if (!userId) {
                throw new FailNotError('User ID is required');
            }

            const user = await Container.get(UserService).getUser(userId);
            return ResponseService.SUCCESS_RESPONSE(user);
        } catch (error) {
            if (error instanceof FailNotError) {
                return ResponseService.FAIL_RESPONSE({ message: error.message });
            } else {
                return ResponseService.ERROR_RESPONSE(error);
            }
        }
    }

    async updateUser(event: APIGatewayProxyEvent) {
        try {
            const userId = event.pathParameters.userId;
            if (!userId) {
                throw new FailNotError('User ID is required');
            }

            const data = JSON.parse(event.body!);
            if (!validateUserData(data)) {
                throw new FailNotError('Incorrect user data');
            }

            const user = await Container.get(UserService).updateUser(userId, data);
            return ResponseService.SUCCESS_RESPONSE(user);
        } catch (error) {
            if (error instanceof FailNotError) {
                return ResponseService.FAIL_RESPONSE({ message: error.message });
            } else {
                return ResponseService.ERROR_RESPONSE(error);
            }
        }
    }

    async deleteUser(event: APIGatewayProxyEvent) {
        // implementation
    }

    async createUser(event: APIGatewayProxyEvent) {
        // implementation
    }

    async getAllUsers(event: APIGatewayProxyEvent) {
        // implementation
    }
}
