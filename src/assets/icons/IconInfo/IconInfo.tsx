import { FC } from 'react';
import { IIcon } from 'src/typed/interfaces';

type tProps = IIcon;

export const IconInfo: FC<tProps> = ({ className, width, height }) => {
    return (
        <svg
            width={width || '18'}
            height={height || '18'}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.22727 9C1.22727 13.2928 4.70724 16.7727 9 16.7727C13.2928 16.7727 16.7727 13.2928 16.7727 9C16.7727 4.70724 13.2928 1.22727 9 1.22727C4.70724 1.22727 1.22727 4.70724 1.22727 9ZM0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9ZM9.81818 10.2273V5.31818C9.81818 4.86631 9.45187 4.5 9 4.5C8.54813 4.5 8.18182 4.86631 8.18182 5.31818V10.2273C8.18182 10.6791 8.54813 11.0455 9 11.0455C9.45187 11.0455 9.81818 10.6791 9.81818 10.2273ZM9.57854 12.1033C9.89806 12.4228 9.89806 12.9408 9.57854 13.2604C9.25902 13.5799 8.74098 13.5799 8.42146 13.2604C8.10194 12.9408 8.10194 12.4228 8.42146 12.1033C8.74098 11.7838 9.25902 11.7838 9.57854 12.1033Z"
            />
        </svg>
    );
};
