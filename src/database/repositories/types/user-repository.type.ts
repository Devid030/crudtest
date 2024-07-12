export interface UserCreationRepoParams {
    email: string;
    name: string;
    gender: string;
    age: number;
}

export interface UserUpdateRepoParams {
    id?: string;
    username?: string;
    gender?: string;
    age?: number;
  }

export interface UserUpdateRequestParams {
    name?: string;
    email?: string;
    gender?: string;
    age?: number;
}
