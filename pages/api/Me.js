import styles from "./Me.module.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import github from '../../public/images/github.svg';
import linkedin from '../../public/images/linkedin.svg';
import twitter from '../../public/images/twitter.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import happy from '../../public/images/happy.svg';
import Link from 'next/link'



const Me=()=>{
    return(
        <div className={styles.container}>
            <div>
                <div className={styles.dev}>
                <div>
            <h1> Meet your DEV</h1>
            </div>
            <div>
            <Image src={happy} width={25} height={25} />
            </div>
            </div>
            <div className={styles.history}>
            <p>I'M a fullstack developer.I design and create webpages with good UX and UI I also design colors.Most of my time I take on coddin.I work with speed and time.I can create a a website and design in 2 weeks.I take my work seriously especially client work.  </p>
            <p>I have worked in group and I have been the scrum master in some of my group projects since I am trusted and always carefull.I belive that I will still work in group.I am always ready to be corrected and take correction.</p>
            <p>You can work with me or give tasks becouse I am friendly and hardworking.</p>
  
            </div>
            <div>
                <p style={{textAlign:"center" , marginRight:5}}>Find Me On:</p>
                <div className={styles.social}>
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
            </div>
        
            <div className={styles.mestyle}>
                <div className={styles.backarrow}>
                    <div>
                    <ArrowBackIcon style={{color:"maroon"}}/>
                    </div>
                    <div>
                    <p><Link href="/"><a>Home</a></Link></p>
                    </div>
                </div>
                <div className={styles.vewers}>
<div>
    <p> View Skills</p>
</div>
<div> 
    <ArrowForwardIcon  style={{color:"maroon"}}/>
    </div>

            </div>
</div>

<div>
<p style={{textAlign:"center" , mt:2}}>Crafted with<span style={{color:"red"}}> &hearts;</span> Ademba Sharon</p>
</div>
</div>

        </div>
    )
}
export default Me
