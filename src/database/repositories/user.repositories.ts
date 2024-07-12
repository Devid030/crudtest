// import UserModel from '@/src/database/models/user.model';
// import { UserCreationRepoParams, UserUpdateRepoParams } from '@/src/database/repositories/types/user-repository.type';

// class UserRepository {

//     // find all user
//    public async getAllUsers(){
//     return UserModel.find();
//    }
   
//    async findById(userId: string) {
//     try {
//       const result = await UserModel.findById(userId);

//       if (!result) {
//         throw new Error
//       }

//       return result;
//     } catch (error) {
//       console.error(`UserRepository - findById() method error: `, (error as {}))
//       throw error
//     }
//   }
//    // create user POST 
//      async create(newInfo: UserCreationRepoParams){
//     try {
//         const newUser = await UserModel.create(newInfo);
//         return newUser
//     } catch (error) {
//         console.error(`Error create user: `, error);
//         throw new Error('Failed to create user');
//     }
//    }

//    async updateById(updateInfo: UserUpdateRepoParams) {
//     try {
//       const { id, ...newUpdateInfo } = updateInfo
//       const result = await UserModel.findByIdAndUpdate(id, newUpdateInfo, { new: true });

//       if (!result) {
//         throw new Error
//       }

//       return result;
//     } catch (error) {
//       console.error(`UserRepository - updateById() method error: `, (error as {}))
//       throw error
//     }
//   }

//   async deleteById(userId: string) {
//     try {
//       const result = await UserModel.findByIdAndDelete(userId);

//       if (!result) {
//         throw new Error
//       }
//     } catch (error) {
//       console.error(`UserRepository - updateById() method error: `,(error as {}))
//       throw error
//     }
//   }

// }
// export default new UserRepository();