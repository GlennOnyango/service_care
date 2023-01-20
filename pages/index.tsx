import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

export default function Home() {
  const homeImage = "/home.jpg";
  return (
    <Grid container>
      
      <Grid item xs={12}>
        <Stack
          direction={"column"}
          paddingLeft={2}
          sx={{
            backgroundImage: `url('${homeImage}')`,
            minHeight: "70vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Navbar />

          <Box
            bgcolor={"white"}
            marginLeft={4}
            paddingTop={2}
            paddingLeft={4}
            paddingRight={4}
            height={"40vh"}
            width={"35vw"}
          >
            <Typography variant="h4" textAlign={"center"} marginBottom={2}>
              The premium service Provider
            </Typography>
            <Typography variant="body1" textAlign={"center"} marginBottom={4}>
              We are a professional service provider with hundreds of
              testimonials over the years. You can see the services we offer and
              select a worker from a various diverse options and be sure of
              quality work.
            </Typography>

            <Stack direction={"row"} justifyContent={"center"} spacing={2}>
              <Button variant="outlined">Check Our Services</Button>
              <Button variant="outlined">Book A Worker</Button>
            </Stack>
          </Box>
        </Stack>
      </Grid>

      <Grid item xs={12} padding={4}>
        <Typography
          variant="h4"
          textAlign={"center"}
          sx={{ textDecoration: "overline purple" }}
        >
          {" "}
          Service Preview{" "}
        </Typography>

        <Box paddingTop={2}>
          <Stack direction={"row"} spacing={2}>
            <ServiceCard
              title="Cleaning Services"
              imageLink="/cleaningService.jpg"
              description="It takes just a look through our testimonials to identify that we have mastered the art of cleaning. We are flexible in our approach and you will get a quote through our e-platform saving you time and making your life easy."
              quote=""
              testimonials=""
            />
            <ServiceCard
              title="Baby Sitting"
              imageLink="/BabySitter.jpg"
              description="It takes just a look through our testimonials to identify that we have mastered the art of cleaning. We are flexible in our approach and you will get a quote through our e-platform saving you time and making your life easy."
              quote=""
              testimonials=""
            />
            <ServiceCard
              title="Random Fixes"
              imageLink="/manualLabour.jpg"
              description="It takes just a look through our testimonials to identify that we have mastered the art of cleaning. We are flexible in our approach and you will get a quote through our e-platform saving you time and making your life easy."
              quote=""
              testimonials=""
            />
            <ServiceCard
              title="Day Care"
              imageLink="/DayCare.jpg"
              description="It takes just a look through our testimonials to identify that we have mastered the art of cleaning. We are flexible in our approach and you will get a quote through our e-platform saving you time and making your life easy."
              quote=""
              testimonials=""
            />
          </Stack>

          <Box display={"flex"} justifyContent={"center"} padding={4}>
            <Button variant="outlined">See More Services</Button>
          </Box>
        </Box>
      </Grid>



    </Grid>
  );
}
