import { NextPage } from 'next';
import { Container, Typography, Box } from '@mui/material';

const Profile: NextPage = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Your Profile
      </Typography>
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          Welcome, User!
        </Typography>
        <Typography variant="body1">
          This is your personal profile page where you can manage your account settings.
        </Typography>
      </Box>
    </Container>
  );
};

export default Profile;