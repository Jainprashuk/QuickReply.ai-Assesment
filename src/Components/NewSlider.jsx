import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './newSlider.css';

const handleSizes = {
  Size_24: 24,
  Size_32: 32,
};

const NewSlider = ({ type, subtype, steps, handleSize, backgroundColor, onChange }) => {
  const [value, setValue] = useState(subtype === 'Range' ? [20, 80] : 0);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleChange = (event, index) => {
    const newValue = event.target.value;
    if (subtype === 'Range') {
      const updatedValue = [...value];
      updatedValue[index] = newValue;
      setValue(updatedValue);
      onChange(updatedValue);
    } else {
      setValue(newValue);
      onChange(newValue);
    }
  };

  const handleMouseOver = (index) => {
    setHoverIndex(index);
  };

  const handleMouseOut = () => {
    setHoverIndex(null);
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

  const getTooltipPositionStyle = (value) => {
    return {
      left: `${value}%`,
      transform: `translateX(-50%)`,
    };
  };

  return (
    <div className="container new-slider-container">
      <div className="slider-section">
        <h3 className="center">{subtype} {type} Slider</h3>
        <div className="slider-wrapper">
          {subtype === 'Range' ? (
            <>
              <input
                type="range"
                min="0"
                max="100"
                step={type === 'Discreet' ? steps : 1}
                value={value[0]}
                onChange={(event) => handleChange(event, 0)}
                onMouseOver={() => handleMouseOver(0)}
                onMouseOut={handleMouseOut}
                className={getSliderClass('default')}
                style={getSliderStyle()}
              />
              <div className={`tooltip ${hoverIndex === 0 ? 'visible' : ''}`} style={getTooltipPositionStyle(value[0])}>{value[0]}</div>
              <input
                type="range"
                min="0"
                max="100"
                step={type === 'Discreet' ? steps : 1}
                value={value[1]}
                onChange={(event) => handleChange(event, 1)}
                onMouseOver={() => handleMouseOver(1)}
                onMouseOut={handleMouseOut}
                className={getSliderClass('default')}
                style={getSliderStyle()}
              />
              <div className={`tooltip ${hoverIndex === 1 ? 'visible' : ''}`} style={getTooltipPositionStyle(value[1])}>{value[1]}</div>
              <p className="center">Range: {value[0]} - {value[1]}</p>
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
                onMouseOver={() => handleMouseOver(0)}
                onMouseOut={handleMouseOut}
                className={getSliderClass('default')}
                style={getSliderStyle()}
              />
              <div className={`tooltip ${hoverIndex === 0 ? 'visible' : ''}`} style={getTooltipPositionStyle(value)}>{value}</div>
              <p className="center">Value: {value}</p>
            </>
          )}
        </div>
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

NewSlider.propTypes = {
  type: PropTypes.string,
  subtype: PropTypes.string,
  steps: PropTypes.number,
  handleSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  onChange: PropTypes.func,
};

export default NewSlider;
