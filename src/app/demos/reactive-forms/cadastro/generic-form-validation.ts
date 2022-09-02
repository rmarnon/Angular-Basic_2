import { FormGroup } from '@angular/forms';

export class GenericValidator {  
    constructor(private readonly validationMessages: ValidationMessages) {}

    processMessage(container: FormGroup): {[key: string]: string} {
        let messages = {};
        for (let controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
                let c = container.controls[controlKey];

                if (c instanceof FormGroup) {
                    let childMessages = this.processMessage(c);
                } else {
                    if (this.validationMessages[controlKey]) {
                        messages[controlKey] = '';
                        if (c.errors && (c.dirty || c.touched)) {
                            Object.keys(c.errors).map(messageKey => {
                                if (this.validationMessages[controlKey][messageKey]) {
                                    messages[controlKey] += this.validationMessages[controlKey][messageKey] + '<br />';
                                }
                            })
                        }
                    }
                }
            }            
        }
        return messages;
    }
}

export interface DisplayMessage {
  [key: string]: string;
}

export interface ValidationMessages {
  [key: string]: { [key: string]: string };
}
