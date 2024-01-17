import { FormControl, InputLabel, Input } from '@mui/material';

const CustomInputMUI = ({ label, ...props }) => {
  return (
    <FormControl sx={{ m: 1,  borderRadius: '8px', border: '0px solid #0FA24A', background: '#FFF', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
      <InputLabel sx={{ color: '#7D7D7D', fontFamily: 'Lato', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: '45px'}}>{label}</InputLabel>
      <Input {...props} disableUnderline sx={{ '& input': { borderBottom: 'none', textAlign: 'left' } }} />
    </FormControl>
  );
};

export default CustomInputMUI;
