import {myLinks} from '../constants';
import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe,
	FiYoutube,
	FiInstagram,
	FiFacebook,
} from 'react-icons/fi';
import { FaEnvelope, FaGooglePlay, FaPhone, FaSnapchat, FaTelegram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '../utils/motion';

const socialLinks = [
	{
		id: 1,
		icon: <FiGlobe />,
		url: myLinks.web,
		hoverColor: 'hover:text-blue-500',
	},
	{
		id: 2,
		icon: <FiGithub />,
		url: myLinks.github,
		hoverColor: 'hover:text-gray-800',
	},
	{
		id: 3,
		icon: <FiTwitter />,
		url: myLinks.twitter,
		hoverColor: 'hover:text-blue-400',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: myLinks.linkedin,
		hoverColor: 'hover:text-blue-800',
	},
	{
		id: 5,
		icon: <FiInstagram />,
		url: myLinks.ig,
		hoverColor: 'hover:text-pink-500',
	},
	{
		id: 6,
		icon: <FiYoutube />,
		url: myLinks.youtube,
		hoverColor: 'hover:text-red-500',
	},
	{
		id: 7,
		icon: <FaWhatsapp />,
		url: myLinks.whatsapp,
		hoverColor: 'hover:text-green-500',
	},
	{
		id: 8,
		icon: <FiFacebook />,
		url: myLinks.facebook,
		hoverColor: 'hover:text-blue-600',
	},
	{
		id: 9,
		icon: <FaEnvelope />,
		url: myLinks.email,
		hoverColor: 'hover:text-gray-600',
	},
	{
		id: 10,
		icon: <FaTiktok />,
		url: myLinks.tiktok,
		hoverColor: 'hover:text-black',
	},
	{
		id: 11,
		icon: <FaGooglePlay />,
		url: myLinks.play,
		hoverColor: 'hover:text-green-500',
	},
	{
		id: 12,
		icon: <FaTelegram />,
		url: myLinks.telegram,
		hoverColor: 'hover:text-blue-400',
	},
	{
		id: 12,
		icon: <FaSnapchat />,
		url: myLinks.snap,
		hoverColor: 'hover:text-yellow-400',
	},
	{
		id: 13,
		icon: <FaPhone />,
		url: myLinks.call,
		hoverColor: 'hover:text-gray-600',
	},
];


const AppFooter = () => {
	return (
		<div className="pt-2 pb-2 mt-2 flex flex-col justify-center items-center">
			<motion.p variants={slideIn("up", "tween", 0.2, 2)} className="text-3xl sm:text-4xl text-[#fff] mb-5">
				Follow Me
			</motion.p>
			<motion.ul variants={slideIn("down", "tween", 0.2, 3)} className="flex flex-wrap flex-grow-0 gap-2 justify-center animate-pulse">
				{socialLinks.map((link) => (
					<a
						href={link.url}
						target="__blank"
						key={link.id}
						className={`text-gray-400 cursor-pointer rounded-lg bg-tertiary shadow-sm p-4 duration-300 hover:bg-gray-100 ${link.hoverColor}`}
					>
						<i className="text-xl sm:text-2xl md:text-3xl">
							{link.icon}
						</i>
					</a>
				))}
			</motion.ul>
			<p className="text-bold text-white mt-8 mb-4"><span className="text-gray-500">&copy;{new Date().getFullYear()}</span> <span className='text-slate-200'> Programmer DATCH</span></p>
		</div>
	);
};

export default SectionWrapper(AppFooter, "");
