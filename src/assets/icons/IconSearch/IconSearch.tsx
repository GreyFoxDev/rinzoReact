import { FC } from 'react';
import { IIcon } from 'src/typed/interfaces';

type tProps = IIcon;

export const IconSearch: FC<tProps> = ({ className, width, height }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5428 0.666016C11.4294 0.666016 14.5907 3.75765 14.5907 7.5585C14.5907 9.35172 13.887 10.9872 12.7355 12.2147L15.0014 14.426C15.2135 14.6334 15.2142 14.9689 15.0021 15.1763C14.8965 15.281 14.7568 15.3327 14.6178 15.3327C14.4796 15.3327 14.3406 15.281 14.2342 15.1777L11.941 12.9413C10.7346 13.8861 9.20504 14.4517 7.5428 14.4517C3.65623 14.4517 0.494141 11.3593 0.494141 7.5585C0.494141 3.75765 3.65623 0.666016 7.5428 0.666016ZM7.5428 1.7277C4.25478 1.7277 1.57977 4.343 1.57977 7.5585C1.57977 10.774 4.25478 13.39 7.5428 13.39C10.8301 13.39 13.5051 10.774 13.5051 7.5585C13.5051 4.343 10.8301 1.7277 7.5428 1.7277Z"
            />
        </svg>
    );
};
