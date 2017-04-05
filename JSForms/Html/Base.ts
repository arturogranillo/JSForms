namespace Html {
    export class Base {
        control: HTMLElement;

        constructor(type: string) {
            this.control = <HTMLElement>$.parseHTML(type)[0];
        }

        get Id() {
            return $(this.control).attr('id');
        }

        get Jq() {
            return $(this.control);
        }

        Append(html: Base): void {
            this.Jq.append(html.Jq);
        }
    }
}