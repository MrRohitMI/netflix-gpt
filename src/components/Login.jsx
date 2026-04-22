import React, { useRef, useState } from "react";
import Header from "./Header";
import BackgroundImage from "../assets/BackgroundNetflix.jpg";
import { validateData } from "./utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utils/firebase";
import userLogo from "../assets/user_profile_logo.png";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm((prev) => !prev);
  };
  const handleValidateForm = () => {
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: userLogo,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BackgroundImage}
          alt="bg_image"
          className="h-screen w-screen object-cover"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="bg-black w-11/12 md:w-8/12 lg:w-3/12 my-25 lg:my-49 mx-auto right-0 left-0 absolute p-12 rounded-lg opacity-85"
      >
        <h1 className="text-white text-3xl my-4 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            ref={name}
            type="text"
            placeholder="Enter Full Name"
            className="p-4 my-2 bg-gray-500 rounded w-full"
          />
        ) : (
          ""
        )}
        <input
          ref={email}
          type="email"
          placeholder="Enter Email"
          className="p-4 my-2 bg-gray-500 rounded w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          name=""
          id=""
          className="p-4 my-2 bg-gray-500 rounded w-full"
        />
        <p className="font-bold text-red-600 my-2">{errorMessage}</p>
        <button
          onClick={handleValidateForm}
          type="submit"
          className="p-4 mt-2 bg-red-700 w-full rounded-lg text-white font-bold text-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={toggleSignInForm}
          className="text-white mt-18 font-bold cursor-pointer"
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered ? Please Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
