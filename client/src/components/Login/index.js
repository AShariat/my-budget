import React from "react";
const TwentyFiveOnSides = {
    'margin-left': '35%',
    'margin-right': '35%',
    'width': '30%'
};

function Login() {
    window.scrollTo(0, 0);
    
    return (
        <section class="text-center">
            <form class="form-signin column">
                <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

                <label for="inputEmail" class="sr-only">Email address</label>
                <input style={TwentyFiveOnSides} type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""></input>
                <label for="inputPassword" class="sr-only">Password</label>
                <input style={TwentyFiveOnSides} type="password" id="inputPassword" class="form-control" placeholder="Password" required=""></input>
                <button style={TwentyFiveOnSides}  class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

                <p class="mt-5 mb-3 text-muted">© 2022-2022</p>
            </form>
        </section>
    );
};

export default Login;