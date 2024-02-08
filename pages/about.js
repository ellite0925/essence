import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
import Router from "next/router";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import DefaultButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from "@material-ui/core/InputAdornment";
import Divider from '@material-ui/core/Divider';
// @material-ui/icons
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
// template components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
// custom
import Rating from '@material-ui/lab/Rating';
import Button from "/components/CustomButtons/Button.js";
import Parallax from "/components/Parallax/Parallax.js";
import Info from "/components/Typography/Info.js";
// sections for this page
import SectionBasics from "/pages-sections/Components-Sections/SectionBasics.js";
import SectionNavbars from "/pages-sections/Components-Sections/SectionNavbars.js";
import SectionTabs from "/pages-sections/Components-Sections/SectionTabs.js";
import SectionPills from "/pages-sections/Components-Sections/SectionPills.js";
import SectionNotifications from "/pages-sections/Components-Sections/SectionNotifications.js";
import SectionTypography from "/pages-sections/Components-Sections/SectionTypography.js";
import SectionJavascript from "/pages-sections/Components-Sections/SectionJavascript.js";
import SectionCarousel from "/pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "/pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "/pages-sections/Components-Sections/SectionLogin.js";
import SectionExamples from "/pages-sections/Components-Sections/SectionExamples.js";
import SectionDownload from "/pages-sections/Components-Sections/SectionDownload.js";
import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import Slider from "react-slick";
import NavPills from "/components/NavPills/NavPills.js";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CustomInput from "/components/CustomInput/CustomInput.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import styles from "/styles/jss/nextjs-material-kit/pages/components.js";
import { Container, IconButton, Typography } from "@material-ui/core";
//hook
import { useCheckTokenValidity } from '../redux/hooks.js';
//redux
import { useSelector, useDispatch } from "react-redux";
//other
import { useSnackbar } from "notistack";

import { green, purple } from '@material-ui/core/colors';
const ColorButton = withStyles((theme) => ({
  root: {
    color: 'white',
    backgroundColor: '#2E3192',
    '&:hover': {
      color: '#2E3192',
      backgroundColor: 'white',
    },
  },
}))(DefaultButton);

const useStyles = makeStyles(theme => {
  return {
    ...styles,
    slideCard: {
      backgroundColor: "#F5F5F5",
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto"
    },
    deepColoredSection: {
      backgroundColor: '#4649A7'
    },
    coloredSection: {
      backgroundColor: '#EBF3F5'
    },
    headerMarginTop: {
      marginTop: '150px'
    },
    aboutPadding: {
      paddingTop: '50px',
      paddingBottom: '100px'
    },
    fullWidth: {
      width: '100%'
    },
    fullHeight: {
      height: '100%'
    },
    autoHeight: {
      height: 'auto'
    },
    blueText: {
      color: '#2A6EBF',
    },
    blueRect: {
      backgroundColor: '#2A6EBF',
      height: '885px',
      paddingTop: '65px',
      paddingRight: '191px',
      display: 'flex',
      justifyContent: 'flex-end',
      boxSizing: 'border-box',
      overflow: 'hidden'
    },
    purpleRect: {
      backgroundColor: '#2E3192',
      height: '740px',
      width: '640px',
      marginLeft: '50px'
    },
    whiteBorderRect: {
      borderTop: '10px solid white',
      borderRight: '10px solid white',
      borderBottom: '10px solid white',
      borderTopRightRadius: '38px',
      borderBottomRightRadius: '38px',
      height: '80%',
      width: '150%',
      boxSizing: 'border-box',
      borderLeft: 'none'
    },
    absoluteSoraContainer: {
      position: 'absolute',
      right: '240px',
      top: '128px',
      zIndex: '10',
    },
    soraImg: {
      borderRadius: '38px',
      border: '0px solid #FFF',
    },
    absoluteWingContainer: {
      position: 'absolute',
      right: '0px',
      top: '400px',
      zIndex: '11',
    },
    wingImg: {
      width: '550px',
      height: '550px',
    },
    aboutImgContainer: {
      position: 'absolute',
      width: '640px',
      left: '0px',
      top: '60px'
    },
    aboutImg: {
      width: '640px',
    },
    columnCenter: {
      display: 'flex',
      alignItems: 'center',
    }
  }
});

