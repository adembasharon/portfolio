import styles from "./HomePage.module.css";
import Link from "next/link";
import Image from 'next/image';
import ademba from '../../public/images/ademba.JPG'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomePage = () => {
    return (
        <div className={styles.home}>
            <div>
                <Image src={ademba} width={350} height={400} />
            </div>
            <div>
                <p style={{color:"white" ,fontSize:"2rem" ,   fontWeight: 600}}>Hey, My Name is Ademba Sharon</p>
                <div className={styles.talents}>
                    <div>
                        <p>Need To Know More About Me ? <ArrowDownwardIcon /></p>
                    </div>
                    <div>
                        <Link href="/Me"><button><a>ABOUT ME</a></button></Link>
                    </div>

                    <div>
                        <button><a href="#">SKILLS</a></button>
                    </div>
                    <div>
                        <button><a href="#">PROJECTS</a></button>
                    </div>
                    <div>
                        <button><a href="#">LETS'S WORK TOGETHER</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage