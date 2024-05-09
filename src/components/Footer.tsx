import amlilaLogo from "../assets/amelia_logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="flex items-center justify-center w-full mt-vh5 bg-gradient-to-r from-primary_light3  to-primary_light4 text-white">
            <div className="w-full px-vw5 ">
                <div className=" flex flex-col gap-vh2 py-vh5 justify-center items-center">
                <img src={amlilaLogo} alt='amelia logo' className='w-vw10 min-w-px75' />
                <p className="w-full text-center">
                ameliaweddingstudio@gmail.com</p>
                <p className="w-full text-center capitalize">
                207/1,Rathmaldeniya Road, Pannipitiya, Sri Lanka, 10230</p>
                <p className="w-full text-center">
                +94718736614</p>
               
                <div className="w-full flex justify-center items-center gap-vw1">
                    <button>

                <FaFacebookSquare />
                    </button>
                    <button>

                <FaInstagram />
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
