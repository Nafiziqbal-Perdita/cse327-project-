import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { useState } from "react";
import styles from "./AuthUI.module.css";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";

const AuthUI = ({ InnerComponent }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  const [mode, setMode] = useState("signin");
  const [load, setLoad] = useState(false);

  const { user, forgetPassword, isLoading, signUp, signIn, error, setError } =
    useFirebaseAuth();

  const handleEmailChange = (event) => {
    setError(null);
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setError(null);
    setPassword(event.target.value);
  };

  const handleForgetPassword = async (event) => {
    event.preventDefault();
    setLoad(true);
    await forgetPassword(email);
    setLoad(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (mode === "signup") {
      setLoad(true);

      try {
        await signUp(email, password);

        // Add a delay of 5 seconds (5000 milliseconds) before changing the mode
        setTimeout(() => {
          setMode("signin");
        }, 10000);
      } catch (error) {
        console.log(error);
      }

      setLoad(false);
    } else {
      try {
        await signIn(email, password);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (user && user.emailVerified) {
    console.log("Get Access to the Home page");
    return <InnerComponent user={user} />;
  }

  console.log(user);

  if (load) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div role="status" className="   h-20 w-20 animate-spin ">
          <svg
            className="h-full"
            aria-hidden="true"
            class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">
          {/* <!-- login container --> */}
          <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
            {/* <!-- form --> */}
            <div className="md:w-1/2 px-8 md:px-16">
              <h2 className="font-bold text-2xl text-green-700">
                {mode === "signup" ? "Register" : "LogIn"}
              </h2>
              <p className="text-xs mt-4 text-green-700">
                {mode === "signup"
                  ? " Join our community! Register to access and be a part"
                  : " If you are already a member, Log in"}
              </p>

              <form action="" className="flex flex-col gap-4">
                <input
                  className="p-2 mt-8 rounded-xl border"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <div className="relative">
                  <input
                    className="p-2 rounded-xl border w-full"
                    name="password"
                    placeholder="Password"
                    type={eye ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="gray"
                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 "
                    viewBox="0 0 16 16"
                    onClick={() => {
                      setEye(!eye);
                    }}
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                </div>
                <button
                  className="bg-green-600 rounded-xl text-white py-2 hover:scale-105 duration-300"
                  onClick={handleSubmit}
                >
                  {mode === "signup" ? "Register" : "Login"}
                </button>
              </form>

              {error && (
                <div className="mt-2 text-xs border-green-600 py-4 text-red-600">
                  <a href="#"> {error} </a>
                </div>
              )}

              <div className="mt-2 text-xs border-b border-green-600 py-4 text-green-600">
                <p className="mb-2">
                  {" "}
                  {mode === "signup"
                    ? " After Clicking Register First Verify your account "
                    : ""}{" "}
                </p>

                <a
                  href="#"
                  className=" hover:text-sm hover:text-green-700  "
                  onClick={(e) => {
                    return handleForgetPassword(e);
                  }}
                >
                  Forgot your password?
                </a>
              </div>

              <div className="mt-3 text-xs flex justify-between items-center text-green-600">
                <p>
                  {" "}
                  {mode === "signup"
                    ? "Already have an account? "
                    : "Don't have an account? "}{" "}
                </p>
                <button
                  className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
                  onClick={() =>
                    setMode(mode === "signup" ? "signin" : "signup")
                  }
                >
                  {mode === "signup" ? "Login" : "Register"}
                </button>
              </div>
            </div>

            {/* <!-- image --> */}
            <div className="md:block hidden   w-1/2">
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              />
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default AuthUI;
