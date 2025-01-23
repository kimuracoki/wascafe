import { Container, Typography } from "@mui/material";

function About() {
    return (
        <Container maxWidth="md" sx={{ textAlign: 'center', color: '#333', marginBottom: 10, width: {xs:'80vw', md: '40vw'} }}>
            <Typography sx={{fontSize: {xs: '30px', md: '52px'}}} variant="h3" component="h2" gutterBottom>
                About
            </Typography>
            <Typography sx={{ textAlign: 'left', fontSize: {xs: '12px', md: '16px'} }} gutterBottom>
             <br />
             <br />
             <br />
             <br /> 
            </Typography>
        </Container>
    );
}

export default About;