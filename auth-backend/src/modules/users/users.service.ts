import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  private users: User[] = []; // Mock database

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email);
    return user || null;
  }

  async create(user: Omit<User, 'id'>): Promise<User> {
    const newUser: User = { id: Date.now(), ...user }; // Generate unique ID
    this.users.push(newUser);
    return newUser;
  }
}
