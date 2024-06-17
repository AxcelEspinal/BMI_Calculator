import { validateWaveTemplate } from 'lightning/analyticsWaveApi';
import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    inputSystem = 'Metric';
    isImperial = false;
    inputGender;
    inputWeight;
    inputHeight;
    inputAge;

    get genders() {
        return [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
        ];
    }

    get systems() {
        return [
            {label: 'Imperial', value: 'Imperial'},
            {label: 'Metric', value: 'Metric'},
        ];
    }

    handleSystemChange(event) {
        this.inputSystem = event.target.value;
        this.inputSystem == 'Imperial'? this.isImperial = true: this.isImperial=false;
        console.log(this.isImperial);
    }

    handleGender(event) {
        this.inputGender = event.target.value;
    }
}