import React, { FC } from 'react';
import scss from './Style.module.scss';
import Image from 'next/image';
import k7Movie from '@/assets/projects/k7.movie.png';
import k7AppleWatch from '@/assets/projects/k7.applewatch.png';
import k7bicycle from '@/assets/projects/k7.bicycle.png';
import k7StrongPass from '@/assets/projects/k7.password.png';
import k7Food from '@/assets/projects/k7.food.png';
import { ArrowUpRightIcon, GithubIcon } from '@/components/svgs';
import { FormattedMessage } from 'react-intl';

interface projectsTypes {
	title: string;
	description: any;
	stack: Array<string>;
	codeLink: string;
	demoLink: string;
	image: any;
}

const ProjectPage: FC = () => {
	const projects: projectsTypes[] = [
		{
			title: 'TMDB Movie 🎥',
			description:
				'The Movie Database (TMDB) — это популярная онлайн-платформа, предоставляющая обширную базу данных о фильмах, телешоу и актерах. Пользователи могут находить информацию о рейтингах, описаниях, трейлерах и обзорах, а также создавать списки избранного. TMDB активно поддерживается сообществом, позволяя добавлять и редактировать контент. Сайт также предоставляет API, который широко используется разработчиками для создания кино-приложений и сайтов.',
			stack: ['Redux', 'TypeScript', 'Figma', 'RestAPI'],
			codeLink: 'https://github.com/kyazorozalievich/tmdb.git',
			demoLink: 'https://tmdb-topaz.vercel.app',
			image: k7Movie
		},
		{
			title: 'Apple Watch 🍎',
			description:
				'Apple Watch Shop — это интернет-магазин, специализирующийся на продаже умных часов Apple Watch. На сайте представлены различные модели, включая последние версии, а также аксессуары, такие как ремешки и зарядные устройства. Магазин ориентирован на удобство выбора и покупки, предлагая описание продуктов, сравнение моделей и доступ к актуальным акциям.',
			stack: ['React', 'Tailwind', 'RestAPI', 'Apple'],
			codeLink: 'https://github.com/kyazorozalievich/applewatch.git',
			demoLink: 'https://applewatch-eosin.vercel.app/',
			image: k7AppleWatch
		},

		{
			title: 'Bicycle Shop 🚲',
			description:
				'Bicycle Shop — это сайт, посвященный продаже велосипедов и сопутствующих аксессуаров. Здесь можно найти широкий ассортимент велосипедов для разных целей: горные, шоссейные, городские и детские модели. Кроме того, сайт предлагает запчасти, экипировку и инструменты для обслуживания. Часто представлены рекомендации по выбору, акции и сезонные скидки.',
			stack: ['React', 'Tailwind', 'Redux-Toolkit'],
			codeLink: 'https://github.com/kyazorozalievich/bicycle.git',
			demoLink: 'https://bicycle-nine.vercel.app',
			image: k7bicycle
		},
		{
			title: 'Food 🍔',
			description: `  Food — сайт, посвящённый всему, что связано с едой. Здесь можно найти рецепты, советы по приготовлению блюд, информацию о ресторанах, продуктах и доставке еды. Сайт может включать разделы с подборками диетических блюд, кулинарными лайфхаками и рекомендациями по здоровому питанию. Подходит для любителей готовить и тех, кто ищет вдохновение для своего следующего приёма пищи.`,
			stack: ['React', 'SCSS', 'NodeJS', 'MongoDB'],
			codeLink: 'https://github.com/kyazorozalievich/food.git',
			demoLink: 'https://food-my.vercel.app/',
			image: k7Food
		},
		{
			title: 'Strong Pass 🔑',
			description:
				'Strong Pass — это сайт или сервис, предоставляющий инструменты для создания надежных паролей, их хранения и управления ими. Он помогает пользователям генерировать сложные пароли, которые обеспечивают безопасность аккаунтов, и часто включает функции автоматического заполнения паролей, двухфакторной аутентификации и защиты личных данных. Такой сервис может быть полезен для тех, кто хочет улучшить уровень безопасности в Интернете и избежать использования простых паролей.',
			stack: ['HTML', 'SCSS', 'JavaScript', 'NextJs'],
			codeLink: 'https://elkhan2003.github.io/Mogo/',
			demoLink: 'https://strong-pass-ashy.vercel.app',
			image: k7StrongPass
		}
	];

	return (
		<>
			<div
				id="project"
				className={`${scss.text__z__index} ${scss.project__page}`}
			>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.title}>
							<h1>
								<FormattedMessage id="page.project.title_1" />
							</h1>
							<h2>
								<FormattedMessage id="page.project.title_2" />
							</h2>
						</div>

						{projects.map((project, index) => (
							<div
								className={`${scss.card} ${
									index % 2 !== 0 ? scss.row__reverse : ''
								}`}
								key={index + 1}
							>
								<div className={scss.pro__text}>
									<h3>{project.title}</h3>
									<p>{project.description}</p>
									<div className={scss.stack}>
										{project.stack.map((item, index) => (
											<p key={index + 1}>{item}</p>
										))}
									</div>
									<div className={scss.links}>
										<a
											className={`${scss.code}`}
											href={project.codeLink}
											target="_blank"
										>
											Code
											<GithubIcon />
										</a>
										<a
											className={`${scss.demo}`}
											href={project.demoLink}
											target="_blank"
										>
											Live Demo
											<ArrowUpRightIcon />
										</a>
									</div>
								</div>
								<div className={`${scss.pro__img}`}>
									<a href={project.demoLink} target="_blank">
										<Image
											priority={true}
											quality={25}
											loading="eager"
											src={project.image}
											alt={'project'}
										/>
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectPage;
