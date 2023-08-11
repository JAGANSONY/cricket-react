import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React, { Component } from "react";
import logo from "./assets/virat.png";
import logo1 from "./assets/rohit.png";
import logo2 from "./assets/surya.png";
import logo3 from "./assets/pant.png";
import logo4 from "./assets/indian.png";
import logo6 from "./assets/imageteam.png";

import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import logo5 from "./assets/image.png";
import VideocamIcon from "@mui/icons-material/Videocam";
import CollectionsIcon from "@mui/icons-material/Collections";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { cardCont, divider, homeCont, log1, log2, logoCont, miniCont, text, videoCont } from "./Style";

class Home extends Component {
  render() {
    return (
     
        <Box>
          <Card
            sx={homeCont}
          >
            <CardContent>
              <Box
                sx={cardCont}
              >
                <Box sx={{ display: "flex" }}>
                  <LocalLibraryIcon sx={{ color: "white" }} />
                  <Typography sx={{ color: "white" }}>Stories</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <SubscriptionsIcon sx={{ color: "white" }} />
                  <Typography sx={{ color: "white" }}>Reels</Typography>
                </Box>
              </Box>
              <Divider sx={divider} />
              <Box
                sx={logoCont}
              >
                <Box
                  component="img"
                  sx={log1}
                  src={logo}
                  alt="alt"
                />
                <Box
                  component="img"
                  sx={log2}
                  src={logo1}
                  alt="alt"
                />
                <Box
                  component="img"
                  sx={log2}
                  src={logo2}
                  alt="alt"
                />
                <Box
                  component="img"
                  sx={log2}
                  src={logo3}
                  alt="alt"
                />
              </Box>
            </CardContent>
          </Card>
          <Box
            sx={miniCont}
          >
            <Box component="img" src={logo5} alt="alt" />
            <Typography
              sx={text}
            >
              what's on your mind
            </Typography>
          </Box>
          <Box
            sx={videoCont}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <VideocamIcon sx={{ color: "white" }} />
              <Typography sx={{ color: "white",fontSize:{ xl: "15px", lg: "15px", md: "15px", sm: "12px", xs: "10px" }, }}>Live Video</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CollectionsIcon sx={{ color: "white" }} />
              <Typography sx={{ color: "white",fontSize:{ xl: "20px", lg: "20px", md: "10px", sm: "12px", xs: "10px" }  }}>Photo/Video</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <TagFacesIcon sx={{ color: "white" }} />
              <Typography sx={{ color: "white",fontSize:{ xl: "20px", lg: "20px", md: "10px", sm: "12px", xs: "10px" }  }}>Feeling/Activity</Typography>
            </Box>
          </Box>
          <Card
            sx={{
              maxWidth: {
                xl: "45%",
                lg: "45%",
                md: "45%",
                sm: "95%",
                xs: "100%",
              },
              backgroundColor: "#181820",
              padding: "10px",
              marginTop: "15px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <Box component="img" src={logo4} alt="alt" />
              <Box>
                <Typography sx={{ color: "white" }}>
                  Indian Cricket Team
                </Typography>
                <Typography sx={{ color: "white" }}>5h</Typography>
              </Box>
            </Box>
            <Box sx={{ marginTop: "5px" }}>
              <Typography sx={{ color: "white" }}>
                India has been touring Australia since 1947, but all that
                changed after winning the first and third Tests in Adelaide and
                Melbourne, respectively.
              </Typography>
              <Box
                component="img"
                sx={{ marginTop: "5px", width: "100%" }}
                src={logo6}
                alt="alt"
              />
            </Box>
          </Card>
        </Box>
      
    );
  }
}
export default Home;