export default function Home(props) {
  //snackbar
  const snackbar = useSnackbar();
  
  const classes = useStyles();
  const { ...rest } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");

  const redux_token = useSelector((state) => state.authentication.token);
  

  return (
    <div>
      <Header
      style={{
        fontFamily:"satoshi"
      }}
        brand=""
        rightLinks={<HeaderLinks/>}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 80,
          color: "white"
        }}
        {...rest}
      />
      
      {/* about us start */}
      <div className={classNames(classes.main, classes.mainRaised)} id="aboutus_section">
        <div className={classes.deepColoredSection} style={{height: '400px', marginTop: '150px', paddingTop: '15px'}}>
          <GridContainer alignItems="center" direction="column">
            <h4 className={classes.title} style={{ color: 'white' }}>SHORT STORY ABOUT US</h4>
            <h2 className={classes.title} style={{color: 'white'}}>The big story behind, our</h2>
            <h2 className={classes.title} style={{color: 'white'}}>beautyness center</h2>
            <ColorButton style={{width: '250px', marginTop: '30px'}} variant="outlined">Make a reservation</ColorButton>
          </GridContainer>
        </div>
      </div>
      {/* about us end */}
      {/* our values start */}
      <div className={classNames(classes.main, classes.mainRaised)} id="ourvalues_section">
        <GridContainer alignItems="center" style={{ marginTop: "50px" }} direction="column">
          <h4 className={classes.title} style={{ color: '#2E3192' }}>OUR VALUES</h4>
          <h2 className={classes.title} style={{color: 'black'}}>The work values we thrive for</h2>
        </GridContainer>
        <GridContainer style={{marginTop: '50px', marginBottom: '80px'}}>
          <GridItem sm={4}></GridItem>
          <GridItem sm={4}>
            <GridContainer>
              <GridItem sm={3}>
                <div style={{backgroundColor: '#F5F5FA', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'solid 0px', borderRadius: '10px', paddingTop: '25px', paddingBottom: '25px'}}>
                  <img src="./img/about-icon1.png"></img>
                </div>
              </GridItem>
              <GridItem sm={9}>
                <h4>Beauty Experts</h4>
                <h4>The majority have suffered alternation in some form, buying to injected humour, or randomised words which desktop publishing packages.</h4>
              </GridItem>
            </GridContainer>
            <Divider style={{marginTop: '20px', marginBottom: '30px'}} />
            <GridContainer>
              <GridItem sm={3}>
                <div style={{backgroundColor: '#F5F5FA', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'solid 0px', borderRadius: '10px', paddingTop: '25px', paddingBottom: '25px'}}>
                  <img src="./img/about-icon2.png"></img>
                </div>
              </GridItem>
              <GridItem sm={9}>
                <h4>Great Services</h4>
                <h4>The majority have suffered alternation in some form, buying to injected humour, or randomised words which desktop publishing packages.</h4>
              </GridItem>
            </GridContainer>
            <Divider style={{marginTop: '20px', marginBottom: '30px'}} />
            <GridContainer>
              <GridItem sm={3}>
                <div style={{backgroundColor: '#F5F5FA', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'solid 0px', borderRadius: '10px', paddingTop: '25px', paddingBottom: '25px'}}>
                  <img src="./img/about-icon3.png"></img>
                </div>
              </GridItem>
              <GridItem sm={9}>
                <h4>100% Genuine</h4>
                <h4>The majority have suffered alternation in some form, buying to injected humour, or randomised words which desktop publishing packages.</h4>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem sm={4}></GridItem>
        </GridContainer>
      </div>
      {/* our values end */}
      {/* style is reflection start */}
      <div className={classNames(classes.main, classes.mainRaised)} id="reflection_section">
        <div className={classes.coloredSection} style={{paddingTop: '150px', paddingBottom: '250px', }}>
          <Container maxWidth={false} style={{ maxWidth: "60%", marginTop: '100px' }} >
            <div style={{backgroundColor: '#2E3192', height: '500px', width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '50px'}}>
              <img style={{position: 'absolute', zIndex: '10'}} src="./img/reflection_bg.png"></img>
              <img style={{position: 'absolute', zIndex: '20'}} src="./img/reflection_img.png"></img>
              <GridContainer style={{width: '100%'}}>
                <GridItem sm={6}></GridItem>
                <GridItem sm={6}>
                  <h4 className={classes.title} style={{ color: 'white' }}>ABOUT US</h4>
                  <h2 className={classes.title} style={{color: 'white'}}>Style is a Reflection of your attitude & your Personality</h2>
                  <h4 className={classes.title} style={{ color: 'white' }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered laternation in some form, buying to injected humour, or randomised words which don't look even many desktop publishing packages.</h4>    
                </GridItem>
              </GridContainer>
            </div>
          </Container>
        </div>
      </div>
      {/* style is reflection end */}
      {/* expert start */}
      <div className={classNames(classes.main, classes.mainRaised)} id="expert_section">
        <Container maxWidth={false} style={{ maxWidth: "70%", marginTop: '100px', marginBottom: '150px' }} >
          <GridContainer alignItems="center" direction="column">
            <h4 className={classes.title} style={{ color: '#2E3192' }}>MEET OUR EXPERTS</h4>
            <h2 className={classes.title} style={{color: 'black'}}>The amazing women behind Beautyness</h2>
          </GridContainer>
          <GridContainer style={{marginTop: '50px'}}>
            <GridItem sm={4}>
              <GridContainer alignItems="center" direction="column">
                <img src="./img/expert1.png"></img>
                <h3 className={classes.title} style={{ color: 'black' }}>Sherlin D'Cruz</h3>
                <h4 className={classes.title} style={{ color: '#5C8692', marginTop: '0px' }}>BEAUTYNESS EXPERT</h4>
                <h4 className={classes.title} style={{ color: 'black', textAlign: 'center', marginTop: '5px' }}>I must explain to you how all this mistaken idea of denouncing pleasure that will ar aise praising pain</h4>

                <GridContainer>
                  <IconButton color="default" ><FacebookIcon /></IconButton>
                  <IconButton color="default" ><TwitterIcon /></IconButton>
                  <IconButton color="default" ><InstagramIcon /></IconButton>
                </GridContainer>
              </GridContainer>
            </GridItem>
            <GridItem sm={4}>
              <GridContainer alignItems="center" direction="column">
                <img src="./img/expert2.png"></img>
                <h3 className={classes.title} style={{ color: 'black' }}>Maria Sharapova</h3>
                <h4 className={classes.title} style={{ color: '#5C8692', marginTop: '0px' }}>BEAUTYNESS EXPERT</h4>
                <h4 className={classes.title} style={{ color: 'black', textAlign: 'center', marginTop: '5px' }}>I must explain to you how all this mistaken idea of denouncing pleasure that will ar aise praising pain</h4>

                <GridContainer>
                  <IconButton color="default" ><FacebookIcon /></IconButton>
                  <IconButton color="default" ><TwitterIcon /></IconButton>
                  <IconButton color="default" ><InstagramIcon /></IconButton>
                </GridContainer>
              </GridContainer>
            </GridItem>
            <GridItem sm={4}>
              <GridContainer alignItems="center" direction="column">
                <img src="./img/expert3.png"></img>
                <h3 className={classes.title} style={{ color: 'black' }}>Angeline Jenifer</h3>
                <h4 className={classes.title} style={{ color: '#5C8692', marginTop: '0px' }}>BEAUTYNESS EXPERT</h4>
                <h4 className={classes.title} style={{ color: 'black', textAlign: 'center', marginTop: '5px' }}>I must explain to you how all this mistaken idea of denouncing pleasure that will ar aise praising pain</h4>

                <GridContainer>
                  <IconButton color="default" ><FacebookIcon /></IconButton>
                  <IconButton color="default" ><TwitterIcon /></IconButton>
                  <IconButton color="default" ><InstagramIcon /></IconButton>
                </GridContainer>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </Container>
      </div>
      {/* expert end */}
      {/* testimonial start */}
      <div className={classNames(classes.main, classes.mainRaised)} id="testimonial_section">
        <div className={classes.coloredSection} style={{paddingTop: '50px', paddingBottom: '150px', }}>
          <GridContainer justify="center">
            <h4 className={classes.title} style={{ color: '#2E3192' }}>TESTIMONIALS</h4>
          </GridContainer>
          <GridContainer justify="center">
            <h2 className={classes.title}>What our Customers says...</h2>
          </GridContainer>
          <Container maxWidth={false} style={{ maxWidth: "60%", marginTop: '100px' }} >
            <GridContainer>
              <GridItem sm={6}>
                <div style={{backgroundColor: 'white', padding: '50px'}}>"It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The pointer ofu sing Lorem of distribution it look like readable English."</div>
                <div style={{backgroundColor: '#2E3192', paddingTop: '20px', paddingBottom: '20px'}}>
                  <GridContainer>
                    <GridItem sm={1}></GridItem>
                    <GridItem sm={2}>
                      <img src="./img/testimonial-avatar1.jpg"></img>
                    </GridItem>
                    <GridItem sm={6}>
                      <Rating name="read-only" value={4.5} readOnly />
                      <p style={{color: 'white', marginBottom: '0px'}}>James Williams</p>
                      <p style={{color: 'white', fontSize: '12px', marginBottom: '0px'}}>United States</p>
                    </GridItem>
                    <GridItem sm={2} style={{display: 'flex', alignItems: 'center'}}>
                      <img src="./img/testimonial-icon.png"></img>
                    </GridItem>
                    <GridItem sm={1}></GridItem>
                  </GridContainer>
                </div>
              </GridItem>
              <GridItem sm={6}>
                <div style={{backgroundColor: 'white', padding: '50px'}}>"It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The pointer ofu sing Lorem of distribution it look like readable English."</div>
                <div style={{backgroundColor: '#2E3192', paddingTop: '20px', paddingBottom: '20px'}}>
                  <GridContainer>
                    <GridItem sm={1}></GridItem>
                    <GridItem sm={2}>
                      <img src="./img/testimonial-avatar2.png"></img>
                    </GridItem>
                    <GridItem sm={6}>
                      <Rating name="read-only" value={4.5} readOnly />
                      <p style={{color: 'white', marginBottom: '0px'}}>Lico Jessica</p>
                      <p style={{color: 'white', fontSize: '12px', marginBottom: '0px'}}>United Kingdom</p>
                    </GridItem>
                    <GridItem sm={2} style={{display: 'flex', alignItems: 'center'}}>
                      <img src="./img/testimonial-icon.png"></img>
                    </GridItem>
                    <GridItem sm={1}></GridItem>
                  </GridContainer>
                </div>
              </GridItem>
            </GridContainer>
          </Container>
        </div>
      </div>
      {/* testimonial end */}
      {/* share us start */}
      <div className={classNames(classes.main, classes.mainRaised)} id="shareus_section">
        <Container maxWidth={false} style={{ maxWidth: "60%", marginTop: '150px' }} >
          <GridContainer spacing={2}>
            <GridItem sm={5}>
              <GridContainer direction="column">
                <h4 className={classes.title} style={{ color: '#2E3192' }}>SHARE US</h4>
                <h2 className={classes.title}>Follow us on</h2>
                <h2 style={{marginTop: '0px'}} className={classes.title}>Instagram</h2>
                <h4 className={classes.title} style={{ color: 'black' }}>There are many variations of passages of Lorem ipsum available, but the majority have suffered alternation in some form, buying to inejcted humour, or randomised words many desktop publishing packages.</h4>
                <img src="./img/shareus1.png"></img>
              </GridContainer>
            </GridItem>
            <GridItem sm={1}></GridItem>
            <GridItem sm={6}>
              <GridContainer direction="column">
                <img style={{marginBottom: '50px'}} src="./img/shareus2.png"></img>
                <img src="./img/shareus3.png"></img>
              </GridContainer>
            </GridItem>
          </GridContainer>

          <GridContainer justify="center">
            <Button style={{marginBottom: '0px', marginTop: '50px'}} color="primary">Contact us</Button>
          </GridContainer>
        </Container>
      </div>
      {/* share us end */}
      {/* footer start */}
      <div className={classNames(classes.main, classes.mainRaised)} id="footer_section">
        <div className={classes.sections}>
          <Container maxWidth={false} style={{ maxWidth: "80%" }} >

            {/* Footer */}

            <GridContainer justify="space-between" style={{ marginTop: "100px" }}>
              <GridItem sm={6}>
                <img src="/img/CoDS_Black_Logo.png"></img>
                <p>Lorem ipsum dolor sit amet consectetur adipising elit aliquam</p>
                <GridContainer style={{ color: "#2E3192", width: "50%" }} justify="space-between">
                  <GridItem>
                    <IconButton color="primary" ><TwitterIcon /></IconButton>
                    <IconButton color="primary" ><InstagramIcon /></IconButton>
                    <IconButton color="primary" ><FacebookIcon /></IconButton>
                    <IconButton color="primary" ><LinkedInIcon /></IconButton>
                    <IconButton color="primary" ><YouTubeIcon /></IconButton>
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem sm={2}>
                <h4 className={classes.title} style={{ color: "#170F49" }}>Product</h4>
                <p><Link href="/" >Features</Link></p>
                <p><Link href="/" >Pricing</Link></p>
                <p><Link href="/" >Case studies</Link></p>
                <p><Link href="/" >Reviews</Link></p>
                <p><Link href="/" >Updates</Link></p>
              </GridItem>
              <GridItem sm={2}>
                <h4 className={classes.title} style={{ color: "#170F49" }}>Company</h4>
                <p><Link href="/" >About</Link></p>
                <p><Link href="/" >Contact Us</Link></p>
                <p><Link href="/" >Careers</Link></p>
                <p><Link href="/" >Culture</Link></p>
                <p><Link href="/" >Blog</Link></p>
              </GridItem>

              <GridItem sm={2}>
                <h4 className={classes.title} style={{ color: "#170F49" }}>Support</h4>
                <p><Link href="/" >Getting Started</Link></p>
                <p><Link href="/" >Helper center</Link></p>
                <p><Link href="/" >Server status</Link></p>
                <p><Link href="/" >Report a bug</Link></p>
                <p><Link href="/" >Chat support</Link></p>
              </GridItem>
            </GridContainer>

            {/* Footer */}
            {/* </div> */}
          </Container>
        </div>
      </div>
      <Grid container  >
        <Grid item xs={4} style={{display:"flex",justifyContent:'center'}}>
          <Typography>Copyright © 2023 CODS</Typography>
        </Grid>
        <Grid item xs={7} >
          <p style={{float:"right"}} ><Link href="/" >All Rights Reserved</Link> | <Link href="/" >Terms Condition</Link> | <Link href="/" >Privacy Policy</Link></p>
        </Grid>
        <Grid item xs={1} ></Grid>
      </Grid>
      {/* footer end */}
    </div>
  );
}
