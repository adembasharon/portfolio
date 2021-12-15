import styles from "./Skill.module.css"
import HandymanIcon from '@mui/icons-material/Handyman';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link"
import css from "../../public/images/css.svg";
import js from "../../public/images/js.svg";
import html from "../../public/images/htmlfile.svg";
import bootstrap from "../../public/images/bootstrap-4.svg";
import nextjs from "../../public/images/nextjs.svg";
import reacticon from "../../public/images/react-js.svg";
import sass from "../../public/images/sass.svg";
import ssh from "../../public/images/ssh.svg";
import vs from "../../public/images/vs.svg";
import linux from "../../public/images/linux.svg";
import git from "../../public/images/git.svg";
import github from "../../public/images/github.svg";
import wordpress from "../../public/images/wordpress.svg";

const Skill = () => {
    
    return (
        <div className={styles.container}>
        <div className={styles.skillscontainer}>
<h1> <HandymanIcon style={{color:"darkblue"}}/>SKILLS</h1>

<Stack spacing={7} direction="row" sx={{ color: 'action.active' }}>
      <div className={styles.badge}>Technical Skills</div>
        

      </Stack>

<div className={styles.skills}>
    
    <div className={styles.carditems}>
        <Card>
            <CardContent>
            <Image src={html} width={30} height={30}/>

                <Typography sx={{ fontSize: 30,fontWeight:500,mb:0 }} gutterBottom>
                    HTML V6
                </Typography>
                <Typography sx={{fontSize: 20,fontWeight:500 }}>
                I create well structured and semantic websites using version of HTML
                </Typography>
                
                
            </CardContent>

        </Card>
        </div>

        <div className={styles.carditems}>
        <Card>
            <CardContent>
            <Image src={css} width={30} height={30}/>
                <Typography sx={{ fontSize: 30,fontWeight:500,mb:0 }} gutterBottom>
                    css V3
                </Typography>
                <Typography sx={{fontSize: 20,fontWeight:500 }}>
                    I design good and beautiful webpages using the latest version of CSS
                </Typography>
                
                
            </CardContent>

        </Card>
        </div>


        <div className={styles.carditems}>
        <Card>
            <CardContent>
            <Image src={nextjs} width={30} height={30}/>
                <Typography sx={{ fontSize: 30,fontWeight:500,mb:0 }} gutterBottom>
                    NextJS 
                </Typography>
                <Typography sx={{fontSize: 20,fontWeight:500 }}>
                    I create modern APPS blazing APPS that are ACO friendly
                </Typography>
                
                
            </CardContent>

        </Card>
        </div>

        <div className={styles.carditems}>
        <Card>
            <CardContent>
            <Image src={js} width={40} height={40}/>
                <Typography sx={{ fontSize: 30,fontWeight:500,mb:0 }} gutterBottom>
                    JS ES6
                </Typography>
                <Typography sx={{fontSize: 20,fontWeight:500 }}>
                    Using modern ES6 JS I  add interactivity in webpages
                </Typography>
                
                
            </CardContent>

        </Card>
        </div>

        <div className={styles.carditems}>
        <Card>
            <CardContent>
            <Image src={reacticon} width={30} height={30}/>
                <Typography sx={{ fontSize: 30,fontWeight:500,mb:0 }} gutterBottom>
                    React
                </Typography>
                <Typography sx={{fontSize: 20,fontWeight:500 }}>
                    I create front-end webpage using react libraries
                </Typography>
                
                
            </CardContent>

        </Card>
        </div>
        <div className={styles.carditems}>
        <Card>
            <CardContent>
            <Image src={bootstrap} width={30} height={30}/>
                <Typography sx={{ fontSize: 30,fontWeight:500,mb:0 }} gutterBottom>
                    Bootstrap
                </Typography>
                <Typography sx={{fontSize: 20,fontWeight:500 }}>
                    I develop responsive web on both small and large screen
                </Typography>
                
                
            </CardContent>

        </Card>
        </div>

        <div className={styles.carditems}>
        <Card>
            <CardContent>
            <Image src={sass} width={30} height={30}/>
                <Typography sx={{ fontSize: 30,fontWeight:500,mb:0 }} gutterBottom>
                    SASS
                </Typography>
                <Typography sx={{fontSize: 20,fontWeight:500 }}>
                    Using SASS I design webpages with good UI and UX
                </Typography>
                
                
            </CardContent>

        </Card>

        </div>


        <div className={styles.carditems}>
        <Card>
            <CardContent>
            <Image src={vs} width={30} height={30}/>
                <Typography sx={{ fontSize: 30,fontWeight:500,mb:0 }} gutterBottom>
                    Visual Studio Code
                </Typography>
                <Typography sx={{fontSize: 20,fontWeight:500 }}>
                    VSCode is one of my finenest work space.Most of my codes I do in VS.
                </Typography>
                
                
            </CardContent>

        </Card>
        </div>

        <div className={styles.carditems}>
        <Card>
            <CardContent>
            <Image src={wordpress} width={30} height={30}/>
                <Typography sx={{ fontSize: 30,fontWeight:500,mb:0 }} gutterBottom>
                    Word Press
                </Typography>
                <Typography sx={{fontSize: 20,fontWeight:500 }}>
                    I create webpages with good UX and UI and also responsive.
                </Typography>
                
                
            </CardContent>

        </Card>
        </div>

        <div className={styles.carditems}>
        <Card>
            <CardContent>
            <Image src={ssh} width={30} height={30}/>
                <Typography sx={{ fontSize: 30,fontWeight:500,mb:0 }} gutterBottom>
                    Command Line
                </Typography>
                <Typography sx={{fontSize: 20,fontWeight:500 }}>
                    All of my commands I do them in Terminal,it helps me to develop my webpages.
                </Typography>
                
                
            </CardContent>

        </Card>
</div>


<div className={styles.carditems}>
        <Card>
            <CardContent>
            <Image src={linux} width={30} height={30}/>
                <Typography sx={{ fontSize: 30,fontWeight:500,mb:0 }} gutterBottom>
                    Linux
                </Typography>
                <Typography sx={{fontSize: 20,fontWeight:500 }}>
                    I develop responsive web on both small and large screen using linux
                </Typography>
                
                
            </CardContent>

        </Card>
        </div>


        <div className={styles.carditems}>
        <Card>
            <CardContent>
            <Image src={git} width={30} height={30}/>
                <Typography sx={{ fontSize: 30,fontWeight:500,mb:0 }} gutterBottom>
                    Git
                </Typography>
                <Typography sx={{fontSize: 20,fontWeight:500 }}>
                Verson control using git
                </Typography>
                
                
            </CardContent>

        </Card>
        </div>

        <div className={styles.carditems}>
        <Card>
            <CardContent>
            <Image src={github} width={30} height={30}/>
                <Typography sx={{ fontSize: 30,fontWeight:500,mb:0 }} gutterBottom>
                    GitHub
                </Typography>
                <Typography sx={{fontSize: 20,fontWeight:500 }}>
                All of my projects I store them in github .I can create repositories and keep my projects in github
                </Typography>
                
                
            </CardContent>

        </Card>
        </div>
</div>

<Stack spacing={7} direction="row" sx={{ color: 'action.active' }}>
<div className={styles.badge3}>Soft Skills</div>

      </Stack>
<div className={styles.softskills}>
<div>
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 30,fontWeight:500,mb:0 }} gutterBottom>
                    Team
                </Typography>
                <Typography sx={{fontSize: 16,fontWeight:400}}>
                 I have worked in team making me more conversant in teamwork .Always hopping to work in a team.
                </Typography>
                
                
            </CardContent>

        </Card>
        </div>

        <div>
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 30,fontWeight:500,mb:0 }} gutterBottom>
                    Communication
                </Typography>
                <Typography sx={{fontSize: 16,fontWeight:500 }}>
                    I have good communication skills which i have gained through presentation of my projects.
                </Typography>
                
                
            </CardContent>

        </Card>
        </div>

        <div>
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 30,fontWeight:500,mb:0 }} gutterBottom>
                    Presentation
                </Typography>
                <Typography sx={{fontSize: 16,fontWeight:500 }}>
                    I am a good presenter with good presentation skills and always ready to take correction 
                </Typography>
                
                
            </CardContent>

        </Card>
        </div>
        </div>
        <div className={styles.btnview}>
            <div className={styles.arrowback}>
                <div>
                <ArrowForwardIcon style={{color:"maroon"}}/>
                </div>
                <div>
        <p ><Link href="/"><a>Home</a></Link></p>
        </div>
        </div>
        <div className={styles.forward}>
            <div>
        <p><a href="#">View Projects </a></p>
        </div>
        <div> <ArrowForwardIcon  style={{color:"maroon"}}/></div>
        </div>
        </div>
</div>
</div>
    )
}

export default Skill