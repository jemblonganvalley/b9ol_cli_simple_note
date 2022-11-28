import conn from "../prisma/connection.js";
import note_view from "../views/note.js";

export const user_register = (username, password)=>{
    conn.users.create({
        data : {
            username : username,
            password : password
        }
    })
    .then(res =>{
        console.clear()
        console.log("😍😍😍😍 registrasi berhasil 😍😍😍😍")
    })
    .catch(err =>{
        console.clear()
        console.log("🔥🔥🔥🔥 registrasi gagal 🔥🔥🔥🔥")
    })
}

export const user_login = async (username, password)=>{
    // cari data user berdasarkan parameter username
    const findUser = await conn.users.findUnique({
        where : {
            username : username
        }
    })

    // ketika user tidak ditemukan
    if(!findUser){
        return console.log("Username tidak ditemukan")
    }

    // kita check password
    if(password != findUser.password){
        return console.log("password salah !!")
    }

    note_view(findUser.id)

}
