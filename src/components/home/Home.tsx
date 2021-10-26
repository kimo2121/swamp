import "./home.scss";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Mint from "../Mint/Mint";
import { WalletMultiButton } from "@solana/wallet-adapter-material-ui";
import styled from "styled-components";
import image_2 from "../../assets/image2.png";
import image1 from "../../assets/image1.png";
import Discount from "../discount/Discount";
const ConnectButton = styled(WalletMultiButton)`
  padding: 5px 10px !important;
  position: absolute !important;
  right: 0 !important;
  margin-top: 30px !important;
  margin-right: 30px !important;
  top: 0 !important;
  cursor: pointer !important;
  height: 36.5px !important;
  z-index: 1001 !important;
  background-color: #488a75 !important ;
  transition: all 0.25s !important;
  border-radius: 0 !important;
  color: white !important;
  &:hover {
    background-color: #abb69e7c !important;
  }
  @media screen and (max-width: 500px) {
    margin-right: 20px !important;
  }
`;
export default function Home() {
  const [posY, setPosY] = useState<number>(400);
  const [scrollY, setScrollY] = useState<number>(0);
  window.onscroll = () => {
    setScrollY(window.pageYOffset);
    return () => (window.onscroll = null);
  };
  window.onload = () => {
    console.log(window.innerHeight);
  };
  const isTabletOrMobile: boolean = useMediaQuery({
    query: "(max-width: 972px)",
  });
  useEffect(() => {
    if (isTabletOrMobile) {
      setPosY(200);
    } else {
      setPosY(400);
    }
  }, [isTabletOrMobile]);
  return (
    <div className="home">
      <ConnectButton />
      <div className="min-btn">
        <Mint />
      </div>
      <img className="section1" src={image_2} alt="" />
      <Discount />

      <img className="section2" src={image1} alt="" />
    </div>
  );
}
