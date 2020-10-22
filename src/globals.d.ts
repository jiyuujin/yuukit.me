declare module '*.scss' {
    const content: { [className: string]: string }
    export = content
}

declare module '*.svg' {
    const content: any
    export default content
}

declare module '*.png' {
    const content: any
    export default content
}

interface Process {
    browser: boolean
}

// @ts-ignore
declare let process: Process

// @ts-ignore
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'cookie-footer': React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            >
        }
    }
}
