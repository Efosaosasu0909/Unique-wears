import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box
      marginTop="70px"
      padding="40px 0"
      backgroundColor={shades.neutral[100]}
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            UNIque WEARS
          </Typography>
          <div>
            Welcome to Unique Wears, where fashion meets individuality. Our
            brand is dedicated to offering stylish, high-quality clothing that
            lets you express your unique personality. From timeless classics to
            contemporary trends, Unique Wears provides versatile pieces for
            every occasion. Embrace your uniqueness with our carefully curated
            collections designed to make you stand out.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            12, Orji Street, First gate, Ikorodu, Lagos.
            {/* 50 north Whatever Blvd, Washington, DC 10501 */}
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: uniquewears@gmail.com
          </Typography>
          <Typography mb="30px">+234 806 324 6750</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
