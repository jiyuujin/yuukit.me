declare module '*.scss' {
    const content: { [className: string]: string }
    export = content
}

interface Process {
    browser: boolean
}

declare let process: Process
