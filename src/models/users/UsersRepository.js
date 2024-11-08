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

updateUser(id, name, email, password) {
    const user = this.getUserbyid(id);

    if (!user) {
        return null;
    }

    user.name = name;
    user.email = email;
    user.password = password;

    return user;
}

deleteUser(id) {
    const user = this.getUserbyid(id);

    if (!user) {
        return null;
    }

    const index = this.users.indexOf(user);
    this.users.splice(index, 1);

    return user;
}
}
export default UsersRepository;