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
  userprofile: number;
}

export interface UserProfileType {
  id: string;
  birth_date?: string;
  location?: string;
  bio?: string
}

export interface AccountResponse {
  user: UserType;
  access: string;
  refresh: string;
}
