import React from 'react';
//components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import Button from "/components/CustomButtons/Button.js";
import Badge from "/components/Badge/Badge.js";
//icon
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
//@material-ui/core components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
//other
import { useSnackbar } from "notistack";
import Rating from '@material-ui/lab/Rating';
import classNames from "classnames";
import { BACKEND_URL } from "../../AppConfigs";
import Router from "next/router";
const { convert } = require('html-to-text');


const useStyles = makeStyles(theme => {
  return {
    cursor: {
      cursor: 'pointer'
    },
    ellipsis: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: 2, // Adjust the number of lines to fit your desired height
      WebkitBoxOrient: 'vertical',
      minHeight: '44px'
    },
    titleEllipsis: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: 1, // Adjust the number of lines to fit your desired height
      WebkitBoxOrient: 'vertical',
      height: '40px'
    }
  }
});


export default function productCard(props) {
  const classes = useStyles();
  //snackbar
  const snackbar = useSnackbar();

  const addToCart = () => {
    if (props.value.public)
      props.handleAddToCart(props.value);
    else
      snackbar.enqueueSnackbar("Purchase membership please", {
        variant: "info",
      });
  }

  const handleGotoCodsland = () => {
    const url = `https://cods.land/products/productDetails?id=${props.id}&url=${BACKEND_URL}/shop/products/${props.id}/image`;
    Router.push(url);
  }
  
  return (
      <GridItem sm={4}>
        <Card style={{ backgroundColor: "#F8F8F8"}}>
          <CardBody>
            <div style={{position:'absolute', right: '0', top: '0px'}}>
              {/* <Button color="warning">{props.categoryTitle}</Button> */}
              {props.category && props.category.title && <Badge color="warning" size="medium">{props.category.title}</Badge>}
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }} >
              {(props.value && props.value.image_url) ?
              (<img src={props.value.image_url} alt="..." style={{ width: "15vw", height: "25vh", cursor: 'pointer'}} onClick={() => { Router.push({pathname: '/products/productDetails', query: {id:props.id, url:props.value.image_url}}) }}></img>) : 
              (<img src={`${BACKEND_URL}/shop/products/${props.id}/image`} alt="..." style={{ width: "15vw", height: "25vh", cursor: 'pointer'}} onClick={() => { Router.push({pathname: '/products/productDetails', query: {id:props.id, url:`${BACKEND_URL}/shop/products/${props.id}/image`}})}}></img>)}
            </div>
            <h3 className={classes.title + " " + classes.titleEllipsis} style={{ color: "#2E3192" }}>{props.title}</h3>
            <p className={classes.ellipsis}>{convert(props.description)}</p>
            <Rating name="read-only" value={4} readOnly />
            <Grid container direction="row" justify="space-between" alignItems="flex-end">
              <div style={{display: 'flex', alignItems: 'center', height: '60px'}}>
                {props.value.public ? (
                  <h2 className={classes.title} style={{ color: "#2E3192" }}>{props.price}</h2>
                ) : (
                  <div style={{marginTop: '15px', marginBottom: '5px', cursor: 'pointer'}} onClick={handleGotoCodsland}>
                    <Badge color="warning" size="medium"><h2 style={{ margin: '0px', fontSize: '12px' }}>Members only</h2></Badge>
                  </div>
                  // <Badge color="warning" size="medium"><p style={{fontSize: '12px', margin: '0px'}}>Members only</p></Badge>
                )}
              </div>
              <p className={classNames(classes.title, classes.cursor)} style={{ display: "flex" }} onClick={addToCart}><ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>Add to Cart</p>
            </Grid>
          </CardBody>
        </Card>
      </GridItem>
  )
}