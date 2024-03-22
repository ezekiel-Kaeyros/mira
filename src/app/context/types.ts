export type LoginParams = {
  email: string;
  password: string;
  remember?: boolean;
};

export type UserDataType = {
  // message: string;
  // id: number;
  // // email: string;
  // username: string;
  // isActive: boolean;
  // // password: string;
  // // role: number;

  _id: string;
  fullname: string;
  email: string;
  password: string;
  role: number;
  createdAt: string;
  updatedAt: string;
  __v: number;

};

export type AuthValuesType = {
  // loading: boolean;
  // logout: () => void;
  // setUser: (value: UserDataType | null) => void;
  // user: UserDataType | null;
  // setLoading: (value: UserDataType | null) => void;
  // login: (params: LoginParams) => void;

  loading: boolean;
  logout: () => void;
  setUser: (value: UserDataType | undefined) => void;
  user: UserDataType | undefined;
  setLoading: (value: UserDataType | undefined) => void;
  login: (params: UserDataType) => void;
};

export type ErrCallbackType = (err: { [key: string]: string }) => void;
