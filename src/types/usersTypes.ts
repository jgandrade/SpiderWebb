export interface userInterface {
  uid: string;
  name: string;
  email: string;
}

export type usersTypes = {
  uid: string;
  name: string;
  email: string;
};

export type usersListType = {
  uid: string;
  name: string;
  email: string;
}[];

export interface usersDAOInterface {
  usersList: usersListType;
}
