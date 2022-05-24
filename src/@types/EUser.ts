export interface EUser {
  token: string;
  user: {
    email: string;
    password: string;
    name: string;
  };
}
