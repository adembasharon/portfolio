import github from '../public/images/github.svg';
import linkedin from '../public/images/linkedin.svg';
import twitter from '../public/images/twitter.svg';
import Image from 'next/image';
import phone from '../public/images/phone.svg'
import email from '../public/images/email.svg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from "./HotLine.module.css";
import Link from 'next/link'

import whatsapp from '../public/images/whatsapp.svg';
import instagram from '../public/images/instagram.svg';



const HotLine = () => {
    return (
        <div className={styles.contactcontainer}>
            <p>Call or send me a message, I'd like to hear from you.</p>
            <h2>find me on:</h2>
            <ul className={styles.contact}>
                <div>
                    <Image src={phone} width={30} height={30} />
                </div>
                <div>
                <li>+254 779 744 166  or  +254 731 066 135 </li>
                </div>
            </ul>
            <ul className={styles.email}>
                <div>
                    <Image src={email} width={30} height={30} />
                </div>
                <div>
                    <li>adembasharon816@gmail.com</li>
                </div>
            </ul>

            <div className={styles.links}>
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
           <div className={styles.arrowback}>
                <div>
                    <ArrowBackIcon   style={{color:"maroon" }}/>
                </div>
                <div>
                    <p><Link href="/"><a>Home</a></Link></p>
                </div>
            </div>
        </div>
    )
}
export default HotLine





