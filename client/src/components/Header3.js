import React,{useState} from "react";
import {HiOutlineBars3} from "react-icons/hi2";
import{
    Box,
    Drawer,
   // ListItems,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    List,

}from "@mui/material";
/*import HomeIcon from "@mui/material/Home"
import InfoIcon from "@mui/material/Info"
import CommentRoundedIcon from "@mui/material/CommentRounded"
import PhoneRoundedIcon from "@mui/material/PhoneRounded"*/

const Navbar = ()=> {

   
     
      
    const [openMenu, setOpenMenu]= useState(false)
    /*const menuOption = [
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
            text:"About",
            icon:<InfoIcon/>
        },
        {
            text:"Testimonials",
            icon:<CommentRoundedIcon/>
        },
        {
            text:"Contact",
            icon:<PhoneRoundedIcon/>
        },
        {
            text:"Home",
            icon:<HomeIcon/>
        },
    ]*/

    return <>
    <nav>
        <div className="nav-loo-container">
        <h1  style={{ fontSize:'30px', fontWeight:'bold', marginBottom:'1.5rem'}}> මා ආ ගමන් මග​</h1>
        </div>
        <div className="navbar-links-container">
            
            
            
        </div>
        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={()=> setOpenMenu(true)}/>
        </div>
    </nav>

    <Drawer open ={openMenu} onClose={()=> setOpenMenu(false)}
    anchor="right">
        <Box 
        sx ={{width:250}}
        role="presentation"
        onClick={()=> setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
        ></Box>

        <List>
            
                <ListItemButton>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText/>
                </ListItemButton>
            
        </List>

    </Drawer>
    
    </>
};

export default Navbar;