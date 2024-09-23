// export interface options {
//     mongoUrl:string,
//     dbName:string,
// }

// export class MongoDB {

//     static async conect (option:options) {
//         const {mongoUrl, dbName} = option;
//         try {
//             await mongoose.connect(mongoUrl, {
//                 dbName
//             });

//             return true;
//         } catch (error) {
//             throw new Error('coneccion fallida');
//         }
//     }
// }