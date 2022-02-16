// material
import { Box, Grid, Container, Typography } from '@mui/material';
// import Calendar from 'rc-year-calendar';
// import Calendar from 'react-calendar';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales
  // CalendarApp
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={9}>
          <Grid item xs={12} sm={6} md={4}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppTasks />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            {/* <AppOrderTimeline /> */}
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            {/* <AppTrafficBySite /> */}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
