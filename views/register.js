import inquirer from "inquirer"
import { user_register } from "../controller/user_controller.js"

const register_view = ()=>{

    console.clear()
    console.log(`
----------------
R E G I S T E R
----------------
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
        user_register(ans.username, ans.password)
    })

}

export default register_view