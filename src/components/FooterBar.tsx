import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        color: 'text.secondary',
      }}
    >
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </Typography>
    </Box>
  );
}