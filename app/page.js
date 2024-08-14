import Image from "next/image";
import getStripe from "@/util/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Container, AppBar, Toolbar, Typography, Button, Box, Grid, Card, CardContent, CardActions } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters sx={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
      <Head>
        <title>Flashcard Creator</title>
        <meta name="description" content="Generate flashcards from your text" />
      </Head>

      <AppBar position="static" sx={{ backgroundColor: "#865CA6", boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Flashcard Creator
          </Typography>
          <Box>
            <SignedOut>
              <Button color="inherit" sx={{ mr: 1 }}>Login</Button>
              <Button variant="outlined" sx={{ borderColor: "#fff", color: "#fff" }}>Sign Up</Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "70vh",
          textAlign: "center",
          backgroundColor: "#ffffff",
          borderRadius: 2,
          boxShadow: 3,
          p: 4,
          mx: 2,
          mt: 4,
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          color: "#333",
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: "#333" }}>
          Welcome to Flashcard Creator
        </Typography>
        <Typography variant="h5" sx={{ color: "#555", mb: 3 }}>
          Create concise and effective flashcards that help users learn and retain information.
        </Typography>
        <Button variant="contained" sx={{ mt: 2, backgroundColor: "#865CA6", padding: '10px 20px' }}>
          Get Started
        </Button>
      </Box>

      <Container sx={{ my: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Easy Flashcard Creation</Typography>
                <Typography sx={{ mt: 1, color: "#555" }}>Quickly create flashcards with our intuitive interface.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Customizable Templates</Typography>
                <Typography sx={{ mt: 1, color: "#555" }}>Tailor your flashcards to your learning style.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Interactive Review</Typography>
                <Typography sx={{ mt: 1, color: "#555" }}>Engage with your content through interactive reviews.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Progress Tracking</Typography>
                <Typography sx={{ mt: 1, color: "#555" }}>Monitor your progress and stay on top of your learning goals.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ my: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Pricing
        </Typography>
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 2, boxShadow: 3, marginBottom: 4 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Basic</Typography>
                <Typography variant="h4" sx={{ color: "#865CA6", mt: 1, mb: 2 }}>$5/month</Typography>
                <Typography sx={{ mb: 2 }}>Essential features for individuals.</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant="contained" sx={{ backgroundColor: "#865CA6", width: '100%' }}>Get Basic</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 2, boxShadow: 3, marginBottom: 4 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Pro</Typography>
                <Typography variant="h4" sx={{ color: "#865CA6", mt: 1, mb: 2 }}>$10/month</Typography>
                <Typography sx={{ mb: 2 }}>Advanced features for power users.</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant="contained" sx={{ backgroundColor: "#865CA6", width: '100%' }}>Get Pro</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
