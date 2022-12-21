import React, { use } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
const ExitButton = () => {
	const router = useRouter();

	const logoutBtn = () => {
		Swal.fire({
			title: 'Are you sure?',
			text: 'Do you want to logout?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#023020',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, logout!',
		}).then((result) => {
			if (result.isConfirmed) {
				router.push('/');
			}
		});
	};
	return (
		<div className="my-auto">
			<button className="rotate-180 hover:rotate-90 " onClick={logoutBtn}>
				<Image
					src="/mainPageLogo/logout-btn.png"
					height={50}
					width={50}
					alt="load..."
				/>
			</button>
		</div>
	);
};

export default ExitButton;
