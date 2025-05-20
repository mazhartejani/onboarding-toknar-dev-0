import dayjs from "dayjs";

export const saveFormToFile = (formData: unknown, fileName = "data.json") => {  
   const replacer = (_key: string, value: unknown) => {
    // If value is an ISO date string, format it as DD/MM/YYYY
    if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(value)) {
      return dayjs(value).format("DD/MM/YYYY");
    }
    return value;
  };

  const fileData = JSON.stringify(formData, replacer, 2);
  const blob = new Blob([fileData], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = fileName;
  link.href = url;
  link.click();
};