export interface ChildrenProps {
  children: JSX.Element;
}

export interface UserType {
  id: string;
  url: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
}

export interface AccountResponse {
  user: UserType;
  access: string;
  refresh: string;
}
