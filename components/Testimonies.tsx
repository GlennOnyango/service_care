import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

type Props = {
  imageLink: string;
  title: string;
  description: string;
};

export default function TestimonialCard({
  imageLink,
  title,
  description,
}: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            alt="Remy Sharp"
            src={imageLink}
            sx={{ width: 56, height: 56 }}
          />
        </div>

        <Typography
          gutterBottom
          variant="h5"
          textAlign={"center"}
          component="div"
          marginBottom={2}
          marginTop={2}
        >
          {title}
        </Typography>
        <Typography variant="body2" textAlign={"center"} color="text.secondary">
          {`"${description}"`}
        </Typography>
      </CardContent>
    </Card>
  );
}
