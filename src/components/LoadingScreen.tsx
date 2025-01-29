import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, useTheme } from "@mui/material";
import logo from '@/assets/logo.svg'

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const theme = useTheme();
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 900);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                        opacity: { duration: 0.8 },
                        scale: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                    }}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                        backgroundColor: theme.palette.primary.main,
                    }}
                >
                    <Box>
                        <motion.img
                            src={logo}
                            alt="ロゴ"
                            style={{ width: "10vw" }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                        />
                    </Box>
                </motion.div>
            )}
        </>
    );
};

export default LoadingScreen;
