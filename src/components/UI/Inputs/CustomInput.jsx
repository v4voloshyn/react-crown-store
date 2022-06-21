import React from 'react';

import { Group, FormInputLabel, Input } from './CustomInput.styles.jsx';

const CustomInput = ({ label, ...inputProps }) => {
	return (
		<Group>
			<Input {...inputProps} />
			{label && (
				<FormInputLabel shrink={inputProps.value} htmlFor={inputProps.value}>
					{label}
				</FormInputLabel>
			)}
		</Group>
	);
};

export default CustomInput;
