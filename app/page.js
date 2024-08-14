import Image from "next/image";
import getStripe from "@/util/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Container } from "@mui/material";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxwidth="lg">
      <Head>
        <title>Flashcard Creator</title>
        <meta name="description" content="Generate flashcards from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
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
    </Container>
  );
}
