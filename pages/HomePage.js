import styles from "./HomePage.module.css";
import Link from "next/link";
import Image from "next/image";
import ademba from "../public/images/ademba.jpg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import github from "../public/images/github.svg";
import linkedin from "../public/images/linkedin.svg";
import twitter from "../public/images/twitter.svg";
// import whatsapp from "../public/images/whatsapp.svg";
import instagram from "../public/images/instagram.svg";
// import WhatsappContainer from "@mui/icons-material/WhatsappContainer";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import styled from "styled-components";


// const WhatsappContainer = styled.div`
//   .whatsapp_float {
//     position: fixed;
//     width: 60px;
//     height: 60px;
//     bottom: 40px;
//     right: 40px;
//     transition: ease background-color 250ms;
//     &:hover {
//       transform: translate(-20%, 20%);
//       transition: 0.1s ease-in;
//     }
//     color: #fff;
//     border-radius: 50px;
//     text-align: center;
//     font-size: 30px;
//     z-index: 100;
//   }
//   .whatsapp-icon {
//     margin-top: 16px;
//   }
//   /* for mobile */
//   @media screen and (max-width: 767px) {
//     .whatsapp-icon {
//       margin-top: 10px;
//     }
//     .whatsapp_float {
//       width: 40px;
//       height: 40px;
//       bottom: 20px;
//       right: 10px;
//       font-size: 22px;
//     }
//   }
// `;




const HomePage = () => {
    return (
        <div className="home">
            <div className="homeCont">
            <div className="profilePicture">
                <Image src={ademba} width={400} height={400} alt=""/>
                <div>
                    <div>
                        <p>Find Me On:</p>
                    </div>
                    <div>
                    <div className={styles.social}>
                    <div>
                        <Link href="https://instagram.com/ademba.sharon" passHref>
                <Image src={instagram} width={25} height={25} alt=""/>
                </Link>
                </div>

                {/* <div>
                    <Link href="https:/api.whatsapp.com/send?phone+254731066135" target="_blank" passHref>
                <Image src={whatsapp} width={25} height={25} alt=""/>
                </Link>
                </div> */}

                <div>
                    <Link href="https://github.com/adembasharon" passHref>
                <Image src={github} width={25} height={25} alt=""/>
                </Link>
                </div>

                <div>
                <Link href="https://ke.linkedin.com/adembasharon/" passHref><Image src={linkedin} width={25} height={25} alt=""/></Link>
                </div>

                <div>
                    <Link href="https://twitter.com/Arona_crev" passHref>
                <Image src={twitter} width={25} height={25} alt=""/>
                </Link>
                </div>
</div>
                    </div>
                </div>
            </div>
            <div className="linksToProjects">
                <p>Hey, My Name is Ademba Sharon</p>
                <div className={styles.talents}>
                    <div>
                        <p>Need To Know More About Me ? <ArrowDownwardIcon /></p>
                    </div>
                    <div>
                        <Link href="/Me" passHref><button><a>ABOUT ME</a></button></Link>
                    </div>

                    <div>
                    <Link href="/Skill" passHref><button><a>SKILLS</a></button></Link>
                    </div>
                    <div>
                    <Link  href="/Projects" passHref><button><a>PROJECTS</a></button></Link>
                    </div>
                    <div>
          <Link href="/Hotline" passHref><button>LETS WORK TOGETHER</button></Link>
                    </div>
                    </div>

                </div>
            </div>


            {/* <WhatsappContainer>
        <a
          href="https://wa.me/254726964415"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon
            style={{
              width: "55",
              height: "55",
              background: "#25d366",
              borderRadius: "50%",
             
            }}
          />
        </a>
      </WhatsappContainer> */}

            </div>
    )
}

export default HomePage