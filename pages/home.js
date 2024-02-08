import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
import Router from "next/router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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
      
      <div className={classNames(classes.main, classes.mainRaised)} id="intro_section">
        <div className={classes.coloredSection+' '+classes.headerMarginTop}>
          <GridContainer>
            <GridItem sm={2}></GridItem>
            <GridItem sm={5} className={classes.columnCenter}>
              <GridContainer direction="column" justify="center" className={classes.autoHeight}>
                <h5 className={classes.blueText} >WELCOME TO CODS BEAUTY SPA</h5>
                <h1>Beauty is</h1>
                <h1>power a smile</h1>
                <h1>is its sword.</h1>
                <h5>There are many variation of passages are lpsum available,</h5>
                <h5>majority have suffered alternation in some form.</h5>
                <Button color="primary">Make a reservation</Button>
              </GridContainer>
            </GridItem>
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
      <div className={classNames(classes.main, classes.mainRaised)} id="service_section">
        <div className={classes.sections}>
          <Container maxWidth={false} style={{ maxWidth: "90%" }} >
            <GridContainer justify="center" style={{ marginTop: "50px" }} id="contact_section">
              <h4 className={classes.title} style={{ color: '#2E3192' }}>OUR SERVICES</h4>
            </GridContainer>
            <GridContainer align="center" direction="column">
              <h2 className={classes.title}>We are Experienced in making you</h2>
              <h2 className={classes.title}>very Beautiful</h2>
            </GridContainer>
            <GridContainer spacing={8}>
              <GridItem sm={4}>
                <img className={classes.fullWidth} src="./img/treat1.jpg"></img>
                <h2>Spa Massage</h2>
                <h6>If you are going to use a passage offer</h6>
                <h6>Lorem Ipsum, you need to be sure</h6>
                <h6>hidden in the middle of text</h6>
                <DefaultButton variant="outlined">Read more</DefaultButton>
              </GridItem>
              <GridItem sm={4}>
                <img className={classes.fullWidth} src="./img/treat2.jpg"></img>
                <h2>Hair Beauty</h2>
                <h6>If you are going to use a passage offer</h6>
                <h6>Lorem Ipsum, you need to be sure</h6>
                <h6>hidden in the middle of text</h6>
                <DefaultButton variant="outlined">Read more</DefaultButton>
              </GridItem>
              <GridItem sm={4}>
                <img className={classes.fullWidth} src="./img/treat3.jpg"></img>
                <h2>Body Treatments</h2>
                <h6>If you are going to use a passage offer</h6>
                <h6>Lorem Ipsum, you need to be sure</h6>
                <h6>hidden in the middle of text</h6>
                <DefaultButton variant="outlined">Read more</DefaultButton>
              </GridItem>
            </GridContainer>
          </Container>
        </div>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)} id="intro_section">
        <div className={classes.coloredSection + ' ' + classes.aboutPadding}>
          <GridContainer>
            <GridItem sm={6} style={{paddingLeft: '200px', paddingRight: '100px'}}>
                <h4 className={classes.title} style={{ color: '#2E3192' }}>ABOUT US</h4>
                <h2>The Beauty is about</h2>
                <h2>being Comfortable</h2>
                <h2>in your own skin!</h2>
                <h4 style={{marginTop: '50px'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alternation in some form, buying to injected humour, or randomised words which don't look even many desktop publishing packages.</h4>
                <GridContainer style={{marginTop: '80px'}}>
                  <GridItem sm={4}>
                    <div style={{backgroundColor: 'white', border: 'solid black 1px', borderRadius: '10px', display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '20px', paddingBottom: '20px',}}>
                      <img src="./img/about-icon1.png"></img>
                      <h3 style={{marginTop: '10px', marginBottom: '0px'}}>Beauty</h3>
                      <h3 style={{marginTop: '10px', marginBottom: '0px'}}>Experts</h3>
                    </div>
                  </GridItem>
                  <GridItem sm={4}>
                    <div style={{backgroundColor: 'white', border: 'solid black 1px', borderRadius: '10px', display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '20px', paddingBottom: '20px',}}>
                      <img src="./img/about-icon2.png"></img>
                      <h3 style={{marginTop: '10px', marginBottom: '0px'}}>Great</h3>
                      <h3 style={{marginTop: '10px', marginBottom: '0px'}}>Services</h3>
                    </div>
                  </GridItem>
                  <GridItem sm={4}>
                    <div style={{backgroundColor: 'white', border: 'solid black 1px', borderRadius: '10px', display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '20px', paddingBottom: '20px',}}>
                      <img src="./img/about-icon3.png"></img>
                      <h3 style={{marginTop: '10px', marginBottom: '0px'}}>100%</h3>
                      <h3 style={{marginTop: '10px', marginBottom: '0px'}}>Genuine</h3>
                    </div>
                  </GridItem>
                </GridContainer>
            </GridItem>
            <GridItem sm={6}>
              <div className={classes.purpleRect}></div>
              <div className={classes.aboutImgContainer}>
                <img className={classes.aboutImg} src="./img/about.jpg"></img>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)} id="greatness_section">
        <Container maxWidth={false} style={{ maxWidth: "90%" }} >
          <GridContainer justify="center" style={{ marginTop: "50px" }}>
            <h4 className={classes.title} style={{ color: '#2E3192' }}>GREATNESS FROM NATURE</h4>
          </GridContainer>
          <GridContainer justify="center">
            <h1>Featured Products</h1>
          </GridContainer>
          <GridContainer spacing={8} style={{marginTop: '50px'}}>
            <GridItem sm={4}>
              <img src="./img/feature-1.png" style={{width: '100%'}}></img>
              <GridContainer alignItems="center" direction="column">
                <Rating style={{marginTop: '30px'}} name="read-only" value={5} readOnly />
                <h2>Liquid Foundation</h2>
                <h2 style={{marginTop: '0px'}}>$22</h2>
              </GridContainer>
            </GridItem>
            <GridItem sm={4}>
              <img src="./img/feature-2.png" style={{width: '100%'}}></img>
              <GridContainer alignItems="center" direction="column">
                <Rating style={{marginTop: '30px'}} name="read-only" value={5} readOnly />
                <h2>Softening Cream</h2>
                <h2 style={{marginTop: '0px'}}>$22</h2>
              </GridContainer>
            </GridItem>
            <GridItem sm={4}>
              <img src="./img/feature-1.png" style={{width: '100%'}}></img>
              <GridContainer alignItems="center" direction="column">
                <Rating style={{marginTop: '30px'}} name="read-only" value={5} readOnly />
                <h2>Liquid Foundation</h2>
                <h2 style={{marginTop: '0px'}}>$22</h2>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </Container>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)} id="service_section">
        <Container maxWidth={false} style={{ maxWidth: "60%" }} >
          <GridContainer justify="center" style={{ marginTop: "50px" }}>
            <h4 className={classes.title} style={{ color: '#2E3192' }}>OUR SERVICES</h4>
          </GridContainer>
          <GridContainer align="center" direction="column">
            <h2 className={classes.title}>We are Experienced in making you</h2>
            <h2 className={classes.title}>very Beautiful</h2>
          </GridContainer>
          <GridContainer>
            <GridItem style={{padding: '0px'}} sm={6}>
              <img style={{width: '100%'}} src="./img/service-1.jpg"></img>
            </GridItem>
            <GridItem sm={6} style={{padding: '30px'}}>
              <GridContainer justify="space-between">
                <GridItem sm={3}>
                  <p>Face masks</p>
                </GridItem>
                <GridItem sm={3}>
                  <p>from $48.00</p>
                </GridItem>
              </GridContainer>
              <p>The versions have evolved over the sometimes by accident.</p>
              <Divider style={{marginBottom: '10px'}} />
              <GridContainer justify="space-between">
                <GridItem sm={3}>
                  <p>Full body massage</p>
                </GridItem>
                <GridItem sm={3}>
                  <p>from $54.00</p>
                </GridItem>
              </GridContainer>
              <p>The versions have evolved over the sometimes by accident.</p>
              <Divider style={{marginBottom: '10px'}} />
              <GridContainer justify="space-between">
                <GridItem sm={3}>
                  <p>Geothermal spa</p>
                </GridItem>
                <GridItem sm={3}>
                  <p>from $54.00</p>
                </GridItem>
              </GridContainer>
              <p>The versions have evolved over the sometimes by accident.</p>
              <Divider style={{marginBottom: '10px'}} />
              <GridContainer justify="space-between">
                <GridItem sm={3}>
                  <p>Sauna relax</p>
                </GridItem>
                <GridItem sm={3}>
                  <p>from $73.00</p>
                </GridItem>
              </GridContainer>
              <p>The versions have evolved over the sometimes by accident.</p>
              <Divider style={{marginBottom: '30px'}} />
              <DefaultButton variant="outlined" style={{padding: '15px'}}>GET AN APPOINTMENT</DefaultButton>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem sm={6} style={{padding: '30px'}}>
              <GridContainer justify="space-between">
                <GridItem sm={3}>
                  <p>Face masks</p>
                </GridItem>
                <GridItem sm={3}>
                  <p>from $48.00</p>
                </GridItem>
              </GridContainer>
              <p>The versions have evolved over the sometimes by accident.</p>
              <Divider style={{marginBottom: '10px'}} />
              <GridContainer justify="space-between">
                <GridItem sm={3}>
                  <p>Full body massage</p>
                </GridItem>
                <GridItem sm={3}>
                  <p>from $54.00</p>
                </GridItem>
              </GridContainer>
              <p>The versions have evolved over the sometimes by accident.</p>
              <Divider style={{marginBottom: '10px'}} />
              <GridContainer justify="space-between">
                <GridItem sm={3}>
                  <p>Geothermal spa</p>
                </GridItem>
                <GridItem sm={3}>
                  <p>from $54.00</p>
                </GridItem>
              </GridContainer>
              <p>The versions have evolved over the sometimes by accident.</p>
              <Divider style={{marginBottom: '10px'}} />
              <GridContainer justify="space-between">
                <GridItem sm={3}>
                  <p>Sauna relax</p>
                </GridItem>
                <GridItem sm={3}>
                  <p>from $73.00</p>
                </GridItem>
              </GridContainer>
              <p>The versions have evolved over the sometimes by accident.</p>
              <Divider style={{marginBottom: '30px'}} />
              <DefaultButton variant="outlined" style={{padding: '15px'}}>GET AN APPOINTMENT</DefaultButton>
            </GridItem>
            <GridItem style={{padding: '0px'}} sm={6}>
              <img style={{width: '100%'}} src="./img/service-2.jpg"></img>
            </GridItem>
          </GridContainer>
        </Container>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)} id="discount_section">
        <div className={classes.coloredSection}>
          <Container maxWidth={false} style={{ maxWidth: "60%" }} >
            <GridContainer>
              <GridItem sm={6}>
                <h4 className={classes.title} style={{ color: '#2E3192' }}>FLAT DISCOUNT</h4>
                <h1>Claim upto 50%</h1>
                <h1>offer on the most</h1>
                <h1>popular services...</h1>
                <h4>There are many variations of passages of Lorem ipsum available, but the majority have suffered alternation in some form, buying to injected humour, or randomised words.</h4>
                <GridContainer spacing={0}>
                  <GridItem sm={8} style={{padding:'0px'}}>
                    <div style={{backgroundColor: 'white', paddingTop: '20px', paddingLeft: '30px', paddingBottom: '20px', paddingRight: '30px', height: '180px'}}>
                      <GridContainer>
                        <GridItem sm={3}>
                          <MailOutlineIcon style={{fontSize: '48px'}} />
                        </GridItem>
                        <GridItem sm={9}>
                          <p>MAIL US:</p>
                          <p>info@beautyness.com</p>
                        </GridItem>
                      </GridContainer>
                      <GridContainer style={{marginTop: '10px'}}>
                        <GridItem sm={3}>
                          <PhoneOutlinedIcon style={{fontSize: '48px'}} />
                        </GridItem>
                        <GridItem sm={9}>
                          <p>CALL US:</p>
                          <p>(+22) 123 4568 009</p>
                        </GridItem>
                      </GridContainer>
                    </div>
                  </GridItem>
                  <GridItem sm={4} style={{padding:'0px'}}>
                    <div style={{backgroundColor: '#2E3192', height: '180px', paddingTop: '20px', paddingLeft: '30px', paddingBottom: '20px', paddingRight: '30px', height: '180px'}}>
                      <GridContainer justify="center" align="center" direction="column" className={classes.fullHeight}>
                        <p style={{color: 'white'}}>-GET FLAT-</p>
                        <span>
                          <span style={{color: 'white', fontSize: '50px'}}>50</span>
                          <span style={{color: 'white'}}>%  </span>
                        </span>
                        <p style={{color: 'white'}}>Discount</p>
                      </GridContainer>
                    </div>
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem sm={6}>
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
              </GridItem>
            </GridContainer>
          </Container>
        </div>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)} id="private_store_section">
        <GridContainer>
          <GridItem sm={6} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <div style={{paddingLeft: '150px', paddingRight: '150px', }}>
              <h4 className={classes.title} style={{ color: '#2E3192' }}>WHAT INCLUDES?</h4>
              <h2>Private Store</h2>
              <h4>It is a long established fact that a reader will be distracted by the readable content of a page when  looking as its layout. The point of using Lorem Ipsum is that is has a more-or-less normal these content here', making it look like readable English.</h4>
              <DefaultButton variant="outlined" style={{marginTop: '50px'}}>Visit our private store</DefaultButton>
              </div>
          </GridItem>
          <GridItem sm={6}>
            <img src="./img/private-store.png"></img>
          </GridItem>
        </GridContainer>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)} id="benefits_section">
        <Container maxWidth={false} style={{ maxWidth: "60%" }} >
          <GridContainer justify="center">
            <h4 className={classes.title} style={{ color: '#2E3192' }}>OUR AWESOME BENEFITS</h4>
          </GridContainer>
          <GridContainer justify="center">
            <h2>Actually what you'll get from</h2>
          </GridContainer>
          <GridContainer style={{marginTop: '50px'}}>
            <GridItem sm={4}>
              <img src="./img/benefit-icon.png"></img>
              <h3>Optimised Energy</h3>
              <h3>Efficiency</h3>
              <h4>The point of using Lorem Ipsum is that</h4>
              <h4>using making it look like readable.</h4>
            </GridItem>
            <GridItem sm={4}>
              <img src="./img/benefit-icon.png"></img>
              <h3>Multi-faceted</h3>
              <h3>Water Filtration</h3>
              <h4>The point of using Lorem Ipsum is that</h4>
              <h4>using making it look like readable.</h4>
            </GridItem>
            <GridItem sm={4}>
              <img src="./img/benefit-icon.png"></img>
              <h3>Uncompromising Quality</h3>
              <h3>and Durability</h3>
              <h4>The point of using Lorem Ipsum is that</h4>
              <h4>using making it look like readable.</h4>
            </GridItem>
          </GridContainer>
          <GridContainer style={{marginTop: '20px'}}>
            <GridItem sm={4}>
              <img src="./img/benefit-icon.png"></img>
              <h3>An Ultra-Pampering Spa</h3>
              <h3>Experience</h3>
              <h4>The point of using Lorem Ipsum is that</h4>
              <h4>using making it look like readable.</h4>
            </GridItem>
            <GridItem sm={4}>
              <img src="./img/benefit-icon.png"></img>
              <h3>Easy Care for Unparalleled</h3>
              <h3>Enjoyment</h3>
              <h4>The point of using Lorem Ipsum is that</h4>
              <h4>using making it look like readable.</h4>
            </GridItem>
            <GridItem sm={4}>
              <img src="./img/benefit-icon.png"></img>
              <h3>Optimised Energy</h3>
              <h3>Efficiency</h3>
              <h4>The point of using Lorem Ipsum is that</h4>
              <h4>using making it look like readable.</h4>
            </GridItem>
          </GridContainer>
        </Container>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)} id="testimonial_section">
        <div className={classes.coloredSection} style={{paddingTop: '50px', paddingBottom: '150px', }}>
          <GridContainer justify="center">
            <h4 className={classes.title} style={{ color: '#2E3192' }}>TESTIMONIALS</h4>
          </GridContainer>
          <GridContainer justify="center">
            <h2>What our Customers says...</h2>
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
      <div className={classNames(classes.main, classes.mainRaised)} id="about_section">
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
    </div>
  );
}
