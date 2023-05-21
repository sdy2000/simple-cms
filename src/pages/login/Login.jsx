import "./login.css";

export default function Login() {
    return (
        <>
            <div className="login">
                <span className="loginTitle">
                    Login
                </span>
                <form className="loginForm">
                    <label>Email:</label>
                    <input type="email" placeholder="Enter your email..." />
                    <label>Password:</label>
                    <input type="password" placeholder="Enter your Password..." />

                    <button className="loginButton ui blue button">Login</button>
                </form>
                <button className="loginRegisterButton ui green button">Register</button>
            </div>
        </>
    );
};