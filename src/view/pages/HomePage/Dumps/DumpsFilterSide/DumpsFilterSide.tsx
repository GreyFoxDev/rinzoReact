import { FC } from 'react';
import { FilterSide } from 'src/view/components';

interface IProps {
	changeFilterOpenOption: (arg: boolean) => void;
	openMobile: boolean;
}

export const DumpsFilterSide: FC<IProps> = ({ changeFilterOpenOption, openMobile }) => {
	return (
		<>
			<FilterSide changeFilterOpenOption={changeFilterOpenOption} openMobile={openMobile} />
		</>
	);
};
