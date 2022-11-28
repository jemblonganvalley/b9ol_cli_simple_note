import conn from "../prisma/connection.js";

/**
 * Function add note to database need user id
 * @param {number} user_id 
 * @param {string} title 
 * @param {string} body 
 */
export const note_create = async (user_id, title, body)=>{

    const addNote = await conn.notes.create({
        data : {
            user_id : parseInt(user_id),
            title : title,
            body : body
        }
    })

    // jika gagal masukan data 
    if(!addNote){
        return console.error("Terjadi kesalahan")
    }

    console.clear()
    console.log(`
Data berhasil dimasukan..
=========================
title   : ${addNote.title}
body    : ${addNote.body}
=========================
    `)

}

