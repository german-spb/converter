const DEFAULT_RGB_VALUE = 'rgb(0,0,0)';
const HEX_REG_EXP = /^[#]*([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i;
export const validateHex = (hex) => HEX_REG_EXP.test(hex);

export const hex2rgb = (hex) => {
	if (hex.length !== 7) {
		return DEFAULT_RGB_VALUE;
	}

	const r = Number("0x" + hex[1] + hex[2]);
	const g = Number("0x" + hex[3] + hex[4]);
	const b = Number("0x" + hex[5] + hex[6]);

	return `rgb(${r},${g},${b})`;
};