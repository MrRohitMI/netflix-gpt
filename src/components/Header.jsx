import React, { useEffect } from "react";
import logo from "../assets/Netflix_Logo_PMS.png";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { toggleGptBtn } from "./utils/gptSlice";
import { SUPPORTED_LANG } from "./utils/constants";
import { changeLanguage } from "./utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <>
      <div
        className={`absolute px-4 py-2 z-10 w-full md:flex justify-between 
          items-center ${showGptSearch || !user ? "bg-gradient-to-b from-black" : "bg-black"}`}
      >
        <img src={logo} alt="Logo" className="w-45 m-auto md:ml-0" />
        {user && (
          <div className="flex gap-2 justify-between md:justify-start">
            {showGptSearch && (
              <div>
                <select
                  className="bg-white text-black p-2 rounded mt-1"
                  onChange={handleLanguage}
                >
                  {SUPPORTED_LANG.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.lang}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="mt-1">
              <button
                className="bg-purple-700 p-2 rounded text-white font-bold"
                onClick={() => dispatch(toggleGptBtn())}
              >
                {!showGptSearch ? "Search GPT" : "Home Page"}
              </button>
            </div>
            <img
              src={user.photoURL}
              alt="user logo"
              className="h-12 w-12 hidden md:block"
            />
            <div className="mt-1">
              <button
                className="bg-red-700 p-2 rounded text-white font-bold mr-2"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
