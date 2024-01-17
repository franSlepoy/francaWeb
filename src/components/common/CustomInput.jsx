import { useState } from 'react';

const CustomInput = ({ label, ...props }) => {
  const [focused, setFocused] = useState(false);

  const containerStyles = {
    position: 'relative',
    marginBottom: '10px',
  };

  const labelStyles = {
    position: 'absolute',
    top: focused ? '8px' : '50%',
    transform: focused ? 'translateY(30)' : 'translateY(-50%)',
    left: '13px',
    color: focused ? '#0FA24A' : '#7D7D7D',
    fontFamily: 'Lato',
    fontSize: focused ? '14px' : '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: focused ? '20px' : '45px',
    transition: 'all 0.3s ease',
    pointerEvents: 'none',
  };

  const inputStyles = {
    width: '100%',
    borderRadius: '8px',
    border: `1.5px solid ${focused ? '#0FA24A' : '#ddd'}`,
    background: '#FFF',
    color: '#7D7D7D',
    fontFamily: 'Lato',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '45px',
    boxSizing: 'border-box',
    paddingLeft: '10px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!props.value) {
      setFocused(false);
    }
  };

  return (
    <div style={containerStyles}>
      <label style={labelStyles}>{label}</label>
      <input
        {...props}
        style={inputStyles}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default CustomInput;
