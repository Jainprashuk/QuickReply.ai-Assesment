import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './newSlider.css';

const handleSizes = {
  Size_24: 24,
  Size_32: 32,
};


const NewSlider = ({ type, subtype, steps, handleSize, backgroundColor, onChange }) => {
  const [value, setValue] = useState(subtype === 'Range' ? [20, 80] : 0);

  const handleChange = (event, index) => {
    if (subtype === 'Range') {
      const newValue = [...value];
      newValue[index] = event.target.value;
      setValue(newValue);
      onChange(newValue);
    } else {
      setValue(event.target.value);
      onChange(event.target.value);
    }
  };

  const getSliderClass = (state) => {
    return `slider ${state}`;
  };

  const getSliderStyle = () => {
    return {
      '--thumb-size': `${handleSizes[handleSize]}px`,
      '--thumb-color': backgroundColor,
      '--thumb-color-hover': `${backgroundColor}80`, // Add transparency for hover
      '--thumb-color-active': `${backgroundColor}BF`, // Add transparency for active
    };
  };

  return (
    <div className="container new-slider-container">
      <div className="slider-section">
        <h3>{subtype} {type} Slider</h3>
        {subtype === 'Range' ? (
          <>
            <input
              type="range"
              min="0"
              max="100"
              step={type === 'Discreet' ? steps : 1}
              value={value[0]}
              onChange={(event) => handleChange(event, 0)}
              className={getSliderClass('default')}
              style={getSliderStyle()}
              onMouseOver={(e) => e.currentTarget.className = getSliderClass('hover')}
              onMouseOut={(e) => e.currentTarget.className = getSliderClass('default')}
              onMouseDown={(e) => e.currentTarget.className = getSliderClass('active')}
              onMouseUp={(e) => e.currentTarget.className = getSliderClass('default')}
              onFocus={(e) => e.currentTarget.className = getSliderClass('active')}
              onBlur={(e) => e.currentTarget.className = getSliderClass('default')}
            />
            <input
              type="range"
              min="0"
              max="100"
              step={type === 'Discreet' ? steps : 1}
              value={value[1]}
              onChange={(event) => handleChange(event, 1)}
              className={getSliderClass('default')}
              style={getSliderStyle()}
              onMouseOver={(e) => e.currentTarget.className = getSliderClass('hover')}
              onMouseOut={(e) => e.currentTarget.className = getSliderClass('default')}
              onMouseDown={(e) => e.currentTarget.className = getSliderClass('active')}
              onMouseUp={(e) => e.currentTarget.className = getSliderClass('default')}
              onFocus={(e) => e.currentTarget.className = getSliderClass('active')}
              onBlur={(e) => e.currentTarget.className = getSliderClass('default')}
            />
            <p>Range: {value[0]} - {value[1]}</p>
          </>
        ) : (
          <>
            <input
              type="range"
              min="0"
              max="100"
              step={type === 'Discreet' ? steps : 1}
              value={value}
              onChange={handleChange}
              className={getSliderClass('default')}
              style={getSliderStyle()}
              onMouseOver={(e) => e.currentTarget.className = getSliderClass('hover')}
              onMouseOut={(e) => e.currentTarget.className = getSliderClass('default')}
              onMouseDown={(e) => e.currentTarget.className = getSliderClass('active')}
              onMouseUp={(e) => e.currentTarget.className = getSliderClass('default')}
              onFocus={(e) => e.currentTarget.className = getSliderClass('active')}
              onBlur={(e) => e.currentTarget.className = getSliderClass('default')}
            />
            <p>Value: {value}</p>
          </>
        )}
      </div>
    </div>
  );
};



NewSlider.defaultProps = {
  type: 'Continuous',
  subtype: 'Single',
  steps: 1,
  handleSize: 'Size_24',
  backgroundColor: 'blue',
  onChange: () => {},
};



export default NewSlider;
