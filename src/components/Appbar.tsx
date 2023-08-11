import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HistoryIcon from "@mui/icons-material/History";
import GroupsIcon from "@mui/icons-material/Groups";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import logo from "./assets/image.png";
import logo1 from "./assets/rfimag.png";
import logo3 from "./assets/tcimg.png";
import GridViewIcon from "@mui/icons-material/GridView";
import { BsMessenger } from "react-icons/bs";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import HomeIcon from "@mui/icons-material/Home";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import Home from "./Home";

import RightSidebar from "./RightSidebar";
import { appBar, draw, drawContainer, facebook, messageIcon, rightSide, search, searchCont } from "./Style";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileOpe, setMobileOpe] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerToggl = () => {
    setMobileOpe(!mobileOpe);
  };
  const imgData=[{
    id: 1,
    text:"RCB Fanclub",
    icon: 'RF'
  },
  {
    id: 2,
    text: "Test Championship",
    icon:'TC' 
  },]
  const data = [
    {
      id: 0,
      text: "Virat Kohli",
      icon: <img src={logo} alt="alt" />,
    },
    {
      id: 1,
      text: "Friends",
      icon: <GroupIcon sx={{ fontSize: "25px", color: "white" }} />,
    },
    {
      id: 2,
      text: "Marketplace",
      icon: <StorefrontIcon sx={{ fontSize: "25px", color: "white" }} />,
    },
    {
      id: 3,
      text: "Most Recent",
      icon: <HistoryIcon sx={{ fontSize: "25px", color: "white" }} />,
    },
    {
      id: 4,
      text: "Groups",
      icon: <GroupsIcon sx={{ fontSize: "25px", color: "white" }} />,
    },
    {
      id: 5,
      text: "Watch",
      icon: <OndemandVideoIcon sx={{ fontSize: "25px", color: "white" }} />,
    },
    {
      id: 6,
      text: "See More",
      icon: <ExpandCircleDownIcon sx={{ fontSize: "29px", color: "white" }} />,
    },
  ];
  const drawe=( <Box sx={drawContainer}><RightSidebar/></Box>)

  const drawer = (
    <Box sx={draw}>
      <Box sx={searchCont}>
        <FacebookIcon
          sx={facebook}
        />
        <TextField
          id="search"
          type="search"
          placeholder="search"
          value={searchTerm}
          size="small"
          onChange={handleChange}
          sx={search}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Divider />
      <List>
        {data.map((tex, index) => (
          <ListItem key={tex.id} disablePadding sx={{marginTop:'12px'}}>
            <ListItemButton>
              <ListItemIcon>{tex.icon}</ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary={tex.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{background:'white'}}  />
     
      <Toolbar/>
      <Typography sx={{color:'white',fontFamily:'robot'}}>Your shortcuts</Typography>
      <List>
        {imgData.map((tex, index) => (
          <ListItem key={tex.id} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                {index % 2 === 0 ?<Box component='img' src={logo1} alt="alt"/> :<Box component='img' src={logo3}/>}
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary={tex.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#181820",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={appBar}
          >
            <HomeIcon />
            <OndemandVideoIcon />
            <StorefrontIcon />
            <GroupsIcon />
            <VideogameAssetIcon />
          </Box>
          <Box
            sx={messageIcon}
          >
            <GridViewIcon sx={{ fontSize: "30px" }} />
            <BsMessenger size={"30px"} />
            <CircleNotificationsIcon sx={{ fontSize: "32px" }} />
            <Box
              component="img"
              src={logo}
              alt="alt"
              sx={{ marginTop: "-5px" }}
            />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggl}
            sx={{ mr: 2, display: { sm: "none" }, marginLeft: { xs: "5%" } }}
          >
            <GridViewIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
         
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>



        <Drawer
          container={container}
          anchor="right"
          variant="temporary"
          open={mobileOpe}
          onClose={handleDrawerToggl}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none",lg:'none',md:'none',xl:'none' },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawe}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none",lg:'none',md:'none',xl:'none' },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawe}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor:'#070000',
          height:{
            xl: '100vh',
            lg: "100vh",
            md: "100vh",
            sm: "100vh",
            xs: "100vh",
          },
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          marginTop:'60px',
          padding:'20px'
        }}
      >
        {/* <Toolbar /> */}
        <Home/>
        <Box sx={rightSide}>
        <RightSidebar />
        </Box>
      </Box>
    </Box>
  );
}
