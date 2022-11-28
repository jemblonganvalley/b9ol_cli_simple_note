import inquirer from "inquirer";
import { user_login } from "../controller/user_controller.js";

const login_view = ()=>{
    console.clear()
    console.log(`
==================
--- L O G I N ---
==================
    `)

    inquirer.prompt([
        {
            name : "username",
            message : "Masukan Username : "
        },
        {
            name : "password",
            message : "Masukan Password : ",
            type : "password"
        }
    ])
    .then((ans)=>{
        user_login(ans.username, ans.password)
    })

}

export default login_view