import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Dayjs } from "dayjs";
import PersonalInformationPIForm from "../../components/Forms/UserProfile/PersonalInformation/PersonalInformationPIForm";
import PersonalInformationAddressForm from "../../components/Forms/UserProfile/PersonalInformation/PersonalInformationAddressForm";
import { saveFormToFile } from "../../helper/helper";

interface StepperProps {
  activeStep: number;
  handleBtnClick: (val: number) => void;
}

interface PersonalInfo {
  firstName: string;
  lastName: string;
  date: Dayjs | null;
  countryOfBirth: string;
  jobTitle: string;
  department: string;
  insuranceNumber: string;
  address1: string;
  address2: string;
  postalCode: string;
  city: string;
  country: string;
}

const PersonalInformation: React.FC<StepperProps> = ({ activeStep, handleBtnClick }) => {
  
  const [form, setForm] = useState<PersonalInfo>({
    firstName: "",
    lastName: "",
    date: null,
    countryOfBirth: "United Kingdom",
    jobTitle: "",
    department: "",
    insuranceNumber: "",
    address1: "",
    address2: "",
    postalCode: "",
    city: "",
    country: "United Kingdom",
  });

  const handleChange = (field: keyof PersonalInfo, value: string | Dayjs | null) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };
  
  return (
    <>
      <Divider sx={{ mt: 5, mb: 2 }} />

      <PersonalInformationPIForm
        form={form}
        handleChange={handleChange}
      />

      <Divider sx={{ mt: 5, mb: 2 }} />

      <PersonalInformationAddressForm
        form={form}
        handleChange={handleChange}
      />

      <Box display="flex" justifyContent="flex-end" gap={2}>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ mt: 4, textTransform: "none" }}
          onClick={() => saveFormToFile(form, "UserProfile01.json")}
        >
          Save
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4, textTransform: "none", backgroundColor: "#1e73be", ml: 1 }}
          onClick={() => handleBtnClick(activeStep + 1)}
        >
          Verification
        </Button>
      </Box>
    </>
  );
};

export default PersonalInformation;
