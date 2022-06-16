import React from 'react';
import './Inputs.scss';
const CustomInput = ({ label, ...inputProps }) => {
	return (
		<div className='group'>
			<input className='form-input' {...inputProps} />
			{label && (
				<label
					className={`${inputProps.value ? 'shrink' : ''} form-input-label`}
					htmlFor={inputProps.value}
				>
					{label}
				</label>
			)}
		</div>
	);
};

export default CustomInput;
