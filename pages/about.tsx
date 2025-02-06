import { NextPage } from 'next';
import { Container, Typography, Box } from '@mui/material';

const About: NextPage = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        About Us
      </Typography>
      <Box sx={{ my: 4 }}>
        <Typography variant="body1">
          We are a innovative company dedicated to providing the best solutions for our customers.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Our mission is to create exceptional experiences through technology and creativity.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;