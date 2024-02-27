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
                <h5 className={classes.blueText} >Innovative Healing Solutions</h5>
                <h1 style={{marginBottom: '30px', fontFamily: 'satoshi', fontSize: '65px', color: 'black'}}>The Essence of Life</h1>
                <h5>Step into a world where vibrant health and well-being are not just goals,</h5>
                <h5>but a way of life. Welcome to the Essence of Life, where innovation and</h5>
                <h5>holistic wellness unite to rewrite your health story.</h5>
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
              <h4 className={classes.title} style={{ color: '#2E3192' }}>Customer Favorites</h4>
            </GridContainer>
            <GridContainer align="center" direction="column">
              <h2 className={classes.title}>Discover Our Best-Selling</h2>
              <h2 className={classes.title}>Healing Marvels</h2>
            </GridContainer>
            <GridContainer spacing={8}>
              <GridItem sm={4}>
                <img className={classes.fullWidth} src="./img/treat1.jpg"></img>
                <h2 style={{marginBottom: '0px'}}>Modern Injection Side</h2>
                <h2 style={{marginTop: '0px'}}>Effects Kit</h2>
                <h6>Crafted by ex-NASA scientists, this</h6>
                <h6>innovative radionic solution targets</h6>
                <h6>clotting issues tied to modern</h6>
                <h6>vaccines, frequently yielding relief</h6>
                <h6>within the first week.</h6>
                <DefaultButton variant="outlined">Read more</DefaultButton>
              </GridItem>
              <GridItem sm={4}>
                <img className={classes.fullWidth} src="./img/treat2.jpg"></img>
                <h2>Prayer Waters</h2>
                <h6>Elevate your healing journey with a</h6>
                <h6>powerful combo of the Vaxxinator</h6>
                <h6>bracelet and customized Prayer Waters,</h6>
                <h6>designed to counter the effects of</h6>
                <h6>experimental treatments.</h6>
                <DefaultButton variant="outlined">Read more</DefaultButton>
              </GridItem>
              <GridItem sm={4}>
                <img className={classes.fullWidth} src="./img/treat3.jpg"></img>
                <h2>Grander Water Technology</h2>
                <h6>Step into a world of pure, revitalizing</h6>
                <h6>water. Grander's transformative</h6>
                <h6>technology unlocks the magic of</h6>
                <h6>hydration,enriching your life with the</h6>
                <h6>benefits of perfectly structured water.</h6>
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
                <h4 className={classes.title} style={{ color: '#2E3192' }}>About The Essence of Life</h4>
                <h2>True Healing with Pure Health Products</h2>
                <h4 style={{marginTop: '50px'}}>Welcome to Essence of Life, your portal to cutting-edge health and wellness products. Founded by Dr. Dean Howell and Rebecca, our mission transcends the conventional healthcare approach. Unlike many in the field, we don't just prescribe supplements for sustenance; we advocate a holistic path to well-being. Our diverse range of products, from detoxification to specialized remedies, addresses the root causes of health issues. 
