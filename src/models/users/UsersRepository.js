import usuariosRoutes from '../../routes/usuarios.routes.js';
import User from './User.js';

class UsersRepository {
    constructor() {
        this.users = [];
    }

    getAllUsers() {
        return this.users;
    }
    addUser(name, email, password) {
        const newUser = new User(name, email, password);
        this.users.push(newUser);
        return newUser;
    }
    getUserbyid(id) {
        const user = this.users.find((user) => user.id == id);

        return user
}
}

export default UsersRepository;