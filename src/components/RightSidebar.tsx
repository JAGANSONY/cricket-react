import { Box, Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { Component } from 'react'
import logo7 from "./assets/iccimage.png";
import logo8 from "./assets/Vector5.png";
import CampaignIcon from '@mui/icons-material/Campaign';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import logo0 from "./assets/anu.png";
import logo1 from "./assets/mandhana.png";
import logo2 from "./assets/dhoni.png";
import logo3 from "./assets/hardhik.png";
import logo4 from "./assets/aus.png";
import logo5 from "./assets/subhamgil.png";
import logo6 from "./assets/klrahul.png";
const data = [
    {
      id: 0,
      text: "Anushka Sharma",
      icon:  <Box
      component="img"
      src={logo0}
      alt="alt"
      sx={{ marginTop: "-5px" }}
    />,
    },
    {
      id: 1,
      text: "Smriti Mandhana",
      icon:  <Box
      component="img"
      src={logo1}
      alt="alt"
      sx={{ marginTop: "-5px" }}
    />,
    },
    {
      id: 2,
      text: "MS Dhoni",
      icon: <Box
      component="img"
      src={logo2}
      alt="alt"
      sx={{ marginTop: "-5px" }}
    />,
    },
    {
      id: 3,
      text: "Hardik Pandiya",
      icon: <Box
      component="img"
      src={logo3}
      alt="alt"
      sx={{ marginTop: "-5px" }}
    /> ,
    },
    {
      id: 4,
      text: "ellyse perry",
      icon: <Box
      component="img"
      src={logo4}
      alt="alt"
      sx={{ marginTop: "-5px" }}
    /> ,
    },
    {
      id: 5,
      text: "Shubhman Gill",
      icon: <Box
      component="img"
      src={logo5}
      alt="alt"
      sx={{ marginTop: "-5px" }}
    /> ,
    },
    {
      id: 6,
      text: "KL Rahul",
      icon: <Box
      component="img"
      src={logo6}
      alt="alt"
      sx={{ marginTop: "-5px" }}
    /> ,
    },
  ];
export default class RightSidebar extends Component {
  render() {
    return (
      <Box>
        <Card  sx={{ maxWidth:'80%',backgroundColor: "#181820",padding:'25px'}}>
          <Typography sx={{color:'white'}}>Your Pages and profiles</Typography>
          <Box sx={{display:"flex",flexDirection:'row',gap:2}}>
          <Box component="img" sx={{marginTop:'5px'}} src={logo7} alt="alt" />
          <Typography sx={{color:'white',marginTop:'12px'}}>ICC Officials</Typography>
          <CampaignIcon sx={{color:'white',marginTop:'12px'}}/>
          </Box>
        </Card>
        <Card  sx={{ maxWidth:'80%',backgroundColor: "#181820",padding:'25px',marginTop:'25px'}}>
          <Typography sx={{color:'white'}}>Birthdays</Typography>
          <Box sx={{display:"flex",flexDirection:'row',gap:2}}>
          <Box component="img" sx={{marginTop:'5px'}} src={logo8} alt="alt" />
          <Typography sx={{color:'white',marginTop:'12px'}}>Anushka and 2 others have birthdays today.</Typography>
         
          </Box>
        </Card>
        <Card  sx={{ maxWidth:'80%',backgroundColor: "#181820",padding:'25px',marginTop:'25px'}}>
           <Box sx={{display:"flex",flexDirection:'row',gap:2,justifyContent:'space-between'}}>
        
          <Typography sx={{color:'white',}}>Contacts</Typography>
          <Box sx={{display:"flex",flexDirection:'row',gap:1}}>
           <MissedVideoCallIcon sx={{color:'white'}}/>
           <SearchIcon  sx={{color:'white'}}/>
           <SettingsIcon sx={{color:'white'}}/>
           </Box>
          </Box>
          <List>
        {data.map((tex, index) => (
          <ListItem key={tex.id} disablePadding sx={{marginTop:'12px',alignItems:'center'}}>
               <ListItemButton>
              <ListItemIcon>{tex.icon}</ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary={tex.text} />
              </ListItemButton>
          </ListItem>
        ))}
      </List>
        </Card>
      </Box>
    )
  }
}
