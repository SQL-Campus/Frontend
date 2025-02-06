import { NextPage } from 'next';
import { Container, Typography, Box } from '@mui/material';

const Imprint: NextPage = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Impressum
      </Typography>
      <Box sx={{ my: 4 }}>
        <Typography variant="body1">
          Company Name
          <br />
          Street Address
          <br />
          City, Country
          <br />
          Contact: info@company.com
        </Typography>
      </Box>
    </Container>
  );
};

export default Imprint;