"use client";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { writeBatch } from "firebase/firestore";
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Paper,
  Dialog,
  Grid,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { doc, collection, getDoc } from "firebase/firestore";

export default function Generate() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleSubmission = async () => {
    fetch("/api/generate", {
      method: "POST",
      body: text,
    })
      .then((res) => res.json())
      .then((data) => setFlashcards(data));
  };

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveFlashcards = async () => {
    if (!name) {
      alert("Please enter a name for your flashcards");
      return;
    }

    const batch = writeBatch(db);
    const userDocref = doc(collection(db, "users"), user.id);
    const docSnap = await getDoc(userDocref);

    if (docSnap.exists()) {
      const collections = docSnap.data().flashcards || [];
      if (collections.find((c) => c.name === name)) {
        alert("Flashcard set with that name already exists");
        return;
      } else {
        collections.push({ name });
        batch.set(userDocref, { flashcards: collections }, { merge: true });
      }
    } else {
      batch.set(userDocref, { flashcards: [{ name }] });
    }

    const colRef = collection(userDocref, name);
    flashcards.forEach((flashcard) => {
      const cardRef = doc(colRef);
      BroadcastChannel.set(cardRef, flashcard);
    });

    await batch.commit();
    handleClose();
    router.push("/flashcards");
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          mt: 4,
          mb: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Generate Flashcards
        </Typography>
        <Paper sx={{ p: 2, mt: 2, width: "100%" }}>
          <TextField
            value={text}
            onChange={(e) => setText(e.target.value)}
            label="Enter Text"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#865CA6", width: "100%" }}
            onClick={handleSubmission}
          >
            Submit
          </Button>
        </Paper>
      </Box>

      {flashcards.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Preview Flashcards
          </Typography>
          <Grid container spacing={2}>
            {flashcards.map((flashcard, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper sx={{ p: 2, height: "100%" }}>
                  <Typography variant="h6" gutterBottom>
                    {flashcard.front}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {flashcard.back}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box mt={4}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#865CA6" }}
              onClick={handleOpen}
            >
              Save Flashcards
            </Button>
          </Box>
        </Box>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Save Flashcards</DialogTitle>
        <DialogContent>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Enter a name for your flashcards"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveFlashcards}>Save</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
