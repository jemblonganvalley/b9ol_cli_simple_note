import inquirer from "inquirer";
import { note_create } from "../controller/note_controller.js";

const note_view = (user_id)=>{
    console.clear()
    console.log(`
==========================
---    TAMBAH NOTE     --- 
==========================
    `)

    inquirer.prompt([
        {
            name : "title",
            message : "Masukan Judul : "
        },
        {
            name : "body",
            message : "Masukan Text : "
        }
    ])
    .then((ans)=>{
        note_create(user_id, ans.title, ans.body)
    })

}

export default note_view