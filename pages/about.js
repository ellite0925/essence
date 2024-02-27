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
            <h4 className={classes.title} style={{ color: 'white' }}>About The Essence of Life</h4>
            <h2 className={classes.title} style={{color: 'white'}}>True Healing with </h2>
            <h2 className={classes.title} style={{color: 'white'}}>Pure Health Products</h2>
            <ColorButton style={{width: '250px', marginTop: '30px'}} variant="outlined">Make a reservation</ColorButton>
          </GridContainer>
        </div>
      </div>
      {/* about us end */}
      {/* our values start */}
      <div className={classNames(classes.main, classes.mainRaised)} id="ourvalues_section">
        <Container maxWidth={false} style={{ maxWidth: "60%", marginTop: '100px', marginBottom: '100px' }} >
          <h3>Welcome to the Essence of Life, your trusted source for cutting-edge, alternative healing, health and wellness products. Founded by two dedicated professionals in the field, Dr. Dean Howell and Rebecca, the Essence of Life is not your typical pharmaceutical products ecommerce store. With a deep understanding of the importance of nutritional supplementation in the realm of health and well-being, our veteran founders are on a mission to provide you with healthcare products that work, addressing the root causes of health issues rather than just their symptoms.</h3>
          <h3>Unlike many in the naturopathic and nutritional fields, Dr. Howell and Rebecca do not just prescribe supplements to sustain their livelihoods. They believe in a holistic approach to health that minimizes dependence on supplementation. They have found that by incorporating the right blend of structural body work, detoxification, parasite, yeast, and fungus protocols, radionics, Grander technology, lifestyle modification, home or lifestyle improvements, and adopting a healthier way of living, healing becomes attainable.</h3>
          <h3>Our commitment to effective, cause-driven healing products sets us apart. Our curated range includes supplements for organ cleansing, infection elimination, parasite eradication, heavy metal removal, and more. What makes us unique is that we've developed proprietary products and technologies, realizing the results we've dreamed of since childhood. These offerings can be found on our public store site. At Essence of Life, we proudly offer products that are often hard to find or restricted from public sale.</h3>
          <h3>We are more than just a store; we are a community of sanctified healers and ministers who operate as Orthodox Catholic ministers. Our practice transcends state boundaries, and we exclusively serve CoDS members. To be part of our vibrant community and access our private store, library of documents, video resources, social bulletin board, and the restricted information on products like Grander, we invite you to join our annual membership, currently priced at $100. </h3>
          <h3>Our mission is to provide a unique and transformative experience, from perfected water technology to organic, low-carb bakery goods, and from non-grain herbs to cutting-edge solutions for complex health challenges. At the Essence of Life, we are dedicated to your well-being, and our offerings reflect our unwavering commitment to your health journey.</h3>
        </Container>
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
      {/* our values start */}
      <div className={classNames(classes.main, classes.mainRaised)} id="ourvalues_section">
        <GridContainer alignItems="center" style={{ marginTop: "50px" }} direction="column">
          <h4 className={classes.title} style={{ color: '#2E3192' }}>Our Guiding Values</h4>
          <h2 className={classes.title} style={{color: 'black'}}>Foundation for Your Wellness</h2>
          <h4 className={classes.title} style={{marginBottom: '0px'}}>At the Essence of Life, our journey is guided by a set of core values that shape our mission and the products and services we offer.</h4>
          <h4 className={classes.title} style={{marginTop:'20px'}}>We believe that these values not only define who we are but also serve as a compass, guiding us towards a common goal—your health and well-being.</h4>
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
                <h4>Holistic Wellness</h4>
                <h4>Essence of Life is committed to a holistic approach to wellness, addressing the root causes of health issues and providing products that promote overall well-being. They value the idea of treating the whole person, not just the symptoms.</h4>
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
                <h4>Innovation and Uniqueness</h4>
                <h4>The company places a strong emphasis on offering innovative medical products and solutions that may not be readily available elsewhere. They value uniqueness in their product offerings, such as proprietary remedies and technology.</h4>
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
                <h4>Customer Protection</h4>
                <h4>Essence of Life values the protection and well-being of its customers. They offer products to safeguard individuals against various health challenges, including toxins and harmful agents, and prioritize the welfare of their community members.</h4>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem sm={4}></GridItem>
        </GridContainer>
      </div>
      {/* our values end */}
      {/* expert start */}
      <div className={classNames(classes.main, classes.mainRaised)} id="expert_section">
        <Container maxWidth={false} style={{ maxWidth: "70%", marginTop: '100px', marginBottom: '150px' }} >
          <GridContainer alignItems="center" direction="column">
            <h4 className={classes.title} style={{ color: '#2E3192' }}>Meet Our Dedicated Founders</h4>
            <h2 className={classes.title} style={{color: 'black'}}>Dr. Dean Howell & Reverend Rebecca</h2>
            <h4 style={{marginBottom: '0px'}} className={classes.title}>Get to know the visionary founders behind the Essence of Life, Dr. Dean Howell and Reverend Rebecca,</h4>
            <h4 className={classes.title}>whose unconventional journeys led them to a unique approach to health and wellness.</h4>
          </GridContainer>
          <GridContainer style={{marginTop: '50px'}}>
            <GridItem sm={6}>
              <GridContainer alignItems="center" direction="column">
                <img src="./img/expert1.png"></img>
                <h3 className={classes.title} style={{ color: 'black' }}>Dr. Dean Howell</h3>
                {/* <h4 className={classes.title} style={{ color: '#5C8692', marginTop: '0px' }}>BEAUTYNESS EXPERT</h4> */}
                <h4 style={{ color: 'black', textAlign: 'center', marginTop: '5px' }}>A Naturopathic Physician since 1982, embarked on a mission to treat the underlying causes of health issues. Dissatisfied with the predominantly symptomatic relief approach in medicine, he developed NeuroCranial Restructuring, an innovative bio-mechanical manipulation technique. His passion for healing took him outside the commercial healthcare system, leading to the establishment of NCR-01, a not-for-profit private membership association. 
                  Recognizing the depth of his faith, he and Rev. Rebecca joined the Church of Hope as Ministers and Sanctified Healers, becoming Eastern Orthodox Catholic ministers in 2019. Under the Church of Divine Structure, their healing credentials are acknowledged globally.
                </h4>
                <GridContainer>
                  <IconButton color="default" ><FacebookIcon /></IconButton>
                  <IconButton color="default" ><TwitterIcon /></IconButton>
                  <IconButton color="default" ><InstagramIcon /></IconButton>
                </GridContainer>
              </GridContainer>
            </GridItem>
            <GridItem sm={6}>
              <GridContainer alignItems="center" direction="column">
                <img src="./img/expert3.png"></img>
                <h3 className={classes.title} style={{ color: 'black' }}>Angeline Jenifer</h3>
                {/* <h4 className={classes.title} style={{ color: '#5C8692', marginTop: '0px' }}>BEAUTYNESS EXPERT</h4> */}
                <h4 style={{ color: 'black', textAlign: 'center', marginTop: '5px' }}>A Brooklyn native, Reverend Rebecca Hart Malter initially explored unique talents, leading to government work as a psychic. However, her focus shifted to energy healing in the 1990s, where she specialized in massage with energy treatments for over 15 years. In 2013, she crossed paths with Dr. Howell, and their collaborative efforts revealed the synergy of their hands-on methods. 

