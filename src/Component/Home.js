import React from "react";
import {  Grid, Box } from "@mui/material";

function Home({ onQuizStart }) {
  return (

    <>
      <Box>
       {/* <marquee>This is basic example of marquee</marquee>   */}
        <Grid container spacing={5} style={{ marginTop: "2rem" , width:"50%", margin:"auto  "}}>
          <Grid item xs={12} md={12} style={{margin:"auto" , position:"relative", textAlign:"center", color:"white"}}>
            <img src={require("../Assest/quiz.jpg")} alt="" style={{borderRadius:"9px"}}  onClick={onQuizStart}/>
            Start Quiz
          </Grid>
        </Grid>
       
      </Box>
    </>
  );
}

export default Home;
