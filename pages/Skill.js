import styles from "./Skill.module.css"
import HandymanIcon from "@mui/icons-material/Handyman";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link"
import css from "../public/images/css.svg";
import js from "../public/images/js.svg";
import html from "../public/images/htmlfile.svg";
import bootstrap from "../public/images/bootstrap-4.svg";
import nextjs from "../public/images/nextjs.svg";
import reacticon from "../public/images/react-js.svg";
import sass from "../public/images/sass.svg";
import ssh from "../public/images/ssh.svg";
import vs from "../public/images/vs.svg";
import linux from "../public/images/linux.svg";
import git from "../public/images/git.svg";
import github from "../public/images/github.svg";
import wordpress from "../public/images/wordpress.svg";
import node from "../public/images/node.svg"
import mongo from "../public/images/mongo.svg"
const Skill = () => {

    return (
        <div className={styles.container}>
            <div className={styles.skillscontainer}>
                <h1> <HandymanIcon style={{ color: "darkblue" }} />SKILLS</h1>

                <Stack spacing={7} direction="row" sx={{ color: "action.active" }}>
                    <div className={styles.badge}>Technical Skills</div>


                </Stack>

                <div className={styles.skills}>

                <div className={styles.carditems}>
                        <Card>
                            <CardContent>
                                <Image src={node} width={30} height={30} alt=""/>
                                <Typography  className="card-tech" sx={{ mb: 0 }} gutterBottom>
                                    NodeJs
                                </Typography>
                                <Typography className="card-Desc" sx={{ mb:0}}>
                I use node for non-blocking , event-driven service,due to its it is single-threaded nature.It handles all my backend api.
                                </Typography>


                            </CardContent>

                        </Card>
                    </div>

                    <div className={styles.carditems}>
                        <Card>
                            <CardContent>
                                <Image src={mongo} width={30} height={30} alt=""/>
                                <Typography className="card-tech" sx={{ mb: 0 }} gutterBottom>
                                    MongoData Base
                                </Typography>
                                <Typography className="card-Desc">
                Mongodb allows me store large scale data and allows me to work with data efficiently. 
                                </Typography>


                            </CardContent>

                        </Card>
                    </div>

                    <div className={styles.carditems}>
                        <Card>
                            <CardContent>
                            <Image src={reacticon} width={30} height={30} alt=""/>
                                <Typography className="card-tech" sx={{  mb: 0 }} gutterBottom>
                                    ReactJs
                                </Typography>
                                <Typography className="card-Desc">
            React helps me create UserInterface in a predictable and efficient way using declarative code. It also helps me buld complex apps in combination to other libraries.
                                </Typography>


                            </CardContent>

                        </Card>
                    </div>


                <div className={styles.carditems}>
                        <Card>
                            <CardContent>
                                <Image src={nextjs} width={30} height={30} alt=""/>
                                <Typography className="card-tech" sx={{  mb: 0 }} gutterBottom>
                                    NextJS
                                </Typography>
                                <Typography className="card-Desc">
                                    It is a react framework that gives me a block to create web application, it handles tooling and configuration needed for react.
                                </Typography>


                            </CardContent>

                        </Card>
                    </div>

                    <div className={styles.carditems}>
                        <Card>
                            <CardContent>
                                <Image src={js} width={40} height={40} alt=""/>
                                <Typography className="card-tech" sx={{mb: 0 }} gutterBottom>
                                    JS ES6
                                </Typography>
                                <Typography className="card-Desc">
                                    Using modern ES6 JS I am able to create dynamically updating content like animate images.
                                </Typography>


                            </CardContent>

                        </Card>
                    </div>
                    <div className={styles.carditems}>
                        <Card>
                            <CardContent>
                                <Image src={html} width={30} height={30} alt=""/>

                                <Typography className="card-tech" sx={{mb: 0 }} gutterBottom>
                                    HTML V6
                                </Typography>
                                <Typography className="card-Desc">
    The mark-up language helps to stracture content and tells a web browser on how to display them.
                                </Typography>


                            </CardContent>

                        </Card>
                    </div>

                    <div className={styles.carditems}>
                        <Card>
                            <CardContent>
                                <Image src={css} width={30} height={30} alt=""/>
                                <Typography className="card-tech" sx={{ mb: 0 }} gutterBottom>
                                    css V3
                                </Typography>
                                <Typography className="card-Desc">
                                    I design good and beautiful webpages using the latest version of CSS
                                </Typography>


                            </CardContent>

                        </Card>
                    </div>

                    <div className={styles.carditems}>
                        <Card>
                            <CardContent>
                                <Image src={bootstrap} width={30} height={30} alt=""/>
                                <Typography className="card-tech" sx={{  mb: 0 }} gutterBottom>
                                    Bootstrap
                                </Typography>
                                <Typography className="card-Desc">
                                    Bootsrap helps me create responsive web pages and also I use it to create website with good UserInterface.
                                </Typography>


                            </CardContent>

                        </Card>
                    </div>

                    <div className={styles.carditems}>
                        <Card>
                            <CardContent>
                                <Image src={sass} width={30} height={30} alt=""/>
                                <Typography className="card-tech" sx={{  mb: 0 }} gutterBottom>
                                    SASS
                                </Typography>
                                <Typography className="card-Desc">
                                    Using SASS I design webpages with good UI and UX
                                </Typography>


                            </CardContent>

                        </Card>

                    </div>


                    <div className={styles.carditems}>
                        <Card>
                            <CardContent>
                                <Image src={vs} width={30} height={30} alt=""/>
                                <Typography className="card-tech" sx={{  mb: 0 }} gutterBottom>
                                    Visual Studio Code
                                </Typography>
                                <Typography className="card-Desc">
                    I use open-source vscode for deburging,syntax highlighting,inteligent coide completion,code refactoring and also embed git.
                                </Typography>


                            </CardContent>

                        </Card>
                    </div>

              
                    <div className={styles.carditems}>
                        <Card>
                            <CardContent>
                                <Image src={ssh} width={30} height={30} alt=""/>
                                <Typography className="card-tech" sx={{ mb: 0 }} gutterBottom>
                                    Command Line
                                </Typography>
                                <Typography className="card-Desc">
                                    Command line helps with different ways of setting parameters for the environmennt and providing information to them as to what action they are to perform.
                                </Typography>


                            </CardContent>

                        </Card>
                    </div>


                    <div className={styles.carditems}>
                        <Card>
                            <CardContent>
                                <Image src={linux} width={30} height={30} alt=""/>
                                <Typography className="card-tech" sx={{ mb: 0 }} gutterBottom>
                                    Linux
                                </Typography>
                                <Typography className="card-Desc">
                                    I use Linux OS system to make connection between my software and physical resources that do work.
                                </Typography>


                            </CardContent>

                        </Card>
                    </div>


                    <div className={styles.carditems}>
                        <Card>
                            <CardContent>
                                <Image src={git} width={30} height={30} alt=""/>
                                <Typography className="card-tech" sx={{ mb: 0 }} gutterBottom>
                                    Git
                                </Typography>
                                <Typography className="card-Desc">
                                    This is a souyrce code management that helps me handle smass and large preojecs, it also helps me to track changes that i make in the sourece code.
                                </Typography>


                            </CardContent>

                        </Card>
                    </div>

                    <div className={styles.carditems}>
                        <Card>
                            <CardContent>
                                <Image src={github} width={30} height={30} alt=""/>
                                <Typography className="card-tech" sx={{  mb: 0 }} gutterBottom>
                                    GitHub
                                </Typography>
                                <Typography className="card-Desc">
                                    Github is an open source that helps me make separate changes to different web pages at the same time, It also help mme in collaboration with other developers.

                                </Typography>


                            </CardContent>

                        </Card>
                    </div>

                    <div className={styles.carditems}>
                        <Card>
                            <CardContent>
                                <Image src={wordpress} width={30} height={30} alt=""/>
                                <Typography className="card-tech" sx={{  mb: 0 }} gutterBottom>
                                    Word Press
                                </Typography>
                                <Typography className="card-Desc">
                                    I create simple and small Website using wordpress open source.
                                </Typography>


                            </CardContent>

                        </Card>
                    </div>

                </div>

                <Stack spacing={7} direction="row" sx={{ color: "action.active" }}>
                    <div className={styles.badge3}>Soft Skills</div>

                </Stack>
                <div className={styles.softskills}>
                    <div>
                        <Card>
                            <CardContent>
                                <Typography className="card-tech" sx={{ mb: 0 }} gutterBottom>
                                    Team
                                </Typography>
                                <Typography className="card-Desc">
                                    I have worked in team making me more conversant in teamwork .Always hopping to work in a team.
                                </Typography>


                            </CardContent>

                        </Card>
                    </div>
 
                    <div>
                        <Card>
                            <CardContent>
                                <Typography className="card-tech" sx={{mb: 0 }} gutterBottom>
                                    Communication
                                </Typography>
                                <Typography className="card-Desc">
                                    I have good communication skills which I have gained through presentation of of most of my projects including client projects.
                                </Typography>


                            </CardContent>

                        </Card>
                    </div>

                    <div>
                        <Card>
                            <CardContent>
                                <Typography className="card-tech" sx={{  mb: 0 }} gutterBottom>
                                    Presentation
                                </Typography>
                                <Typography className="card-Desc">
                                    I am a good presenter with good presentation skills and always ready to take correction.
                                </Typography>


                            </CardContent>

                        </Card>
                    </div>
                </div>
                <div className={styles.btnview}>
                <Link href="/" passHref>
                    <div className="backward arrowback">

                        
                        <div>
                            <ArrowBackIcon style={{ color: "maroon" }} />
                        </div>
                        <div>
                            <p ><a>Back</a></p>
                        </div>
                    </div>
                    </Link>

                        <Link href="/Projects" passHref>
                        <div className="forward arrowback">

                            <div>
                            <div>
                                <p>Projects</p>
                            </div>
                            <div>
                            <ArrowForwardIcon style={{color:"maroon"}}/>
                            </div>
                            </div>
                            </div>
                        </Link>
            
                    
                </div>
            </div>
        </div>
    )
}

export default Skill