import "./styles.css";

import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginForm (){
     {/* Пример работы с onClick() */}
    //  const clickOnme = (event, someAttr) => {
    //     console.log(event)
    //     console.log(someAttr);
    //     console.log("Trigger n button works, button is clicked");
    // };
    // BUTTON_CLICK.addEventListener('clock', clickOnme);

    const loginUser = (event) =>{
        event.preventDefault();
        console.log(event);
        console.log ("user logged in succesfully");
    }
    return (
        <form className="login-form">
            <p className="title">Login form</p>
            <div className="inputs-container">
            <Input
            id="email-id"
            name ="email"
            type = "email"
            placeholder = "Enter your username"
            label ="Email"
            />
            <Input
            id="password-id"
            name = "password"
            type = "password"
            placeholder = "Enter your password"
            label = "Password"
            />
            </div>
            <Button onClick={loginUser} name="Login" type="submit" />
            {/* Пример работы с onClick() */}
            {/* <button onClick={(event)=>clickOnme(event, "Some message")} className="button-click" type="button">Clicl me!!</button> */}
        </form>
    );
};
export default LoginForm;
