import LoginSignup from "../components/LoginSignup";

import authImg from "../assets/images/Side Image (1).png";
function Auth() {
  return (
    <div className="flex items-center justify-center  desktop:justify-normal my-10 desktop:my-0 w-full desktop:gap-[10em]">
      <div className="w-full desktop:block hidden">
        <img
          src={authImg}
          alt="A shopping cart illustration"
          className="w-full "
        />
      </div>
      <div className="w-full desktop:w-[80%] p-6 ">
        <LoginSignup />
      </div>
    </div>
  );
}

export default Auth;
