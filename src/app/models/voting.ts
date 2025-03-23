export interface Voting {
  id: string;
  name: string;
  description: string;
  candidates: string[];
  expirationDate: Date;
  password: string;
  extraData: string[];
  active: boolean;
}
