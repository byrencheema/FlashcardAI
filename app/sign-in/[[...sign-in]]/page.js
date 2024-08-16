import { SignIn } from "@clerk/nextjs";
import { Toolbar, Container, AppBar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function SignUpPage() {
    return (
      <Container>
        <AppBar position="static" sx={{ backgroundColor: "#865CA6", boxShadow: "none" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Flashcard Creator
            </Typography>
            <Button color="inherit">
              <Link href="/sign-up" passHref>Login</Link>
            </Button>
            <Button color="inherit">
              <Link href="/sign-up" passHref>Sign up</Link>
            </Button>
          </Toolbar>
        </AppBar>
  
        <Box 
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="60vh"
          textAlign="center"
          borderRadius={2}
          boxShadow={3}
          p={4}
          mt={4}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backgroundImage: "url(/images/hero-bg.jpg)",
            backgroundSize: "cover",
          }}
        >
          <Typography variant="h4" gutterBottom>Sign In</Typography>
          <SignIn />
        </Box>
      </Container>
    );
  }