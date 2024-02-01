import { Image } from 'antd';
import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import eye from '../../images/articles/eye.svg';
import like from '../../images/articles/like.svg';
import { Link } from 'react-router-dom';
import { dataListArticles } from '../../constants/articlesData/listArticles';

const ListArticlesPage = () => {
	const initialLikes = dataListArticles.map((el) => el.like); // Используем начальные значения из dataListArticles
	const [likes, setLikes] = useState(initialLikes);
	const [likedArticles, setLikedArticles] = useState([]);

	useEffect(() => {
		const likedArticlesFromStorage = JSON.parse(localStorage.getItem('likedArticles')) || [];
		setLikedArticles(likedArticlesFromStorage);
	}, []);

	const handleLikeClick = (index) => {
		if (likedArticles.includes(index)) {
			// Пользователь уже поставил лайк для этой статьи
			return;
		}

		const updatedLikes = [...likes];
		updatedLikes[index] += 1;
		setLikes(updatedLikes);

		const updatedLikedArticles = [...likedArticles, index];
		setLikedArticles(updatedLikedArticles);

		localStorage.setItem('likedArticles', JSON.stringify(updatedLikedArticles));
	};

	return (
		<main className='sd:pt-32 xyy:pt-24 pb-24'>
			<Helmet>
				<title>{'Статьи на тему ремонта бытовой техники'}</title>
				<meta name="description" content={'Ищете информацию о ремонте бытовой техники? Наши статьи предоставляют полезные советы и рекомендации для успешного ремонта ваших устройств. Узнайте, как справиться с поломками и улучшить работу ваших бытовых приборов.'} />
			</Helmet>

			<div className='container mx-auto'>
				<section className=''>
					<div className=''>
						<h1 className='uppercase text-center text-2xl'>
							Полезные статьи для клиентов
						</h1>
					</div>

					<div className='mt-16'>
						<ul className='flex flex-wrap'>
							{dataListArticles.map((el, index) => {
								return (
									<li className='sd:flex sd:justify-between xyy:flex-row sd:w-1/2 xyy:w-full mb-10' key={index}>
										<div className='sd:w-1/2 xyy:w-full xyy:mb-6'>
											<Image src={el.img} className='' alt='Изображение статьи' preview={false} />
										</div>
										<div className='px-3'>
											<h2 className='uppercase cursor-pointer font-semibold underline tracking-wide leading-6 xyy:text-sm sd:text-base'>
												<Link to={el.link}>
													{el.h2}
												</Link>
											</h2>
											<div className='flex items-center pl-2'>
												<div className='flex items-center'>
													<div className='w-6'>
														<Image src={eye} alt='Просмотры' className='' preview={false} />
													</div>
													<span className='ml-2'>
														{el.view}
													</span>
												</div>
												<div className='flex items-center ml-6'>
													<div className='w-6'>
														<Image
															src={like}
															className={`cursor-pointer ${likedArticles.includes(index) ? 'liked' : ''}`}
															onClick={() => handleLikeClick(index)} // Добавляем обработчик события
															preview={false}
														/>
													</div>
													<span className='ml-2'>
														{likes[index]} {/* Используем значение из состояния */}
													</span>
												</div>
											</div>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</section>
			</div>
		</main>
	);
};

export default ListArticlesPage;
