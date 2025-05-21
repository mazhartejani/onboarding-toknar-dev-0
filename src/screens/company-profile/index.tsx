import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import dayjs from "dayjs";

import { Footer } from "../../components";
import { styles } from "../../assets/global-styles";
import CompanyInformation from "./CompanyInformation";
import DirectorsInformation from "./DirectorsInformation";
import OwnershipInformation from "./OwnershipInformation";
import ShareholderInformation from "./ShareholderInformation";

const CompanyProfile = () => {
  const [formData, setFormData] = useState({
    activeStep: 0,
    company_information: {
      name: "",
      type: "Select Company Type",
      sector: "Select Sector",
      reg_country: "United Kingdom",
      reg_number: "",
      start_date: dayjs("2000-01-01"),
      dba_name: "",
      company_url: "",
      num_of_employees: "",
      duns_number: "",
      industry: "Select your industry",
      street: "",
      postal_code: "",
      country: "",
      city: "Select City",
    },
  });

  const steps = [
    {
      label: "Company Information",
      form: (
        <CompanyInformation formData={formData} setFormData={setFormData} />
      ),
    },
    {
      label: "Directors Information",
      form: (
        <DirectorsInformation formData={formData} setFormData={setFormData} />
      ),
    },
    {
      label: "Ownership Information",
      form: (
        <OwnershipInformation formData={formData} setFormData={setFormData} />
      ),
    },
    {
      label: "Shareholders Information",
      form: (
        <ShareholderInformation formData={formData} setFormData={setFormData} />
      ),
    },
  ];

  return (
    <>

      {/* Container */}
      <Box sx={styles.root}>
        <Container>
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={formData.activeStep} alternativeLabel>
              {steps.map((item, index) => (
                <Step
                  key={item.label}
                  onClick={() =>
                    setFormData({ ...formData, activeStep: index })
                  }
                >
                  <StepLabel>{item.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <Box sx={{ width: "100%" }}>
            {steps[formData["activeStep"]]["form"]}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CompanyProfile;
