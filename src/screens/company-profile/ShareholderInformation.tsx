import React from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { countries } from "../../constants/countries";
import ShareholderInformationForm, { type ShareholderInfo } from "../../components/Forms/CompanyProfile/ShareholderInformation/ShareholderInformationForm";
import { Dayjs } from "dayjs";
import { saveFormToFile } from "../../helper/helper";
import theme from "../../styles/theme";

interface StepperProps {
  formData: {
    activeStep: number;
    shareholder1: ShareholderInfo;
    shareholder2: ShareholderInfo;
    shareholder3: ShareholderInfo;
    // ...other fields
  };
  setFormData: (val: any) => void;
}

const defaultShareholder: ShareholderInfo = {
  firstName: "",
  lastName: "",
  birthDate: null,
  country: "United Kingdom",
  ownership: "0%",
};

const ShareholderInformation: React.FC<StepperProps> = ({ formData, setFormData }) => {
  // Handler for each shareholder
  const handleShareholderChange = (shareholderKey: "shareholder1" | "shareholder2" | "shareholder3") =>
    (field: keyof ShareholderInfo, value: string | Dayjs | null) => {
      setFormData({
        ...formData,
        [shareholderKey]: {
          ...formData[shareholderKey],
          [field]: value,
        },
      });
    };

  const handleSave = () => {
    saveFormToFile(
      {
        shareholder1: formData.shareholder1,
        shareholder2: formData.shareholder2,
        shareholder3: formData.shareholder3,
      },
      "CompanyProfile04.json"
    );
  };

  return (
    <>
      <Divider sx={{ mt: 5, mb: 2 }} />

      <ShareholderInformationForm
        title="Shareholder 1 with more than 20% ownership"
        shareholder={formData.shareholder1 || defaultShareholder}
        onChange={handleShareholderChange("shareholder1")}
        countries={countries}
      />

      <Divider sx={{ mt: 5, mb: 2 }} />

      <ShareholderInformationForm
        title="Shareholder 2 with more than 20% ownership"
        shareholder={formData.shareholder2 || defaultShareholder}
        onChange={handleShareholderChange("shareholder2")}
        countries={countries}
      />

      <Divider sx={{ mt: 5, mb: 2 }} />

      <ShareholderInformationForm
        title="Shareholder 3 with more than 20% ownership"
        shareholder={formData.shareholder3 || defaultShareholder}
        onChange={handleShareholderChange("shareholder3")}
        countries={countries}
      />

      <Box display="flex" justifyContent="flex-end" gap={2}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4, textTransform: "none", backgroundColor: theme.palette.secondary.main }}
          onClick={() =>
            setFormData({ ...formData, activeStep: formData.activeStep - 1 })
          }
        >
          Previous
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
          onClick={handleSave}
        >
          Save
        </Button>
      </Box>
    </>
  );
};

export default ShareholderInformation;