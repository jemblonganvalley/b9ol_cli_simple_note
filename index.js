import inquirer from "inquirer";
import login_view from "./views/login.js";
import register_view from "./views/register.js";

const play = ()=>{
    console.clear()
    console.log(`
=====================================
S I M P L E - N O T E - A P P - C L I
=====================================
    `)

    inquirer.prompt([
        {
            name : "menu",
            message : "Masukan pilihan : ",
            type : "list",
            choices : ['register', 'login', 'exit']
        }
    ])
    .then((ans)=>{
        switch(ans.menu){
            case "register" :
                return register_view()
                
            case "login" :
                return login_view()

            default : 
                console.log("Terimakasih..")
        }
    })
}

play()

