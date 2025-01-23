import { Container, Typography } from "@mui/material";

function Access() {
    return (
        <Container maxWidth="md" sx={{ textAlign: 'center', color: '#333', marginBottom: '50px', height: { xs: '500' ,md: '500' } }}>
            <Typography sx={{fontSize: {xs: '30px', md: '52px'}}} variant="h3" component="h2" gutterBottom>
                Access
            </Typography>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52193.797822697255!2d136.8594542631469!3d35.15381835404913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037be9fa60dcf7%3A0x7ec2fa3b5588b528!2zYXRlbGllciB5b21pIOOCouODiOODquOCqCDjg6jjg58!5e0!3m2!1sja!2sjp!4v1735799320509!5m2!1sja!2sjp" width="100%" height="300px" loading="lazy"></iframe>
        </Container>
    );
}

export default Access;