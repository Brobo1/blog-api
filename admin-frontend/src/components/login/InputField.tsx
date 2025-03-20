export function InputField(inputType: string, label:string) {
	return (
		<>
			<input type={inputType} aria-label={label}/>
		</>
	);
}