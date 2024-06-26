import React, { useState, useEffect } from "react";
//components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
//icon
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
//@material-ui/core components
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles } from "@material-ui/core/styles";
//redux
import { useSelector } from "react-redux";
//custom
import Rating from '@material-ui/lab/Rating';
import { Divider } from '@material-ui/core';
import { BACKEND_URL } from "../../AppConfigs";
import Router from "next/router";
import axios from 'axios';
const { convert } = require('html-to-text');

import styles from "/styles/jss/nextjs-material-kit/pages/components.js";
const useStyles = makeStyles(theme => {
  return {
    ...styles,
    cursor: {
      cursor: 'pointer'
    },
    price: {
      fontSize: '18px',
      fontFamily: 'satoshi',
      fontWeight: '700',
      lineHeight: '34px'
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

export default function ProductList(props) {
  //redux
  const redux_token = useSelector((state) => state.authentication.token);
  //other
  const classes = useStyles();
  //state
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(props.product.count);
  }, []);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value*1);
  }

  const handleMinus = (e) => {
    let q = quantity;
    let new_q = (q-1 >= 1 ? (q-1) : 1);
    setQuantity(new_q);
    props.handleTotalChange((new_q-q)*props.product.price);

    let cartProducts = localStorage.getItem('cartProducts');
    cartProducts = JSON.parse(cartProducts);
    cartProducts.forEach(element => {
      if ( element._id == props.id ) {
        element.count = new_q;
      }
    });
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }

  const handlePlus = (e) => {
    let q = quantity;
    let new_q = q+1;
    setQuantity(new_q);
    props.handleTotalChange((new_q-q)*props.product.price);

    let cartProducts = localStorage.getItem('cartProducts');
    cartProducts = JSON.parse(cartProducts);
    cartProducts.forEach(element => {
      if ( element._id == props.id ) {
        element.count = new_q;
      }
    });
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }

  return (
    <div>
      <Divider />
      <GridContainer>
        <GridItem sm={2}>
          <div style={{marginLeft: '20px', height: '15vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            {props.product && props.product._id && 
              (props.product.image_url ? 
              <img src={props.product.image_url} alt="..." style={{ width: "8vw", height: "12vh", cursor: "pointer"}}  onClick={() => { Router.push({pathname: '/products/productDetails', query: {id:props.product._id, url:props.product.image_url}})}}></img> : 
              <img src={`${BACKEND_URL}/shop/products/${props.product._id}/image`} alt="..." style={{ width: "8vw", height: "12vh", cursor: "pointer"}} onClick={() => { Router.push({pathname: '/products/productDetails', query: {id:props.product._id, url:`${BACKEND_URL}/shop/products/${props.product._id}/image`}})}}></img>)
            }
            {/* <img src="/img/airbuds.png" alt="..." style={{ width: "auto", height: "25vh"}}></img> */}
          </div>
        </GridItem>
        <GridItem sm={7}>
          <GridContainer direction="column" justify="space-between" style={{height: '100%'}}>
            <div>
              {props.product && props.product.title && <h3 className={classes.title + " " + classes.titleEllipsis} style={{ color: "#2E3192" }}>{props.product.title}</h3>}
              {props.product && props.product.description && <p className={classes.ellipsis}>{convert(props.product.description)}</p>}
            </div>
            <Rating name="read-only" value={4} readOnly />
          </GridContainer>
          
        </GridItem>
        <GridItem sm={3} style={{paddingRight: '30px', paddingTop: '10px', paddingBottom: '10px'}}>
          <GridContainer direction="column" justify="space-between" style={{height: '100%', paddingRight: '15px'}}>
            <div style={{display:'flex', justifyContent: 'flex-end'}}>
              <DeleteOutlineOutlinedIcon className={classes.cursor} onClick={() => {props.handleDeleteProduct(props.id, props.index, (props.product && props.product.price) ? (props.product.price*quantity) : 0)}} />
            </div>
            <div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
              {props.product && props.product.price && <h4 className={classes.price} style={{ color: "#2E3192" }}>${props.product.price}</h4>}
              {props.product && props.product.price && <h4 className={classes.price} style={{ color: "#2E3192" }}>(${(props.product.price*quantity).toFixed(2)})</h4>}
              <TextField
                // type="number"
                style={{width: '115px'}}
                value={quantity}
                onChange={handleQuantityChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton onClick={handleMinus} edge="start">
                        <RemoveIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePlus} edge="end">
                        <AddIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <Divider style={{marginBottom: '10px'}} />
    </div>
  )
}
