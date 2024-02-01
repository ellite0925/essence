import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
import Router from "next/router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Rating from '@material-ui/lab/Rating';
// @material-ui/icons
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Grid from '@material-ui/core/Grid';
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
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import CustomInput from "/components/CustomInput/CustomInput.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
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

const useStyles = makeStyles(theme => {
  return {
    ...styles,
    slideCard: {
      backgroundColor: "#F5F5F5",
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto"
    },
    coloredSection: {
      backgroundColor: '#EBF3F5',
      marginTop: '150px'
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
      top: '100px',
      zIndex: '10',
    },
    soraImg: {
      borderRadius: '38px',
      border: '0px solid #FFF',
    },
    absoluteWingContainer: {
      position: 'absolute',
      right: '0px',
      top: '200px',
      zIndex: '11',
    },
    wingImg: {
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
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      
      <div className={classNames(classes.main, classes.mainRaised)} id="about_section">
        <div className={classes.coloredSection}>
            <GridContainer>
              <GridItem sm={2}></GridItem>
              <GridItem sm={5}></GridItem>
              <GridItem sm={5}>
                <div className={classes.blueRect}>
                  <div className={classes.whiteBorderRect}></div>
                </div>
              </GridItem>
            </GridContainer>

            <div className={classes.absoluteSoraContainer}>
              <img className={classes.soraImg} src="./img/pexels-sora-shimazaki.jpg" />
            </div>
            <div className={classes.absoluteWingContainer}>
              <img className={classes.wingImg} src="./img/pngwing.png" />
            </div>
        </div>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)} id="about_section">
        <div className={classes.sections}>
          <Container maxWidth={false} style={{ maxWidth: "80%" }} >
            {/* Contact US */}

            <GridContainer justify="center" style={{ marginTop: "50px" }} id="contact_section">
              <h4 className={classes.title} style={{ color: '#2E3192' }}>CODS ISLAND</h4>
            </GridContainer>
            <GridContainer justify="center">
              <h2 className={classes.title}>Contact  <span style={{ color: '#2E3192' }}>Us </span></h2>
            </GridContainer>
            <GridContainer>
              <Card>
                <CardBody>
                  <GridContainer>
                    <GridItem sm={6} style={{ backgroundColor: "#1D1D1E", borderRadius: "5px", overflow: "hidden" }}>
                      <h3 className={classes.title} style={{ color: "white" }}>Contact Information</h3>
                      <h6 className={classes.title} style={{ color: "white" }}>Say something to start a live chat!</h6>
                      <GridContainer style={{ color: "white", marginLeft: "0px", marginTop: "100px" }}><PhoneIcon></PhoneIcon><p style={{ marginBottom: "10px" }}>&nbsp;&nbsp;+1 (888) 252-0411</p></GridContainer>
                      <GridContainer style={{ color: "white", marginLeft: "0px" }}><MailIcon></MailIcon><p style={{ marginBottom: "10px" }}>&nbsp;&nbsp;info@cods.land, info@drdeanhowell.com, support@cods.land</p></GridContainer>
                      <GridContainer style={{ color: "white", marginLeft: "0px" }}><RoomIcon></RoomIcon><p style={{ marginBottom: "10px" }}>&nbsp;&nbsp;185 Howell Canyon Road, Tonasket, Washington 98855</p></GridContainer>
                      <GridContainer justify="space-between" style={{ color: "white", marginLeft: "0px", marginTop: "150px", marginBottom: "50px", width: "20%" }}>
                        <TwitterIcon ></TwitterIcon>
                        <InstagramIcon></InstagramIcon>
                        <FacebookIcon></FacebookIcon>
                      </GridContainer>

                      {/* <div style={{width: "138px", height: "138px", backgroundColor: "#484848", borderRadius: "138px", left: "60%", top: "25%", position: "relative", opacity: "0.5", zIndex: "20"}}></div> */}
                      <GridContainer justify="flex-end" style={{position: "relative"}}>
                          <div style={{width: "138px", height: "138px", backgroundColor: "#484848", borderRadius: "138px", transform: "translateX(-50%) translateY(-150%)", position: "absolute", zIndex: "70", opacity: "0.5"}}></div>
                          <div style={{width: "269px", height: "269px", backgroundColor: "#0A0D84", borderRadius: "269px", transform: "translateX(30%) translateY(-70%)", position: "absolute", zIndex: "60"}}></div>
                      </GridContainer>
                    </GridItem>
                    <GridItem sm={6}>
                      <GridContainer>
                        <GridItem sm={6}>
                          <CustomInput
                            labelText="First Name..."
                            id="f_name"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem sm={6}>
                          <CustomInput
                            labelText="Last Name..."
                            id="l_name"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem sm={6}>
                          <CustomInput
                            labelText="Email..."
                            id="email"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem sm={6}>
                          <CustomInput
                            labelText="Phone Number..."
                            id="phone"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem>
                          <h4 className={classes.title}>Select Subject?</h4>
                        </GridItem>
                      </GridContainer>
                      <FormControlLabel
                        control={
                          <Radio
                            checked={selectedEnabled === "b"}
                            onChange={() => setSelectedEnabled("b")}
                            value="b"
                            name="radio button enabled"
                            aria-label="B"
                            icon={
                              <FiberManualRecord className={classes.radioUnchecked} />
                            }
                            checkedIcon={
                              <FiberManualRecord className={classes.radioChecked} />
                            }
                            classes={{
                              checked: classes.radio,
                              root: classes.radioRoot
                            }}
                            color="primary"
                          />
                        }
                        classes={{
                          label: classes.label,
                          root: classes.labelRoot
                        }}
                        label="General Inquiry"
                      />
                      <FormControlLabel
                        control={
                          <Radio
                            checked={selectedEnabled === "a"}
                            onChange={() => setSelectedEnabled("a")}
                            value="b"
                            name="radio button enabled"
                            aria-label="B"
                            icon={
                              <FiberManualRecord className={classes.radioUnchecked} />
                            }
                            checkedIcon={
                              <FiberManualRecord className={classes.radioChecked} />
                            }
                            classes={{
                              checked: classes.radio,
                              root: classes.radioRoot
                            }}
                            color="primary"
                          />
                        }
                        classes={{
                          label: classes.label,
                          root: classes.labelRoot
                        }}
                        label="General Inquiry"
                      />
                      <FormControlLabel
                        control={
                          <Radio
                            checked={selectedEnabled === "c"}
                            onChange={() => setSelectedEnabled("c")}
                            value="b"
                            name="radio button enabled"
                            aria-label="B"
                            icon={
                              <FiberManualRecord className={classes.radioUnchecked} />
                            }
                            checkedIcon={
                              <FiberManualRecord className={classes.radioChecked} />
                            }
                            classes={{
                              checked: classes.radio,
                              root: classes.radioRoot
                            }}
                            color="primary"
                          />
                        }
                        classes={{
                          label: classes.label,
                          root: classes.labelRoot
                        }}
                        label="General Inquiry"
                      />
                      <GridContainer justify="flex-end" style={{ marginTop: "100px" }}>
                        <Button round color="primary">Send Message</Button>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridContainer>
            {/* Contact US */}

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
    </div>
  );
}
