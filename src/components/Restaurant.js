import { Search } from '@material-ui/icons'
import React,{useEffect, useState} from 'react'
import "./Restaurant.css"
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FoodCards from './FoodCards';
import db from './firebase';

function Restaurant() {
    const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: "#ffffff",
          borderRadius:"1rem",
          marginLeft:"1rem",
          padding:"0 1rem",
        },
      }));
      const options = [
        'Relevance',
        'Popularity',
        'Hygiene',
        'Delivery Speed',
      ];
      const classes = useStyles();
      const [anchorEl, setAnchorEl] = React.useState(null);
      const [selectedIndex, setSelectedIndex] = React.useState(1);
    
      const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    const [restaurant , setRestaurant] = useState([])
    useEffect(()=>{
        db.collection("restaurants").onSnapshot(snapshot =>{
            setRestaurant(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    restaurant:doc.data()
                }
            )))
        })

    },[])
    return (
        <div className="restaurant">
            <div className="restaurant_header">
                <div className="restaurant_input">
                    <Search/>
                    <input placeholder="Search Restaurant, recipies and order it online" type="text"/>
                </div>
                <div className={classes.root}>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="Sort By:"
          onClick={handleClickListItem}
        >
          <ListItemText primary="Sort By:" secondary={options[selectedIndex]} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>

            </div>
            <div className="restaurant_body">
                {
                    restaurant.map( restaurant =>(
                        <FoodCards id={restaurant.id} key={restaurant.id} logo={restaurant.restaurant.logo} name={restaurant.restaurant.name} price={restaurant.restaurant.price} rating={restaurant.restaurant.rating} time={restaurant.restaurant.time}
                        desc={restaurant.restaurant.description}
                        metaData={restaurant.restaurant.strongDescription}  active={false}/>

                    ))
                }
                

                
                

             
            </div>
        </div>
    )
}

export default Restaurant
