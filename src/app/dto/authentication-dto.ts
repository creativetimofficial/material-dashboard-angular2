import {UserDTO} from './user-dto';

export class AuthenticationDto {
  public token: string;
  // tslint:disable-next-line:variable-name
  public user: UserDTO;
}
