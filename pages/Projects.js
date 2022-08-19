import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./Skill.module.css"
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import pizza from "../public/images/pizza.png"
import Image from "next/image"
import nesco from "../public/images/nesco.png"
import black from "../public/images/blackeyed.png"
import magoso from "../public/images/magoso.png"
import palindrome from "../public/images/palindrome.png"
import { RadioButtonChecked } from "@mui/icons-material";

const Project = () => {
    return (
        <div className="ProjectCont">
            <div className="project_title"><h1>These are my Projects</h1></div>
            <div className="project_container">
                <div className="project_subDiv">

                <div>
                    <Card>
                        <CardContent>
                            <Typography>
                                <h6>Magoso E-Commerce</h6>
                                <Image src={magoso} width={230} height={230} alt=""/>
                            </Typography>
                            <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                                <div className="portLinks">

                                    <button><Link href="https://github.com/adembasharon/ecommerce" passHref>GitHub</Link></button>

                                    <button><Link href="https://adembasharon.github.io/ecommerce/" passHref>live site</Link></button>
                                </div>

                                <div>
                                    <h6>TECHNOLOGIES</h6>
                                    <div style={{display:"flex",alignItems:"center",flexDirection:"row",gap:".5em"}}>
                                    <div style={{display:"flex", alignItems:"center",gap:".2 em"}}>
                                        <div>
                                            <RadioButtonChecked></RadioButtonChecked>
                                        </div>
                                        <div>
                                            <p>React</p>
                                        </div>
                                    </div>
                                    <div style={{display:"flex", alignItems:"center",gap:".2 em"}}>
                                        <div>
                                            <RadioButtonChecked></RadioButtonChecked>
                                        </div>
                                        <div>
                                            <p>Material UI</p>
                                        </div>
                                    </div>

                                </div>
                                </div>
                                <div style={{display:"flex", alignItems:"center",gap:".5em"}}>
                                        <div>
                                            <RadioButtonChecked></RadioButtonChecked>
                                        </div>
                                        <div>
                                            <p>Styled Components      </p>
                                        </div>
                                    </div>
                            </Typography>
                        </CardContent>

                    </Card>
                </div>
                <div>
                    <Card>
                        <CardContent>
                            <Typography >
                                <h6>Black Eyed-Peas</h6>
                                <Image src={black} width={230} height={230} alt=""/>
                            </Typography>
                            <Typography sx={{ fontSize: 20, fontWeight: 500 }}>

                                <div className="portLinks">
                                    <button><Link href="https://github.com/adembasharon/black-eyed-peas" passHref>GitHub</Link></button>

                                    <button><Link href="https://adembasharon.github.io/black-eyed-peas/" passHref>live site</Link></button>
                                </div>

                                <div>
                                    <h6>TECHNOLOGIES</h6>
                                    <div style={{display:"flex",alignItems:"center",flexDirection:"row",gap:".5em"}}>
                                    <div style={{display:"flex", alignItems:"center",gap:".2 em"}}>
                                        <div>
                                            <RadioButtonChecked></RadioButtonChecked>
                                        </div>
                                        <div>
                                            <p>React</p>
                                        </div>
                                    </div>
                                    <div style={{display:"flex", alignItems:"center",gap:".2 em"}}>
                                        <div>
                                            <RadioButtonChecked></RadioButtonChecked>
                                        </div>
                                        <div>
                                            <p>Material UI</p>
                                        </div>
                                    </div>


                                    
                        
                                </div>
                                </div>
                                <div style={{display:"flex", alignItems:"center",gap:".5em"}}>
                                        <div>
                                            <RadioButtonChecked></RadioButtonChecked>
                                        </div>
                                        <div>
                                            <p>CSS </p>
                                        </div>
                                    </div>
                            </Typography>

                        </CardContent>

                    </Card>
                </div>


                <div >
                    <Card>
                        <CardContent>
                            <Typography>
                                <h6>Pizza Buffet</h6>
                                <Image src={pizza} width={230} height={230} alt=""/>
                            </Typography>
                            <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                            </Typography>
                            <div className="portLinks">
                                <button><Link href="https://github.com/adembasharon/pizza-buffet" passHref>GitHub</Link></button>

                                <button><Link href="https://adembasharon.github.io/pizza-buffet/" passHref>live site</Link></button>
                            </div>


                            <div>
                                    <h6>TECHNOLOGIES</h6>
                                    <div style={{display:"flex",alignItems:"center",flexDirection:"row",gap:".5em"}}>
                                    <div style={{display:"flex", alignItems:"center",gap:".2 em"}}>
                                        <div>
                                            <RadioButtonChecked></RadioButtonChecked>
                                        </div>
                                        <div>
                                            <p>React</p>
                                        </div>
                                    </div>
                                    <div style={{display:"flex", alignItems:"center",gap:".2 em"}}>
                                        <div>
                                            <RadioButtonChecked></RadioButtonChecked>
                                        </div>
                                        <div>
                                            <p>Material UI</p>
                                        </div>
                                    </div>
                               

                                </div>
                                </div>

                                   <div style={{display:"flex", alignItems:"center",gap:".5em"}}>
                                        <div>
                                            <RadioButtonChecked></RadioButtonChecked>
                                        </div>
                                        <div>
                                            <p>Styled Components      </p>
                                        </div>
                                    </div>
                        </CardContent>

                    </Card>
                </div>




                <div>
                    <Card>
                        <CardContent>
                            <Typography>
                                <h6>NescoBar</h6>
                                <Image src={nesco} width={230} height={230} alt=""/>
                            </Typography>
                            <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                            </Typography>
                            <div className="portLinks">
                                <button><Link href="https://github.com/adembasharon/nescobar" passHref>GitHub </Link></button>

                                <button><Link href="" passHref>live site</Link></button>
                            </div>


                            <div>
                                    <h6>TECHNOLOGIES</h6>
                                    <div style={{display:"flex",alignItems:"center",flexDirection:"row",gap:".5em"}}>
                                    <div style={{display:"flex", alignItems:"center",gap:".2 em"}}>
                                        <div>
                                            <RadioButtonChecked></RadioButtonChecked>
                                        </div>
                                        <div>
                                            <p>React</p>
                                        </div>
                                    </div>
                                    <div style={{display:"flex", alignItems:"center",gap:".2 em"}}>
                                        <div>
                                            <RadioButtonChecked></RadioButtonChecked>
                                        </div>
                                        <div>
                                            <p>Material UI</p>
                                        </div>
                                    </div>
                                   

                                </div>
                                </div>

                                   <div style={{display:"flex", alignItems:"center",gap:".5em"}}>
                                        <div>
                                            <RadioButtonChecked></RadioButtonChecked>
                                        </div>
                                        <div>
                                            <p>Styled Components      </p>
                                        </div>
                                    </div>

                                    <div style={{display:"flex", alignItems:"center",gap:".5em"}}>
                                        <div>
                                            <RadioButtonChecked></RadioButtonChecked>
                                        </div>
                                        <div>
                                            <p>Nodejs    </p>
                                        </div>
                                    </div>
                        </CardContent>

                    </Card>
                </div>

                <div >
                    <Card>
                        <CardContent>
                            <Typography >
                                <h6>Palindrome Checker</h6>
                                <Image src={palindrome} width={230} height={230} alt=""/>
                            </Typography>
                            <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                                <div className="portLinks">
                                <button><Link href="https://github.com/adembasharon/palindrome-checker" passHref>GitHub</Link></button>                               

                            <button><Link href="https://adembasharon.github.io/palindrome-checker/" passHref>live site</Link></button>
                            </div>
                            <div>
                                    <h6>TECHNOLOGIES</h6>
                                    <div style={{display:"flex",alignItems:"center",flexDirection:"row",gap:".5em"}}>
                                    <div style={{display:"flex", alignItems:"center",gap:".2 em"}}>
                                        <div>
                                            <RadioButtonChecked></RadioButtonChecked>
                                        </div>
                                        <div>
                                            <p>JS</p>
                                        </div>
                                    </div>
                                    <div style={{display:"flex", alignItems:"center",justifyContent:"center",gap:".2 em"}}>
                                        <div>
                                            <RadioButtonChecked></RadioButtonChecked>
                                        </div>
                                        <div>
                                            <p>CSS</p>
                                        </div>
                                    </div>
                                 

                                </div>
                                </div>
                                <div style={{display:"flex", alignItems:"center",gap:".5em"}}>
                                        <div>
                                            <RadioButtonChecked></RadioButtonChecked>
                                        </div>
                                        <div>
                                            <p>HTML</p>
                                        </div>
                                    </div>
                            </Typography>

                        </CardContent>

                    </Card>
                </div>

                </div>
            </div>
            <div className={styles.btnview}>

                <Link href="/Skill" passHref>
                    <div className="backward">
                        <div>
                            <ArrowBackIcon style={{ color: "maroon" }} />
                        </div>
                        <div>
                            <p>Back</p>
                        </div>
                    </div>
                </Link>


                <div className="forward">

                    <div>
                        <p><a>Next Project </a></p>
                    </div>
                    <div> <ArrowForwardIcon style={{ color: "maroon" }} /></div>
                </div>
            </div>
        </div>
    )
}

export default Project