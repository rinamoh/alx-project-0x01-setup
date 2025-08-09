export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;  // Address with street included
  phone: string;
  website: string;
  company: Company;
}

export interface UserModalProps {
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
  initialUser?: UserProps;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;  // MUST be present
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;  // Address with street included
  phone: string;
  website: string;
  company: Company;
}


export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}



