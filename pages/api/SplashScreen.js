import styles from './SplashScreen.module.css';
import Image from 'next/image';
import golf from '../../public/images/golf.png'
import styled from 'styled-components';

const Nav = styled.div`
height:100px;
background:red;
`

const SplashScreen=()=>{
    return(
        <div className=
        {styles.background}>
            <p> ADEMBA SHARON'S PORTFOLIO</p>
            <div className={styles.balls}>

<div className={styles.one}></div>
<div className={styles.two}></div>
<div className={styles.three}></div>

</div>
        </div>
    )
}

export default SplashScreen