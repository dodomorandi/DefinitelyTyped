import { Ref } from 'react';

export interface Reserved {
    id: string;
    role: 'document';
    tabIndex: 0;
    'aria-label': string;
    'data-block': string;
    'data-type': string;
    'data-title': string;
}

export interface Merged {
    className: string;
    style: Record<string, unknown>;
    ref: (value: unknown) => void;
}

export interface UseBlockProps {
    <Props extends Record<string, unknown>>(
        props?: Props & {
            [K in keyof Props]: K extends keyof Reserved ? never : Props[K];
        } & { ref?: Ref<unknown> },
    ): Pick<Props, Exclude<keyof Props, 'ref'>> & Merged & Reserved;

    save: (props?: Record<string, unknown>) => Record<string, unknown>;
}

export const useBlockProps: UseBlockProps;
