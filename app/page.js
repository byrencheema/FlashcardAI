import Image from "next/image";
import getStripe from "@/util/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Container } from "@mui/material";
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
          <Typography variant="h6">Flashcard Creator</Typography>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      
    </Container>
    );
}
