import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
import "../styles/Header.css";

function SignUpButton() {
  const clerk = useClerk();

  return (
    <button className="sign-up-btn" onClick={() => clerk.openSignUp({})}>
      Sign up
    </button>
  );
}

function SignInButton() {
  const clerk = useClerk();

  return (
    <button className="sign-in-btn" onClick={() => clerk.openSignIn({})}>
      Sign in
    </button>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <SignedOut>
          <ul>
            <li>
              <SignUpButton />
            </li>
            {/* <RedirectToSignIn redirectUrl={window.location.href}/> */}
            <li>
              <SignInButton />
            </li>
          </ul>
        </SignedOut>

        <SignedIn>
          <UserButton appearance={{
            elements: {
              // this didn't work
              // profileSectionPrimaryButton__changeUsername: {
              //       display: "none"
              // },
              userButtonTrigger: {
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
              }
            }
          }} >
          </ UserButton>
        </SignedIn>
      </nav>
    </header>
  );
}

export default Header;
