export type UserDTO = {
  id?: number;
  name: string;
  birthdate: string | Date;
  document: string;
  acceptedTerms: boolean;
  zipcode: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
};
