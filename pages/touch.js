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
      
      {/* touch start */}
      <div className={classNames(classes.main, classes.mainRaised)} id="aboutus_section">
        <div className={classes.deepColoredSection} style={{height: '350px', marginTop: '150px', paddingTop: '50px'}}>
          <GridContainer alignItems="center" direction="column">
            <h4 className={classes.title} style={{ color: 'white' }}>GET IN TOUCH WITH US</h4>
            <h2 className={classes.title} style={{color: 'white'}}>We Are Ready To Assist </h2>
            <h2 className={classes.title} style={{color: 'white'}}>You In 24X7</h2>
          </GridContainer>
        </div>
      </div>
      {/* touch end */}
      {/* let's talk start */}
      <div className={classNames(classes.main, classes.mainRaised)} id="ourvalues_section">
        <Container maxWidth={false} style={{ maxWidth: "60%", marginTop: '100px', marginBottom: '100px' }} >
          <GridContainer>
            <GridItem sm={6}>
              <img style={{position: 'absolute', zIndex: '20', left: '-20px', top: '50px'}} src="./img/touch.jpg"></img>
              <img style={{position: 'absolute', zIndex: '10'}} src="./img/touch_bg.png"></img>
            </GridItem>
            <GridItem sm={6}>
              <h4 className={classes.title} style={{ color: '#2E3192' }}>Let's Talk</h4>
              <h2 className={classes.title} style={{color: 'black', marginBottom: '0px'}}>Our Friendly Team</h2>
              <h2 className={classes.title} style={{color: 'black', marginTop: '20px'}}>Assists Promptly</h2>
              <h4 style={{marginBottom: '0px'}}>We're here to answer your questions and support your path to wellness.</h4>
              <div style={{display: 'flex', marginTop: '30px'}}>
                <img src="./img/touch_icon1.png"></img>
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
                  <p style={{fontSize: '20px'}}>Visit Us:</p>
                  <p>NO.09A, DOWNTOWN, SAN DIEAGO, USA</p>
                </div>
              </div>
              <div style={{display: 'flex', marginTop: '20px'}}>
                <img src="./img/touch_icon2.png"></img>
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
                  <p style={{fontSize: '20px'}}>Drop Us:</p>
                  <p>SUPPORT@BEAUTYNESS.COM</p>
                </div>
              </div>
              <div style={{display: 'flex', marginTop: '20px'}}>
                <img src="./img/touch_icon3.png"></img>
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
                  <p style={{fontSize: '20px'}}>Call Us:</p>
                  <p>CALL: 1-800-123-9999</p>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </Container>
      </div>
      {/* let's talk end */}
      {/* submit inquiry start */}
      <div className={classNames(classes.main, classes.mainRaised)} id="reflection_section">
        <div className={classes.coloredSection} style={{paddingTop: '30px', paddingBottom: '100px', }}>
          <Container maxWidth={false} style={{ maxWidth: "60%", marginTop: '100px' }} >
            <GridContainer justify="center">
              <h4 className={classes.title} style={{ color: '#2E3192' }}>Want to Know About a Product?</h4>
            </GridContainer>
            <GridContainer justify="center">
              <h2 className={classes.title}>Submit Your Inquiry</h2>
            </GridContainer>
            <GridContainer justify="center">
              <h4 style={{marginBottom: '0px'}}>We're here to help, and your questions matter to us. Please fill out the form below, and we'll</h4>
            </GridContainer>
            <GridContainer justify="center">
              <h4 style={{marginBottom: '0px', marginBottom: '20px'}}>get back to you as soon as possible.</h4>
            </GridContainer>


            <Card style={{padding: '50px'}}>
              <TextField
                id="input-with-icon-textfield"
                variant="outlined"
                placeholder="Name"
                style={{marginBottom: '20px'}}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                style={{marginBottom: '20px'}}
                id="input-with-icon-textfield"
                variant="outlined"
                placeholder="Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                style={{marginBottom: '20px'}}
                id="input-with-icon-textfield"
                variant="outlined"
                placeholder="Phone"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                style={{marginBottom: '20px'}}
                id="input-with-icon-textfield"
                variant="outlined"
                placeholder="Service You Need"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ImportContactsOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                style={{marginBottom: '20px'}}
                id="input-with-icon-textfield"
                variant="outlined"
                multiline
                rows={4}
                placeholder="Any Note For Us"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EditOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button style={{marginBottom: '20px'}} color="primary">Get an appointment</Button>
            </Card>
          </Container>
        </div>
      </div>
      {/* submit inquiry end */}
      {/* footer start */}
      <div className={classNames(classes.main, classes.mainRaised)} id="footer_section">
        <div className={classes.sections}>
          <Container maxWidth={false} style={{ maxWidth: "80%" }} >
            {/* Footer */}
            <GridContainer justify="space-between" style={{ marginTop: "0px" }}>
              <GridItem sm={6}>
                <img src="/img/CoDS_Black_Logo.png"></img>
                <GridContainer>
                  <GridItem sm={8}>
                    <p style={{fontSize: '20px', marginTop: '30px'}}>The Essence of Life</p>
                    <p>The Essence of Life is your gateway to holistic health and wellness, offering healing solutions and a supportive community.</p>
                  </GridItem>
                </GridContainer>
                {/* <GridContainer style={{ color: "#2E3192", width: "50%" }} justify="space-between">
                  <GridItem>
                    <IconButton color="primary" ><TwitterIcon /></IconButton>
                    <IconButton color="primary" ><InstagramIcon /></IconButton>
                    <IconButton color="primary" ><FacebookIcon /></IconButton>
                    <IconButton color="primary" ><LinkedInIcon /></IconButton>
                    <IconButton color="primary" ><YouTubeIcon /></IconButton>
                  </GridItem>
                </GridContainer> */}
              </GridItem>
              <GridItem sm={2}>
                <h4 className={classes.title} style={{ color: "#170F49" }}>Landings</h4>
                <p><Link href="/" >Home</Link></p>
                <p><Link href="/" >Products</Link></p>
                <p><Link href="/" >Services</Link></p>
              </GridItem>
              <GridItem sm={2}>
                <h4 className={classes.title} style={{ color: "#170F49" }}>Company</h4>
                <p><Link href="/" >Home</Link></p>
                <p><Link href="/" >Careers</Link></p>
                <p><Link href="/" >Services</Link></p>
              </GridItem>

              <GridItem sm={2}>
                <h4 className={classes.title} style={{ color: "#170F49" }}>Resources</h4>
                <p><Link href="/" >Blog</Link></p>
                <p><Link href="/" >Products</Link></p>
                <p><Link href="/" >Services</Link></p>
              </GridItem>
            </GridContainer>

            {/* Footer */}
            {/* </div> */}
          </Container>
        </div>
      </div>
      <Grid container  >
        <Grid item xs={4} style={{display:"flex",justifyContent:'center'}}>
          <Typography>All rights reserved.</Typography>
        </Grid>
      </Grid>
      {/* footer end */}
    </div>
  );
}
