import Image from "next/image";
import getStripe from "@/util/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Container, AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ backgroundColor: "#f0f0f0", minHeight: "100vh", p: 0 }}>
      <Head>
        <title>Flashcard Creator</title>
        <meta name="description" content="Generate flashcards from your text" />
      </Head>

      <AppBar position="static" sx={{ backgroundColor: "#865CA6" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Flashcard Creator
          </Typography>
          <SignedOut>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
          textAlign: "center",
          backgroundColor: "#ffffff",
          borderRadius: 2,
          boxShadow: 3,
          p: 4,
          mt: 4,
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ color: "#333" }}>
          Welcome to Flashcard Creator
        </Typography>
        <Typography variant="h5" sx={{ color: "#555", mb: 2 }}>
          Create concise and effective flashcards that help users learn and retain information.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2, backgroundColor: "#865CA6" }}>
          Get Started
        </Button>
      </Box>

      <Box sx={{ my: 6, px: 2, backgroundColor: "#fff", borderRadius: 2, boxShadow: 2, py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Features
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, px: 4 }}>
          <Box sx={{ p: 2, border: "1px solid #ccc", borderRadius: 1, textAlign: "center" }}>
            <Typography variant="h6">Easy flashcard creation</Typography>
          </Box>
          <Box sx={{ p: 2, border: "1px solid #ccc", borderRadius: 1, textAlign: "center" }}>
            <Typography variant="h6">Customizable flashcard templates</Typography>
          </Box>
          <Box sx={{ p: 2, border: "1px solid #ccc", borderRadius: 1, textAlign: "center" }}>
            <Typography variant="h6">Interactive flashcard review</Typography>
          </Box>
          <Box sx={{ p: 2, border: "1px solid #ccc", borderRadius: 1, textAlign: "center" }}>
            <Typography variant="h6">Progress tracking and statistics</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
