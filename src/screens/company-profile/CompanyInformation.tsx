import React from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import CompanyInformationForm, {type CompanyInformationType } from "../../components/Forms/CompanyProfile//CompanyInformation/CompanyInformationForm";
import CompanyAddressForm, { type CompanyAddressType } from "../../components/Forms/CompanyProfile/CompanyInformation/CompanyAddressForm";
import { saveFormToFile } from "../../helper/helper";
import type { Dayjs } from "dayjs";
import theme from "../../styles/theme";

interface StepperProps {
  formData: {
    activeStep: number;
    companyInformation: CompanyInformationType;
    companyAddress: CompanyAddressType;
    // ...other fields
  };
  setFormData: (val: any) => void;
}

const CompanyInformation: React.FC<StepperProps> = ({ formData, setFormData }) => {
  const companyInfo = formData.companyInformation ;
  const companyAddress = formData.companyAddress;

  const handleCompanyInfoChange = (field: keyof CompanyInformationType, value: string | Dayjs | null) => {
    setFormData({
      ...formData,
      companyInformation: {
        ...formData.companyInformation,
        [field]: value,
      },
    });
  };

  const handleAddressChange = (field: keyof CompanyAddressType, value: string) => {
    setFormData({
      ...formData,
      companyAddress: {
        ...formData.companyAddress,
        [field]: value,
      },
    });
  };

  const handleSave = () => {
    saveFormToFile({
        companyInformation: formData.companyInformation,
        companyAddress: formData.companyAddress,
      },
      "CompanyProfile01.json"
    );
  };

  return (
    <>
      <CompanyInformationForm companyInfo={companyInfo} onChange={handleCompanyInfoChange} />

      <Divider sx={{ mt: 5, mb: 2 }} />

      <CompanyAddressForm address={companyAddress} onChange={handleAddressChange} />

      <Box display="flex" justifyContent="flex-end" gap={2}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            mt: 4,
            textTransform: "none",
            backgroundColor: theme.palette.secondary.main,
            ml: 1,
          }}
          onClick={handleSave}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            mt: 4,
            textTransform: "none",
            backgroundColor: theme.palette.secondary.main,
            ml: 1,
          }}
          onClick={() =>
            setFormData({ ...formData, activeStep: formData.activeStep + 1 })
          }
        >
          Add Directors Information
        </Button>
      </Box>
    </>
  );
};

export default CompanyInformation;