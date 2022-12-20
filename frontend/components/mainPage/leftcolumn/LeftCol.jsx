import React from 'react';
import Image from 'next/image';
import DAOChannel from '../DAOChannel';
import ExitButton from './ExitButton';
import SimpleBar from 'simplebar-react';

const LeftCol = ({ currLeft, setCurrLeft }) => {
	return (
		<div className="sticky top-0 w-36 overflow-auto ">
			<SimpleBar style={{ maxHeight: "90vh" }}>
				<div className="pt-16 grid text-center">
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('polygon');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/polygon.png"
							name="Polygon"
							active={currLeft === 'polygon'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('ENS');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/ens.png"
							name="ENS"
							active={currLeft === 'ENS'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
					<div
						className="my-4"
						onClick={() => {
							setCurrLeft('Biconomy');
						}}
						style={{ cursor: 'pointer' }}
					>
						<DAOChannel
							img="/mainPageLogo/bico.png"
							name="Biconomy"
							active={currLeft === 'Biconomy'}
						/>
					</div>
				</div>
				<div>
					<ExitButton />
				</div>
			</SimpleBar>
		</div>
	);
};

export default LeftCol;
