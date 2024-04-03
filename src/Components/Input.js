import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input({lebel,Placeholder,name ,handleChange}) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          focused
          color="secondary"
          name={name}
          label={lebel}
          placeholder={Placeholder}
          defaultValue={''}
          onChange={handleChange}
        />
      </div>
    </Box>
  );
}