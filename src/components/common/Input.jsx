import React from 'react';

const Input = ({
	name,
	type,
	label,
	placeholder,
	onChange,
	value,
	autoComplete
}) => {
  return (
    <div className="form-group">
			<label>{label}</label>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				className="form-control"
				autoComplete={autoComplete}
			/>
		</div>
  )
}

export default Input;