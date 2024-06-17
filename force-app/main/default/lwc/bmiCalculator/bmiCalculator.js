import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    get options() {
        return [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
        ];
    }
}