We've nurtured unique offerings and technologies, some available on our public store, while others await our community members. As sanctified healers, we extend an invitation to join our community and unlock exclusive resources. From perfected water technology to organic, low-carb bakery goods, we're dedicated to your transformative health journey. At the Essence of Life, wellness is not just a goal but a way of life.</h4>
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
            <h4 className={classes.title} style={{ color: '#2E3192' }}>Wide Range of Health Products</h4>
          </GridContainer>
          <GridContainer justify="center">
            <h1>Explore Our Innovative Medical</h1>
          </GridContainer>
          <GridContainer justify="center">
            <h1>Products for Wellness</h1>
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
            <h4 className={classes.title} style={{ color: '#2E3192' }}>Treatments by Our Health Care Products</h4>
          </GridContainer>
          <GridContainer align="center" direction="column">
            <h2 className={classes.title} style={{marginTop:'20px'}}>Revitalize Your Health with Our </h2>
            <h2 className={classes.title} style={{marginBottom: '50px', marginTop: '0px'}}>Comprehensive Healing Products</h2>
          </GridContainer>
          <GridContainer>
            <GridItem style={{padding: '0px'}} sm={6}>
              <img style={{width: '100%'}} src="./img/service-1.jpg"></img>
            </GridItem>
            <GridItem sm={6} style={{padding: '30px'}}>
              <GridContainer justify="space-between">
                <GridItem sm={3}>
                  <p>Parasite Infections</p>
                </GridItem>
                <GridItem sm={3}>
                  <p>from $48.00</p>
                </GridItem>
              </GridContainer>
              <p>Our products are designed to combat parasitic infections, suggesting that they may offer solutions for individuals dealing with such health issues.</p>
              <Divider style={{marginBottom: '10px'}} />
              <GridContainer justify="space-between">
                <GridItem sm={3}>
                  <p>Fungal Infections</p>
                </GridItem>
                <GridItem sm={3}>
                  <p>from $54.00</p>
                </GridItem>
              </GridContainer>
              <p>The presence of antifungals enzymes in our product range suggests they could be effective in treating fungal infections.</p>
              <Divider style={{marginBottom: '10px'}} />
              <GridContainer justify="space-between">
                <GridItem sm={3}>
                  <p>Detoxification</p>
                </GridItem>
                <GridItem sm={3}>
                  <p>from $54.00</p>
                </GridItem>
              </GridContainer>
              <p>The inclusion of detoxification products implies support for individuals seeking to rid their bodies of toxins and heavy metals.</p>
              <Divider style={{marginBottom: '10px'}} />
              <GridContainer justify="space-between">
                <GridItem sm={3}>
                  <p>Infections</p>
                </GridItem>
                <GridItem sm={3}>
                  <p>from $73.00</p>
                </GridItem>
              </GridContainer>
              <p>The products seem to target a range of infections, indicating potential benefits for those dealing with various types of infections.</p>
              <Divider style={{marginBottom: '30px'}} />
              <DefaultButton variant="outlined" style={{padding: '15px'}}>GET AN APPOINTMENT</DefaultButton>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem sm={6} style={{padding: '30px'}}>
              <GridContainer justify="space-between">
                <GridItem sm={3}>
                  <p>Bio-Chemical Agents</p>
                </GridItem>
                <GridItem sm={3}>
                  <p>from $48.00</p>
                </GridItem>
              </GridContainer>
              <p>Medicines tackle chemical, biological, and injected agents’ issues, offering solutions to harmful toxins and substances.</p>
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
          <Container maxWidth={false} style={{ maxWidth: "60%", paddingTop:'100px', paddingBottom: '100px ' }} >
            <GridContainer>
              <GridItem sm={6}>
                <h4 className={classes.title} style={{ color: '#2E3192' }}>Flat Discount</h4>
                <h1>Become a</h1>
                <h1>Member of</h1>
                <h1>Our Community</h1>
                <h4>To be part of this vibrant community and get access our private store, library of documents, video resources, social bulletin board, and the restricted information on products like Grander, we invite you to join our annual membership - currently priced at $100.</h4>
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
              <h4 className={classes.title} style={{ color: '#2E3192' }}>Discover More Healing Products</h4>
              <h2>Visit Our Private Store Now</h2>
              <h4>If you want to explore more healing products from our range, we offer that chance exclusively to our community members. They can visit our private store and discover the products that are not easily available in the market. </h4>
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
            <h4 className={classes.title} style={{ color: '#2E3192' }}>Why Buy From Our Store</h4>
          </GridContainer>
          <GridContainer justify="center">
            <h2>Benefits of Purchasing Our Products</h2>
          </GridContainer>
          <GridContainer justify="center">
            <h4>Discover unique healing solutions that work, from fungal freedom to infection protection.</h4>
            <h4>Our products help you achieve balance, vitality, and well-being.</h4>
          </GridContainer>
          <GridContainer style={{marginTop: '50px'}}>
            <GridItem sm={4}>
              <img src="./img/benefit-icon.png"></img>
              <h3>Holistic Approach</h3>
              <h4 style={{marginTop: '20px'}}>Our products embrace a holistic journey to well-being, delving beyond surface ailments to unearth the roots of health.</h4>
            </GridItem>
            <GridItem sm={4}>
              <img src="./img/benefit-icon.png"></img>
              <h3>Effective Antifungals</h3>
              <h4 style={{marginTop: '20px'}}>Step into a world where our antifungal wonders take on fungal foes, setting you on a path to radiant health and well-being.</h4>
            </GridItem>
            <GridItem sm={4}>
              <img src="./img/benefit-icon.png"></img>
              <h3>Detoxification Support</h3>
              <h4 style={{marginTop: '20px'}}>Let our products be your allies in detoxification, revitalizing your body, and bidding farewell to unwanted toxins and metals.</h4>
            </GridItem>
          </GridContainer>
          <GridContainer style={{marginTop: '20px'}}>
            <GridItem sm={4}>
              <img src="./img/benefit-icon.png"></img>
              <h3>Infection Management</h3>
              <h4 style={{marginTop: '20px'}}>From common culprits to uncommon adversaries, our products are your companions in the battle against various infections.</h4>
            </GridItem>
            <GridItem sm={4}>
              <img src="./img/benefit-icon.png"></img>
              <h3>Balanced Bliss</h3>
              <h4 style={{marginTop: '20px'}}>Discover the art of maintaining insulin equilibrium and savoring the feast of nutritional abundance to attain health.</h4>
            </GridItem>
            <GridItem sm={4}>
              <img src="./img/benefit-icon.png"></img>
              <h3>Harmful Agents Protection</h3>
              <h4 style={{marginTop: '20px'}}>We shield you from the world's chemical and biological intricacies, offering innovative solutions for overall well-being.</h4>
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
            <h2>Hear Stories of Our Healthy Clientele</h2>
          </GridContainer>
          <GridContainer justify="center">
            <h4 style={{marginBottom: '0px'}} className={classes.title}>Our customers' experiences speak volumes about the effectiveness of our healing products.</h4>
          </GridContainer>
          <GridContainer justify="center">
            <h4 style={{marginBottom: '0px'}} className={classes.title}>Discover how they've achieved a better quality of life with our health products.</h4>
          </GridContainer>
          <Container maxWidth={false} style={{ maxWidth: "60%", marginTop: '100px' }} >
            <GridContainer>
              <GridItem sm={6}>
                <div style={{backgroundColor: 'white', padding: '50px', minHeight: '200px'}}>"I've tried countless products, but the antifungal wonders here truly work! They've given me the confidence to embrace a life free from fungal infections."</div>
                <div style={{backgroundColor: '#2E3192', paddingTop: '20px', paddingBottom: '20px'}}>
                  <GridContainer>
                    <GridItem sm={1}></GridItem>
                    <GridItem sm={2}>
                      <img src="./img/testimonial-avatar1.jpg"></img>
                    </GridItem>
                    <GridItem sm={6}>
                      <Rating name="read-only" value={4.5} readOnly />
                      <p style={{color: 'white', marginBottom: '0px'}}>-	Linda M., Yoga Instructor</p>
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
                <div style={{backgroundColor: 'white', padding: '50px', minHeight: '200px'}}>"These remedies have been a game-changer for me. The detoxification support is exceptional, helping me feel refreshed and revitalized. I'm a believer!"</div>
                <div style={{backgroundColor: '#2E3192', paddingTop: '20px', paddingBottom: '20px'}}>
                  <GridContainer>
                    <GridItem sm={1}></GridItem>
                    <GridItem sm={2}>
                      <img src="./img/testimonial-avatar2.png"></img>
                    </GridItem>
                    <GridItem sm={6}>
                      <Rating name="read-only" value={4.5} readOnly />
                      <p style={{color: 'white', marginBottom: '0px'}}>-	John P., IT Specialist</p>
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
