import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

import { auth, googleAuthProvider, db } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoginSignup() {
  const navigate = useNavigate();

  const [isUser, setIsUser] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const SignUp = () => {
    setIsUser(!isUser);
  };

  const signUpUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: name,
        });
      }
      navigate("/");
      toast.success("registered successfully", {
        position: "bottom-center",
      });
    } catch (err) {
      toast.error(err.message, {
        position: "bottom-center",
      });
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      toast.success("signed in successfully", {
        position: "bottom-center",
      });
    } catch (err) {
      toast.error(err.message, {
        position: "bottom-center",
      });
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      navigate("/");
      toast.success("registered successfully", {
        position: "bottom-center",
      });
    } catch (err) {
      toast.error(err.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="h-[100vh] desktop:h-[initial]">
      <div className="mx-auto max-w-sm grid gap-4">
        <div className="mb-8">
          <div>
            {isUser ? (
              <h1 className="text-3xl font-medium pb-2">Create an account </h1>
            ) : (
              <h1 className="text-3xl font-medium pb-2">Login to Exclusive </h1>
            )}
          </div>
          <span className="text-sm font-normal">Enter your details below</span>
        </div>
        <div>
          <div className="grid gap-6">
            {isUser ? (
              <div className="grid gap-2">
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="border-b-[0.8px] border-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none"
                />
              </div>
            ) : (
              ""
            )}
            <div className="grid gap-2">
              <input
                id="email"
                type="email"
                placeholder="Email or Phone Number"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="border-b-[0.8px] border-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none"
              />
            </div>
            <div className="grid gap-2">
              {/* <div className="flex items-center">
              <NavLink href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </NavLink>
            </div> */}
              <input
                id="password"
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="border-b-[0.8px] border-gray-400 placeholder:font-light placeholder:text-sm  focus:outline-none "
              />
            </div>
            <div>
              {isUser ? (
                <button
                  type="submit"
                  className="w-full bg-buttonColor text-primary text-sm  py-3 rounded-sm"
                  onClick={() => signUpUser()}
                >
                  Sign up
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-buttonColor text-primary text-sm  py-3 rounded-sm"
                  onClick={() => signIn()}
                >
                  Login
                </button>
              )}
            </div>
            <div>
              {isUser ? (
                <button className="w-full border-2 border-gray-400 text-sm  py-1 rounded-sm flex items-center justify-center gap-2">
                  <FcGoogle size={30} /> Sign up with Google
                </button>
              ) : (
                <button
                  className="w-full border-2 border-gray-400 text-sm  py-1 rounded-sm flex items-center justify-center gap-2"
                  onClick={() => signInWithGoogle()}
                >
                  <FcGoogle size={30} /> Login with Google
                </button>
              )}
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            {isUser ? (
              <div>
                Already have an account?{" "}
                <NavLink className="underline" onClick={() => SignUp()}>
                  Login
                </NavLink>
              </div>
            ) : (
              <div>
                Don&apos;t have an account?{" "}
                <NavLink className="underline" onClick={() => SignUp()}>
                  Sign up
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
