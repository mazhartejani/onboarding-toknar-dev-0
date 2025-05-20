import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styles } from "../../assets/global-styles";
import PersonalInformation from "./PersonalInformation";
import Verification from "./Verification";
import theme from "../../styles/theme";

interface StepItem {
  label: string;
  form: React.ReactNode;
}

const UserProfile: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: StepItem[] = [
    {
      label: "Personal Information",
      form: (
        <PersonalInformation
          activeStep={activeStep}
          handleBtnClick={setActiveStep}
        />
      ),
    },
    {
      label: "Verification",
      form: (
        <Verification
          activeStep={activeStep}
          handleBtnClick={setActiveStep}
        />
      ),
    },
  ];

  return (
    <>
      {/* Container */}
      <Box sx={styles.root}>
        <Container maxWidth={false}>
          <Box>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((item, index) => (
                <Step key={item.label} onClick={() => setActiveStep(index)}>
                                    <StepLabel
                    sx={{
                      "& .MuiStepLabel-label": {
                        color: activeStep === index ? theme.palette.primary.main : "#b4b4b9",
                        fontWeight: activeStep === index ? "bold" : "normal",
                      },
                    }}
                  >
                    {item.label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <Box>{steps[activeStep].form}</Box>
        </Container>
      </Box>
    </>
  );
};

export default UserProfile;