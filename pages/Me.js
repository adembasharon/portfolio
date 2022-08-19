import styles from "./Me.module.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import github from '../public/images/github.svg';
import linkedin from '../public/images/linkedin.svg';
import twitter from '../public/images/twitter.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import happy from '../public/images/happy.svg';
import Link from 'next/link'



const Me=()=>{
    return(
        <div className={styles.container}>
            <div>
                {/* <div className={styles.dev} style={{textAlign:"center",display:"flex",justifyContent:"center"}}> */}
                <div className={styles.dev}>
                <div>
            <h1> Meet your DEV</h1>
            </div>
            <div>
            <Image src={happy} width={25} height={25} style={{color:'red'}}/>
            </div>
            </div>
            <div className={styles.history}>
            <p>Nice to meet you again I'M a fullstack developer mainly based on MERN stack, I create and desighn websites, I am self-motivated, time conciuos and ready to be corrected.I am cormfortable working in both team and alone because I have experience for both.I have good communication and presentation skills this has actually enabled me to work in team and also be their leader.I am able to create a whole website in a month , I take One and half week to create frontend that is the UI and two weeks to create backend that is the UX, Since I have good presentation skill I design the presentation using Canvas and then present to clien.I haven't gotten any negative feedback from the group and also clients  have worked with, This clearly shows that I am coperative and follow instructions as given.  </p>
  
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
            <Link href="/">
                <div className="backward">
                    <div>
                    <ArrowBackIcon style={{color:"maroon"}}/>
                    </div>
                    <div>
                    <p><a>Home</a></p>
                    </div>
                </div>
                </Link>
                <Link href="/Skill">
                <div className="forward">
<div>
    <p> View Skills</p>
</div>
<div> 
    <ArrowForwardIcon  style={{color:"maroon"}}/>
    </div>

            </div>
            </Link>
</div>

<div>
<p style={{textAlign:"center" , mt:2}}>Crafted with<span style={{color:"red"}}> &hearts;</span> Ademba Sharon</p>
</div>
</div>

        </div>
    )
}
export default Me
