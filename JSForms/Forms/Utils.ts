namespace Forms {
    export class Utils {

        public static SetColor(control: HTMLElement, color: Forms.Color, prefix: string = '') {

            if (prefix != '') {
                prefix = prefix + '-';
            }

            $(control).removeClass(prefix + 'default');
            $(control).removeClass(prefix + 'primary');
            $(control).removeClass(prefix + 'success');
            $(control).removeClass(prefix + 'info');
            $(control).removeClass(prefix + 'warning');
            $(control).removeClass(prefix + 'danger');
            $(control).removeClass(prefix + 'link');

            switch (color) {
                case Forms.Color.Default:
                    $(control).addClass(prefix + 'default');
                    break;
                case Forms.Color.Primary:
                    $(control).addClass(prefix + 'primary');
                    break;
                case Forms.Color.Success:
                    $(control).addClass(prefix + 'success');
                    break;
                case Forms.Color.Info:
                    $(control).addClass(prefix + 'info');
                    break;
                case Forms.Color.Warning:
                    $(control).addClass(prefix + 'warning');
                    break;
                case Forms.Color.Danger:
                    $(control).addClass(prefix + 'danger');
                    break;
            }
        }

        public static SetSize(control: HTMLElement, size: Forms.Size, prefix: string = '') {

            if (prefix != '') {
                prefix = prefix + '-';
            }

            $(control).removeClass(prefix + 'lg');
            $(control).removeClass(prefix + 'sm');
            $(control).removeClass(prefix + 'xs');
            $(control).removeClass(prefix + 'block');

            switch (size) {
                case Forms.Size.Large:
                    $(control).addClass(prefix + 'lg');
                    break;
                case Forms.Size.Small:
                    $(control).addClass(prefix + 'sm');
                    break;
                case Forms.Size.ExtraSmall:
                    $(control).addClass(prefix + 'xs');
                    break;
                case Forms.Size.Block:
                    $(control).addClass(prefix + 'block');
                    break;
            }
        }
    }
}