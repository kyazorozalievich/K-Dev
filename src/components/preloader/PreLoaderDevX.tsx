import React, { FC } from 'react';
import scss from '@/components/preloader/PreLoaderDevX.module.scss';

const PreLoaderDevX: FC = () => {
	return (
		<>
			<div className={scss.preLoader}>
				<p className={scss.title_loader}>
					Kyaz<span>Dev(k7)</span>
				</p>
				<span className={scss.loader}></span>
			</div>
		</>
	);
};
export default PreLoaderDevX;