As Dr. Howell concentrated on Howelling development, Rev. Rebecca channeled her professional baking background into creating delectable bakery products using Magic Flour developed by Rev. Peter Radatti. Together, they form a dynamic duo dedicated to transforming the world of health and wellness.
</h4>

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
            <h2 className={classes.title}>Hear Stories of Our Healthy Clientele</h2>
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
                <div style={{minHeight: '200px', backgroundColor: 'white', padding: '50px'}}>"I've tried countless products, but the antifungal wonders here truly work! They've given me the confidence to embrace a life free from fungal infections."</div>
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
                <div style={{minHeight: '200px', backgroundColor: 'white', padding: '50px'}}>"These remedies have been a game-changer for me. The detoxification support is exceptional, helping me feel refreshed and revitalized. I'm a believer!"</div>
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
      {/* testimonial end */}
      {/* share us start */}
      <div className={classNames(classes.main, classes.mainRaised)} id="shareus_section">
        <Container maxWidth={false} style={{ maxWidth: "60%", marginTop: '150px' }} >
          <GridContainer spacing={2}>
            <GridItem sm={5}>
              <GridContainer direction="column">
                <h4 className={classes.title} style={{ color: '#2E3192' }}>Stay Connected</h4>
                <h2 className={classes.title}>For Daily Updates, </h2>
                <h2 style={{marginTop: '0px'}} className={classes.title}>Follow Us on Instagram </h2>
                <h4 className={classes.title} style={{ marginBottom: '50px', color: 'black' }}>Join our Instagram community for daily wellness tips, exclusive product insights, and a vibrant dose of inspiration on your journey to a healthier you.</h4>
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
