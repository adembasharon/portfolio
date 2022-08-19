import styles from "./HomePage.module.css";
import Link from "next/link";
import Image from 'next/image';
import ademba from '../public/images/ademba.jpg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import github from '../public/images/github.svg';
import linkedin from '../public/images/linkedin.svg';
import twitter from '../public/images/twitter.svg';
import whatsapp from '../public/images/whatsapp.svg';
import instagram from '../public/images/instagram.svg';



const HomePage = () => {
    return (
        <div className="home">
            <div className="homeCont">
            <div className="profilePicture">
                <Image src={ademba} width={400} height={400} />
                <div>
                    <div>
                        <p>Find Me On:</p>
                    </div>
                    <div>
                    <div className={styles.social}>
                    <div>
                        <Link href="https://instagram.com/ademba.sharon">
                <Image src={instagram} width={25} height={25} />
                </Link>
                </div>

                <div>
                    <Link href="https:/api.whatsapp.com/send?phone+254731066135" target="_blank">
                <Image src={whatsapp} width={25} height={25} />
                </Link>
                </div>

                <div>
                    <Link href="https://github.com/adembasharon">
                <Image src={github} width={25} height={25} />
                </Link>
                </div>

                <div>
                <Link href="https://ke.linkedin.com/adembasharon/"><Image src={linkedin} width={25} height={25} /></Link>
                </div>

                <div>
                    <Link href="https://twitter.com/Arona_crev">
                <Image src={twitter} width={25} height={25} />
                </Link>
                </div>
</div>
                    </div>
                </div>
            </div>
            <div className="linksToProjects">
                <p style={{color:"white" ,fontSize:"2rem" ,   fontWeight: 600}}>Hey, My Name is Ademba Sharon</p>
                <div className={styles.talents}>
                    <div>
                        <p>Need To Know More About Me ? <ArrowDownwardIcon /></p>
                    </div>
                    <div>
                        <Link href="/Me"><button><a>ABOUT ME</a></button></Link>
                    </div>

                    <div>
                    <Link href="/Skill"><button><a>SKILLS</a></button></Link>
                    </div>
                    <div>
                    <Link  href="/Projects"><button><a>PROJECTS</a></button></Link>
                    </div>
                    <div>
          <Link href='/Hotline'><button><a>LET'S WORK TOGETHER</a></button></Link>
                    </div>
                    </div>

                </div>
            </div>
            </div>
    )
}

export default HomePage