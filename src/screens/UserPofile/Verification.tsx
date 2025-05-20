import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { FileUpload } from "../../components";
import { styles } from "../../assets/global-styles";
import { Dayjs } from "dayjs";
import { saveFormToFile } from "../../helper/helper";
import VerificationIdentityForm from "../../components/Forms/UserProfile/Verification/VerificationIdentityForm";
import VerificationContactDetailsForm from "../../components/Forms/UserProfile/Verification/VerificationContactDetailsForm";
import theme from "../../styles/theme";

interface StepperProps {
  activeStep: number;
  handleBtnClick: (val: number) => void;
}

type DocumentType = "Passport" | "Driving License";

interface VerificationForm {
  documentType: DocumentType;
  documentNumber: string;
  documentCountry: string;
  issuingDate: Dayjs | null;
  expirationDate: Dayjs | null;
  frontFile?: File | null;
  backFile?: File | null;
  businessEmail: string;
  phone: string;
  isAuthorized: boolean;
  boardResolutionFile?: File | null;
}

const Verification: React.FC<StepperProps> = ({ activeStep, handleBtnClick }) => {
  const [form, setForm] = useState<VerificationForm>({
    documentType: "Passport",
    documentNumber: "",
    documentCountry: "United Kingdom",
    issuingDate: null,
    expirationDate: null,
    businessEmail: "",
    phone: "",
    isAuthorized: false,
  });

  const handleChange = (field: keyof VerificationForm, value: string | Dayjs | null) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Divider sx={{ mt: 5, mb: 2 }} />

      {/* Identity Verification Block */}
      <VerificationIdentityForm form={form} handleChange={handleChange} />

      <Divider sx={{ mt: 5, mb: 2 }} />

      {/* Contact Details Block */}
      <VerificationContactDetailsForm form={form} handleChange={handleChange} />

      <Divider sx={{ mt: 5, mb: 2 }} />

      <Box>
        <Typography
          component={"h3"}
          marginBottom={4}
          fontSize={"18px"}
          fontWeight={"bold"}
          sx={{color: theme.palette.text.primary}}
        >
          Board Approval
        </Typography>

        <Grid container>
          <Grid size={{ xs: 12}}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={form.isAuthorized}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      isAuthorized: e.target.checked,
                    }))
                  }
                />
              }
              label="I am authorized to act on the behave of company"
              sx={{
                color: "#444444",
                ".css-ahj2mt-MuiTypography-root": {
                  fontSize: "13px",
                },
              }}
            />
          </Grid>

          {/* Copy of Board Resolution */}
          <Grid size={{ xs: 12}}>
            <Box sx={styles.innerContainer}>
              <Typography sx={styles.label}>
                Please upload a certified true copy of the board resolution
                authorizing the user to act on behave of the company
              </Typography>
              <FileUpload />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box display="flex" justifyContent="flex-end" gap={2}>
        {/* Previous */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            mt: 4,
            textTransform: "none",
            backgroundColor: "#1e73be",
            ml: 1,
          }}
          onClick={() => handleBtnClick(activeStep - 1)}
        >
          Previous
        </Button>

        {/* Submit */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            mt: 4,
            textTransform: "none",
            backgroundColor: "#1e73be",
            ml: 1,
          }}
          disabled={!form.isAuthorized}
          onClick={() => saveFormToFile(form, "UserProfile02.json")}
        >
          Save
        </Button>
      </Box>
    </>
  );
};

export default Verification;