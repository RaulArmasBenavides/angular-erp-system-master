import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root',
})
export class NumberHelper {

	format(number: number, decimal: number = 2) {
		return ('00' + number).slice(-1 * decimal);
	}

	formattedCurrency(value: number = 0) {
		const data = value % 1 > 0 ? value.toFixed(2) : value;
		const exp = /(\d)(?=(\d{3})+(?!\d))/g;
		const rep = '$1,';
		let arr = data.toString().split('.');
		arr[0] = arr[0].replace(exp, rep);
		let result = arr[1] ? arr.join('.') : arr[0];
		return result;
	}
}