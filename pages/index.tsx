import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/Testimonies";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const currencies = [
  {
    value: "Male",
  },
  {
    value: "Female",
  },
];

export default function Home() {
  const homeImage = "/home.jpg";
  const blackMaid = "/blackMaid.jpg";
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
          <Stack direction={"row"} justifyContent={"center"} spacing={2}>
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

      <Grid item container xs={12} paddingLeft={4}>
        <Grid item xs={6} padding={4}>
          <form>
            <FormControl fullWidth>
              <Typography
                variant="h4"
                textAlign={"center"}
                paddingBottom={2}
                sx={{ textDecoration: "overline purple" }}
              >
                Join Bureau
              </Typography>

              <TextField
                id="outlined-basic"
                label="Full Name"
                required
                variant="outlined"
                sx={{ marginBottom: "1rem" }}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{ marginBottom: "1rem" }}
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                required
                variant="outlined"
                sx={{ marginBottom: "1rem" }}
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Gender"
                defaultValue="Female"
                required
                sx={{ marginBottom: "1rem" }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>

              <Button variant="outlined" size="large">
                Self Register
              </Button>
            </FormControl>
          </form>
        </Grid>
        <Grid
          item
          xs={6}
          bgcolor={"black"}
          sx={{
            backgroundImage: `url(${blackMaid})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Grid>
      </Grid>

      <Grid item xs={12} padding={4}>
        <Typography
          variant="h4"
          textAlign={"center"}
          sx={{ textDecoration: "overline purple" }}
        >
          {" "}
          Testimonials{" "}
        </Typography>

        <Box paddingTop={2}>
          <Stack direction={"row"} justifyContent={"center"} spacing={2}>
            <TestimonialCard
              title="Christina Nyambura"
              imageLink="/faces/christina.jpg"
              description="It takes just a look through our testimonials to identify that we have mastered the art of cleaning. We are flexible in our approach and you will get a quote through our e-platform saving you time and making your life easy."
            />
            <TestimonialCard
              title="Joshua Onyango"
              imageLink="/faces/joshua.jpg"
              description="It takes just a look through our testimonials to identify that we have mastered the art of cleaning. We are flexible in our approach and you will get a quote through our e-platform saving you time and making your life easy."
            />

            <TestimonialCard
              title="Fatuma Shamim"
              imageLink="/faces/good.jpg"
              description="It takes just a look through our testimonials to identify that we have mastered the art of cleaning. We are flexible in our approach and you will get a quote through our e-platform saving you time and making your life easy."
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
