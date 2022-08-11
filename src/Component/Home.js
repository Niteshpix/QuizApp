import React from "react";
import { Button, Grid, Box } from "@mui/material";

function Home({ onQuizStart }) {
  return (
    <>
      <Box>
        <Grid container spacing={5} style={{ marginTop: "2rem" }}>
          <Grid item xs={12} md={12}>
            <img src={require("../Assest/quiz.jpg")} alt="" style={{borderRadius:"9px"}} />
          </Grid>
        </Grid>
        <Button
          style={{
            backgroundColor: "blue",
            color: "white",
            fontSize: "1rem",
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
            margin: "auto",
          alignItems: "center",
          }}
          onClick={onQuizStart}
        >
          Start Quiz
        </Button>
      </Box>
    </>
  );
}

export default Home;
