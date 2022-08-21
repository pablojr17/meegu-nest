import {
  IsString,
  IsBoolean,
  Length,
  IsDateString,
  IsNotEmpty,
} from 'class-validator';

export class UserDTO {
  @IsString()
  @Length(2, 100)
  name: string;

  @IsDateString('Birthday date is required')
  birthdate: Date;

  @IsString()
  document: string;

  @IsBoolean()
  acceptedTerms: boolean;

  @IsString({ message: 'Please enter a valid zipcode' })
  @IsNotEmpty({ message: 'The zipcode field cannot be empty' })
  @Length(8, 8, { message: 'Please enter a valid zipcode' })
  zipcode: string;

  street: string;
  neighborhood: string;
  city: string;
  state: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}
