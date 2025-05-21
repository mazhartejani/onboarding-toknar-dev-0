import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";

interface StepperProps {
  formData: any;
  setFormData: (val: any) => void;
}

const OwnershipInformation = ({ formData, setFormData }: StepperProps) => {
  return (
    <>
      <Divider sx={{ mt: 5, mb: 2 }} />

      {/* Director Information Block */}
      <Box>
        <Typography
          component={"h3"}
          marginBottom={4}
          fontSize={"18px"}
          fontWeight={"bold"}
        >
          Ownership Details
        </Typography>

        <Grid container spacing={3}>
          {/* First Name */}
          <Grid size={{ xs: 4 }}>
            <FormControl fullWidth>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  color: "#b4b4b9",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                Are there any owners who own more than 20%?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{ justifyContent: "space-between" }}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Box>
        {/* Previous */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4, textTransform: "none", backgroundColor: "#1e73be" }}
          onClick={() =>
            setFormData({ ...formData, activeStep: formData.activeStep - 1 })
          }
        >
          Previous
        </Button>

        {/* Add Shareholders Information */}
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
          onClick={() =>
            setFormData({ ...formData, activeStep: formData.activeStep + 1 })
          }
        >
          Add Shareholders Information
        </Button>
      </Box>
    </>
  );
};
export default OwnershipInformation;
