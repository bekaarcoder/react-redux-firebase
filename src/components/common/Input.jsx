import React from 'react';

const Input = ({
	name,
	type,
	label,
	placeholder,
	onChange,
	value,
	autoComplete,
	error
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
				className={"form-control " + (error && "is-invalid")}
				autoComplete={autoComplete}
			/>
			{error && (
				<div className="invalid-feedback">
					{error}
				</div>
			)}
		</div>
  )
}

export default Input;