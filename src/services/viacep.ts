import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CEPProps } from 'src/interfaces';

@Injectable()
export class ViacepService {
  constructor(private httpService: HttpService) {}

  async getCep(cep: string): Promise<CEPProps> {
    const { data: cepData, status } = await this.httpService
      .get<Promise<CEPProps>>(`https://viacep.com.br/ws/${cep}/json/`)
      .toPromise();
    if (status !== 200) throw new Error('Please enter a valid zipcode');

    return cepData;
  }
}
