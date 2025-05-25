import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import { SimCardDownload } from "@mui/icons-material";
import { FileUpload } from "../../components";
import { styles } from "../../assets/global-styles";
import theme from "../../styles/theme";

const Documents: React.FC = () => {
  return (
    <>
      <Box sx={styles.root}>
        <Container>
          <Box sx={styles.innerContainer}>
            {/* Overall aging report / Upload Excel, CSV or PDF */}
            <Typography sx={styles.label}>
              Overall aging report / Upload Excel, CSV or PDF
            </Typography>
            <FileUpload />
          </Box>

          <Box sx={styles.innerContainer}>
            {/* Cashflow Statement */}
            <Typography sx={styles.label}>Cashflow Statement</Typography>
            <FileUpload />
          </Box>

          <Box sx={styles.innerContainer}>
            {/* Balance Sheet */}
            <Typography sx={styles.label}>Balance Sheet</Typography>
            <FileUpload />
          </Box>

          <Box sx={styles.innerContainer}>
            {/* Income Statement */}
            <Typography sx={styles.label}>Income Statement</Typography>
            <FileUpload />
          </Box>

          <Box sx={styles.innerContainer}>
            {/* Bank Statement */}
            <Typography sx={styles.label}>Bank Statement</Typography>
            <FileUpload />
          </Box>

          <Box sx={styles.innerContainer}>
            {/* Financial Ratios */}
            <Typography sx={styles.label}>Financial Ratios</Typography>
            <FileUpload />
          </Box>

          <Box sx={styles.innerContainer}>
            {/* Contractual Agreements */}
            <Typography sx={styles.label}>Contractual Agreements</Typography>
            <FileUpload />
          </Box>

          <Box sx={{ mt: 2 }}>
            {/* Save and reset button */}
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                textTransform: "none",
                backgroundColor: theme.palette.secondary.main,
                ml: 1,
              }}
            >
              Save
            </Button>
            <Button variant="text" color="error" size="large">
              Start Over
            </Button>
          </Box>

          <Box sx={styles.buttonWrapper}>
            {/* Download Agreement button with icon */}
            <Button
              variant="contained"
              sx={styles.button}
              target="_blank"
              href="https://seller01.invoix.io/wp-content/uploads/2022/12/AGREEMENT.pdf"
            >
              <SimCardDownload sx={{ color: "#fff", fontSize: "30px", mr: 6 }} />
              <Typography sx={styles.buttonText}>Download Agreement</Typography>
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Documents;