import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  public create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);

    return user;
  }

  public findById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  public findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  public turnAdmin(receivedUser: User): User {
    const userIndex = this.users.findIndex((user) => user === receivedUser);

    Object.assign(receivedUser, {
      admin: true,
    });

    this.users[userIndex] = receivedUser;

    return receivedUser;
  }

  public list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
