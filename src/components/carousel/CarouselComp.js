import { Carousel, Image } from 'antd'

import holodilnik from '../../images/carousel/1.webp'
import kondicioner from '../../images/carousel/2.webp'
import stiralnyeMashiny from '../../images/carousel/3.webp'
import sushilnyeMashiny from '../../images/carousel/4.webp'
import posudomoechnaeMashiny from '../../images/carousel/5.webp'
import varochnyePaneli from '../../images/carousel/6.webp'
import duhovyeShkafy from '../../images/carousel/7.webp'
import televizory from '../../images/carousel/8.webp'
import pylesosy from '../../images/carousel/9.webp'

import { useScreens } from '../../constants/Constants'


const CarouselComp = () => {
const screens = useScreens()
	
	return (
		<Carousel
			autoplay
			effect='fade'
		>
			<div>
				<Image src={holodilnik} preview={false} />
			</div>
			<div>
				<Image src={kondicioner} preview={false} />
			</div>
			<div>
				<Image src={stiralnyeMashiny} preview={false}  />
			</div>
			<div>
				<Image src={sushilnyeMashiny} preview={false} />
			</div>
			<div>
				<Image src={posudomoechnaeMashiny} preview={false} />
			</div>
			<div>
				<Image src={varochnyePaneli} preview={false} />
			</div>
			<div>
				<Image src={duhovyeShkafy} preview={false} />
			</div>
			<div>
				<Image src={televizory} preview={false} />
			</div>
			<div>
				<Image src={pylesosy} preview={false} />
			</div>
			

		</Carousel>

	)
}
export default CarouselComp
