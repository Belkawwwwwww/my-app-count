import React, {ButtonHTMLAttributes, ReactNode} from "react";


export const ButtonVariants = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
} as const

export type BtnVariants = (typeof ButtonVariants) [keyof typeof ButtonVariants]

export const ButtonSize = {
    S: 'button--square--size-s',
    M: 'button--square--size-m',
} as const;

export type BtnSize = (typeof ButtonSize)[keyof typeof ButtonSize]

export const ButtonWidth = {
    S: 's',
    M: 'm'
}
export type BtnHeight = (typeof ButtonWidth) [keyof typeof ButtonWidth]

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    $variant?: BtnVariants
    $btnSquareSize?: BtnSize
    $btnWidth?: BtnHeight
    children?: ReactNode
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}