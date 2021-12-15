import github from '../../public/images/github.svg';
import linkedin from '../../public/images/linkedin.svg';
import twitter from '../../public/images/twitter.svg';
import Image from 'next/image';
import phone from '../../public/images/phone.svg'
import email from '../../public/images/email.svg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from "./Contact.module.css";
import Link from 'next/link'




const Contact = () => {
    return (
        <div className={styles.contactcontainer}>
            <p>You can always call me or send me a message I am always online.Waiting for your message.</p>
            <h2>You can find me on:</h2>
            <ul className={styles.contact}>
                <div>
                    <Image src={phone} width={30} height={30} />
                </div>
                <div>
                <li>+254 712 801 538</li>
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
                    <Image src={github} width={25} height={25} />
                </div>
                <div>
                    <Image src={linkedin} width={25} height={25} />
                </div>
                <div>
                    <Image src={twitter} width={25} height={25} />
                </div>
            </div>
            <div className={styles.arrowback}>
                <div>
                    <ArrowBackIcon style={{color:"maroon" }} />
                </div>
                <div>
                    <p ><Link href="/"><a>Home</a></Link></p>
                </div>
            </div>
        </div>
    )
}
export default Contact





