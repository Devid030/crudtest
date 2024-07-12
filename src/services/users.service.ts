
// import UserRepository  from "@/src/database/repositories/user.repositories";
// import { UserCreationRepoParams, UserUpdateRepoParams } from "@/src/database/repositories/types/user-repository.type";

// class UserService {
//     async getUserById(userId: string) {
//         try {
//             const updateUser = await UserRepository.findById(userId);
//             return updateUser;
//         } catch (error) {
//             throw error;
//         }
//     }
 
//     async createNewUser(userInfo: UserCreationRepoParams) {
//         try {
//             const newUser = await UserRepository.create(userInfo);
//             return newUser;
//         } catch (error) {
//             throw error;
//         }
//     }

//     async updateUser(userInfo: UserUpdateRepoParams){
//         try {
//             const userUpdate = await UserRepository.updateById(userInfo)
//             return userUpdate;
//         } catch (error) {
//          throw error   
//         }
//     }

//     async deleteUserById(userId: string) {
//         try {
//             await UserRepository.deleteById(userId);
//         } catch (error) {
//             throw error;
//         }
//     }
// }

// export default new UserService();