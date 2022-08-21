import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserDTO } from './user.dto';
import { checkAge } from 'src/Utils/checkAge';
import { ViacepService } from 'src/services/viacep';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private viacep: ViacepService) {}

  async create(userData: UserDTO) {
    const { zipcode, birthdate } = userData;
    checkAge(birthdate);
    const cep = await this.viacep.getCep(zipcode);

    const user = await this.prisma.user.create({
      data: {
        ...userData,
        birthdate: userData.birthdate,
        street: cep.logradouro,
        neighborhood: cep.bairro,
        city: cep.localidade,
        state: cep.uf,
      },
    });

    return user;
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userExists) throw new Error('User does not exists!');

    return this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, data: UserDTO) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userExists) throw new Error('User does not exists!');

    return await this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: number) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userExists) throw new Error('User does not exists!');

    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
