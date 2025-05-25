import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { countries } from "../../constants/countries";
import DirectorInformationForm, { type DirectorInfo } from "../../components/Forms/CompanyProfile/DirectorsInformation/DirectorsInformationForm";
import { Dayjs } from "dayjs";
import { saveFormToFile } from "../../helper/helper";
import theme from "../../styles/theme";

interface StepperProps {
  formData: {
    activeStep: number;
    director1: DirectorInfo;
    director2: DirectorInfo;
    // ...other fields
  };
  setFormData: (val: any) => void;
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

const DirectorsInformation: React.FC<StepperProps> = ({ formData, setFormData }) => {
  // Handlers for each director
  const handleDirectorChange = (directorKey: "director1" | "director2") =>
    (field: keyof DirectorInfo, value: string | Dayjs | null) => {
      setFormData({
        ...formData,
        [directorKey]: {
          ...formData[directorKey],
          [field]: value,
        },
      });
    };

  const handleSave = () => {
    // Save both directors' info as JSON
    saveFormToFile(
      {
        director1: formData.director1,
        director2: formData.director2,
      },
      "CompanyProfile02.json"
    );
  };

  return (
    <>
      <Divider sx={{ mt: 5, mb: 2 }} />

      <DirectorInformationForm
        title="Director 1 Details"
        director={formData.director1 || defaultDirector}
        onChange={handleDirectorChange("director1")}
        countries={countries}
      />

      <Divider sx={{ mt: 5, mb: 2 }} />

      <DirectorInformationForm
        title="Director 2 Details"
        director={formData.director2 || defaultDirector}
        onChange={handleDirectorChange("director2")}
        countries={countries}
      />

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
          Add Ownership Information
        </Button>
      </Box>
    </>
  );
};

export default DirectorsInformation;