namespace Forms {

    export const enum Color {
        Default,
        Primary,
        Success,
        Info,
        Warning,
        Danger
    }

    export const enum Size {
        Block,
        Large,
        Default,
        Small,
        ExtraSmall
    }

    export const enum MessageBoxButtons {
        OK = 0,
        ////OKCancel = 1,
        ////AbortRetryIgnore = 2,
        ////YesNoCancel = 3,
        YesNo = 4,
        ////RetryCancel = 5,
    }

    export const enum MessageBoxIcon {
        None = 0,
        Error = 16,
        Hand = 16,
        Stop = 16,
        Question = 32,
        Exclamation = 48,
        Warning = 48,
        Information = 64,
        Asterisk = 64,
    }

    export const enum DialogResult {
        None = 0,
        OK = 1,
        ////Cancel = 2,
        ////Abort = 3,
        ////Retry = 4,
        ////Ignore = 5,
        Yes = 6,
        No = 7,
    }
} 