import { VscSend } from "react-icons/vsc";
import qrCode from "../assets/images/Qr Code.png";
import playStore from "../assets/images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";
import appStore from "../assets/images/download-appstore.png";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import { RiLinkedinLine } from "react-icons/ri";
function Footer() {

  const footerLink ={
    padding: "0.5em 0em",
    display:"flex",
    flexDirection: "column",
    gap:".5em"
  }
  return (
    <div className="flex flex-col  justify-center items-center bg-black  ">
      <div className="text-primary text-sm  flex flex-wrap gap-6 desktop:gap-0 justify-between items-start w-full p-[4em]">
        <div>
          <span className="text-lg font-medium">Exclusive</span>
          <ul style={footerLink}>
            <li>Subscribe</li>
            <li>Get 10 off your first order</li>
            <li className="relative ">
              <input
                type="text"
                placeholder="Enter your email"
                className="border-2 border-solid bg-inherit border-primary rounded-md w-full p-2 placeholder:text-gray-400 placeholder:p-2 placeholder:text-xs focus:border-primary focus:border-2 focus:border-solid focus:outline-1 focus:outline-primary  "
              />{" "}
              <VscSend size={20} className="absolute right-2 top-1/4" />
            </li>
          </ul>
        </div>
        <div>
          <span className="text-lg font-medium">Support</span>
          <ul style={footerLink}>
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>
        <div>
          <span className="text-lg font-medium">Account</span>
          <ul style={footerLink}>
            <li>My Account</li>
            <li>Login/Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
          <span className="text-lg font-medium">Quick Link</span>
          <ul style={footerLink}>
            <li>Privacy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div style={footerLink}>
          <span className="text-lg font-medium">Download App</span>
          <div>
            <span>Save $3 with App New User Only</span>
            <div className="flex items-center gap-2">
              <div>
                <img
                  src={qrCode}
                  alt="A qrcode"
                  className="object-fit max-w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <img
                    src={playStore}
                    alt="playstore"
                    className="object-fit max-w-full"
                  />
                </div>
                <div>
                  <img
                    src={appStore}
                    alt="App store"
                    className="object-fit max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <RiFacebookLine size={25} />
            <CiTwitter size={25} />
            <PiInstagramLogoLight size={25} />
            <RiLinkedinLine size={25} />
          </div>
        </div>
      </div>

      <div className="text-center text-sm font-light text-gray-500 border-t-[0.5px] border-solid border-gray-500 w-full py-6">
        &copy; Copyright Rimel {new Date().getFullYear()}. All right reserved
      </div>
    </div>
  );
}

export default Footer;
