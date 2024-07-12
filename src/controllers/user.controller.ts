// import { Controller, Route, Post, Body, Get, Put,Delete, Path} from 'tsoa';
// import  UserService from '@/src/services/users.service';
// import { IUser } from '@/src/database/models/user.model';
// import { UserCreationRepoParams, UserUpdateRequestParams } from '../database/repositories/types/user-repository.type';

// @Route('/v1/users')
// export class UserController extends Controller {

// @Post()
// public async createUser(@Body() requestBody: UserCreationRepoParams): Promise<IUser> {
//     try {
//         const newUser = await UserService.createNewUser(requestBody);
//         return newUser;
//     } catch (error) {
//         console.error('Error creating user:', error);
//         throw new Error('User creation failed');
//     }
// }

// @Get("{userId}")
// public async getUserById(@Path() userId: string): Promise<IUser>{
//     try {
//         const getUser = await UserService.getUserById(userId);
//         return getUser;
//     } catch (error) {
//         throw error;
//     }
// }

// @Put("{userId}")
// public async updateUserById(
//   @Path() userId: string,
//   @Body() updateUserInfo: UserUpdateRequestParams
// ): Promise<IUser> {
//   try {
//     const newUpdateUserInfo = { id: userId, ...updateUserInfo }
//     const response = await UserService.updateUser(newUpdateUserInfo);
//     return response;
//   } catch (error) {
//     console.error(`UsersController - createUser() method error: `, (error as {}))
//     throw error;
//   }
// }

// @Delete("{userId}")
// public async deleteUserById(@Path() userId: string,): Promise<void> {
//   try {
//     await UserService.deleteUserById(userId);
//   } catch (error) {
//     console.error(`UsersController - deleteUserById() method error: `, (error as {}))
//     throw error;
//   }
// }

// }
      