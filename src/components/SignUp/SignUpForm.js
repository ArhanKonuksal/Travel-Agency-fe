import "../SignUp/SignUpForm.css"

function SignUpForm() {
    return(
        <div className="form-container">
            <h1>Sign Up today to book your dream holiday</h1>
            <form>
                <input placeholder="Name and Surname"/>
                <input placeholder="Email"/>
                <input type="numeric" placeholder="Phone NUmber"/>
                <button>Sign Up</button>

            </form>
        </div>
    )
}
export default SignUpForm;