import { TextField, withStyles } from "@material-ui/core";

export const RoundedTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& input": {
        padding: "10px",
      },
      "& fieldset": {
        borderRadius: "100px",
        borderColor: "transparent",
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
      "[data-theme='DARK'] & fieldset": {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
      },
      "&:hover fieldset": {
        borderWidth: 2,
      },
    },
  },
})(TextField);
