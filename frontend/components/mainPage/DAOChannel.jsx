import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const DAOChannel = ({ img, name, active }) => {
	return (
		<div className={`${active ? 'bg-pink-500' : ''}`}>
			<motion.div whileHover={{ scale: 0.8 }} whileTap={{ scale: 0.9 }}>
				<div className="flex justify-center justify-items-center">
					<Image
						src={img}
						height={50}
						width={50}
						alt={name}
						className="bg-white rounded-lg"
					/>
				</div>
				<div
					className={`${
						active === true ? 'font-extrabold' : 'text-white'
					}`}
				>
					{name}
				</div>
			</motion.div>
		</div>
	);
};

export default DAOChannel;
