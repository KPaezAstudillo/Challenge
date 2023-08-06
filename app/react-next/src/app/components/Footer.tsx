import Image from "next/image"
import logo from "../images/logo.png"

const Footer = () => {
  return (
    <div className="w-full h-20 bg-yellow flex items-center justify-center gap-4">
        <Image className="w-24" src={logo} alt="logo"/>
        <span>LunaPets Challenge</span>
    </div>
  )
}

export default Footer