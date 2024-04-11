import { Inject, Service } from 'typedi';
import { FailNotError } from '../FailNotError';

@Service()
export class UserService {
    @Inject()
    private UserRepository!: UserRepository;

    async getUser(userId: string) {
        const user = await this.UserRepository.getUser(userId);
        if (!user) {
            throw new FailNotError('User not found');
        }

        return user;
    }

    async updateUser(userId: string, data: any) {
        // update user in database
    }

    async deleteUser(userId: string) {
        // delete user from database
    }

    async createUser(data: any) {
        // create user in database
    }
}
