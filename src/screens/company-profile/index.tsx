import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { styles } from "../../assets/global-styles";
import CompanyInformation from "./CompanyInformation";
import DirectorsInformation from "./DirectorsInformation";
import OwnershipInformation from "./OwnershipInformation";
import ShareholderInformation from "./ShareholderInformation";
import { type DirectorInfo } from "../../components/Forms/CompanyProfile/DirectorsInformation/DirectorsInformationForm";
import theme from "../../styles/theme";
import type { ShareholderInfo } from "../../components/Forms/CompanyProfile/ShareholderInformation/ShareholderInformationForm";
import type { CompanyInformationType } from "../../components/Forms/CompanyProfile/CompanyInformation/CompanyInformationForm";
import type { CompanyAddressType } from "../../components/Forms/CompanyProfile/CompanyInformation/CompanyAddressForm";

export interface FormDataType {
  activeStep: number;
  companyInformation: CompanyInformationType;
  companyAddress: CompanyAddressType
  director1: DirectorInfo;
  director2: DirectorInfo;
  shareholder1: ShareholderInfo;
  shareholder2: ShareholderInfo;
  shareholder3: ShareholderInfo;
}

const defaultDirector: DirectorInfo = {
  firstName: "",
  lastName: "",
  birthDate: null,
  country: "United Kingdom",
  ownership: "0%",
  businessEmail: "",
  phone: "",
};

const defaultShareholder: ShareholderInfo = {
  firstName: "",
  lastName: "",
  birthDate: null,
  country: "United Kingdom",
  ownership: "0%",
};

const defaultCompanyInformation: CompanyInformationType = {
  name: "",
  type: "Select Company Type",
  sector: "Select Sector",
  reg_country: "United Kingdom",
  reg_number: "",
  start_date: null,
  dba_name: "",
  company_url: "",
  num_of_employees: "",
  duns_number: "",
  industry: "Select your industry",
};

const defaultCompanyAddress: CompanyAddressType = {
  street: "",
  postal_code: "",
  country: "United Kingdom",
  city: "London",
};

const CompanyProfile: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    activeStep: 0,
    companyInformation: defaultCompanyInformation,
    companyAddress: defaultCompanyAddress,
    director1: defaultDirector,
    director2: defaultDirector,
    shareholder1: defaultShareholder,
    shareholder2: defaultShareholder,
    shareholder3: defaultShareholder,
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
                  <StepLabel
                    sx={{
                      "& .MuiStepLabel-label": {
                        color: formData.activeStep === index ? theme.palette.primary.main : "#b4b4b9",
                        fontWeight: formData.activeStep === index ? "bold" : "normal",
                      },
                    }}
                  >
                    {item.label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <Box sx={{ width: "100%" }}>
            {steps[formData.activeStep].form}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CompanyProfile;