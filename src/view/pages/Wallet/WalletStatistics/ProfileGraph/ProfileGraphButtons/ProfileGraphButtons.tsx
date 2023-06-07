import { FC, useState } from 'react';
import { ProfileGraphButton } from './ProfileGraphButton';
import { tProfileGraphButton, tProfileGraphButtonOptions } from './types';
import './ProfileGraphButtons.scss';

type tProps = {
	onChange?: (option: tProfileGraphButtonOptions) => void;
	buttonsData?: tProfileGraphButton[];
};

export const ProfileGraphButtons: FC<tProps> = ({ onChange, buttonsData }) => {
	const [activeButton, setActiveButton] = useState<tProfileGraphButtonOptions>('pnl');

	const clickButtonHandler = (arg: tProfileGraphButtonOptions) => {
		onChange && onChange(arg);
		setActiveButton(arg);
	};

	return (
		<div className="profile__graph__chart__buttons">
			{buttonsData?.map((item, index) => (
				<ProfileGraphButton
					key={index}
					title={item.title}
					price={item.price}
					hasEth={item.hasEth}
					hasUsd={item.hasUsd}
					btnType={item.btnType}
					activeButton={activeButton}
					clickButtonHandler={clickButtonHandler}
				/>
			))}
		</div>
	);
};
