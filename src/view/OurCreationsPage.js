import React from 'react';
import ProductGrid from '../elements/ProductGrid';
import Header from '../elements/Header';
import NavBar from '../elements/NavBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CategoryFilter from '../components/CategoryFilter';
import AppFooter from '../elements/AppFooter';
import ProductPage from '../elements/ProductPage';


      
const backgroundImage =
  'https://images.unsplash.com/photo-1586581277029-5769487f3881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


const OurCreationPage = () => (
    <React.Fragment>
    
    {/* <Story /> */}
    <Header
        title="Bamboo Sustainability"
        sxBackground={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
      }} />
    <NavBar />
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Our products
      </Typography>
      <ProductPage/>
      {/* <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '250px', mr: 2 }}>
          <CategoryFilter />
        </Box>
        <Box sx={{ flex: 1 }}>
          <ProductGrid />
        </Box>
      </Box> */}
    </Container>
    <AppFooter />
    </React.Fragment>
);

export default OurCreationPage;