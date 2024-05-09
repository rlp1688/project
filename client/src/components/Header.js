import React,{useState} from "react";
import {HiOutlineBars3} from "react-icons/hi2";
import user from '../Assets/user1.png'
import { useNavigate } from "react-router-dom";
import{
    Box,
    Drawer,
   // ListItems,
    ListItemButton,
    Button,
    ListItemText,
    List,

}from "@mui/material";
import { Link } from "react-router-dom";
/*import HomeIcon from "@mui/material/Home"
import InfoIcon from "@mui/material/Info"
import CommentRoundedIcon from "@mui/material/CommentRounded"
import PhoneRoundedIcon from "@mui/material/PhoneRounded"*/

const Navbar = ()=> {

    const navigate = useNavigate();
    const linkStyle = {
        
        textDecoration: 'none',
        
      };

      const linkStyle1 = {
       
        
        
      };
      
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
        <span style={{ marginRight: '1rem', fontWeight:'bold' }} onClick={() => navigate("/user")}>Home</span>
        <span style={{ marginRight: '1rem', fontWeight:'bold' }} onClick={() => navigate("/tasks")}>Tasks</span>
        <span style={{ marginRight: '1rem', fontWeight:'bold' }} onClick={() => navigate("/login")}>Logout</span>
        <span style={{ marginRight: '1rem' }} onClick={() => navigate("/studentprofile")}>
            <img src={user} alt='' />
        </span>
            
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
            <ListItemButton onClick={() => navigate("/login")}>
                <Button variant="contained" color="primary">
                    <ListItemText>Logout</ListItemText>
                </Button>
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/user")}>
                <Button variant="contained" color="primary">
                    <ListItemText>Home</ListItemText>
                </Button>
            </ListItemButton>
            
            <ListItemButton onClick={() => navigate("/tasks")}>
                <Button variant="contained" color="primary">
                    <ListItemText>Tasks</ListItemText>
                </Button>
            </ListItemButton>
        </List>
    </Drawer>
    
    </>
};

export default Navbar;