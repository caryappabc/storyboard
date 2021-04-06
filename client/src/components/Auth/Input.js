import React from "react";
import { TextField, Grid } from "@material-ui/core";

const Input = ({
  name,
  half,
  label,
  handleChange,
  autoFocus,
  type,
  handleShowPassword,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
        autoFocus={autoFocus}
        type={type}
      />
    </Grid>
  );
};

export default Input;
