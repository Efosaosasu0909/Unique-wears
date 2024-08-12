import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Email:", email);
    setEmail("");
  };

  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3">Subscribe To Our Newsletter</Typography>
      <Typography>
        and receive $20 coupon for your first order when you checkout
      </Typography>
      <form action="" onSubmit={handleSubmit}>
        <Box
          p="2px 4px"
          m="15px auto"
          display="flex"
          alignItems="center"
          width="75%"
          backgroundColor="#F2F2F2"
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <button
            sx={{ p: "10px", ":hover": { cursor: "pointer" }, border: "none" }}
          >
            Subscribe
          </button>
        </Box>
      </form>
    </Box>
  );
};

export default Subscribe;
