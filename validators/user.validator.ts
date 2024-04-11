import { User } from '../interfaces/User.interface';

export const validateUserData = (data: User) => {
    if (!data.name) {
        return false;
    }
    if (!data.email) {
        return false;
    }
    if (!data.phone) {
        return false;
    }
    return true;
};
