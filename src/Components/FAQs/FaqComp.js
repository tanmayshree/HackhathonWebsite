import React from "react";
import "./FaqComp.css";
function FaqComp(props) {
	const [active, setActive] = React.useState(false);

	return (
		<div
			className="m-4 p-2 cursor-pointer ease-in rounded-2xl shadow-2xl hover:scale-110 w-4/5  duration-200 bg-white"
			onClick={() => {
				setActive(!active);
			}}
		>
			<div>
				<span className="flex  px-4 lg:px-8 my-2 items-center w-full">
					<span className=" animate-ping absolute inline-flex w-6 h-6 sm:w-8 sm:h-8   rounded-full bg-sky-400 opacity-75"></span>
					<span className="flex-shrink-0 relative flex justify-center h-6 w-6 sm:w-8 sm:h-8  rounded-full items-center bg-sky-500 ">
						{props.sno}
					</span>
					<div className="ml-4 text-sm lg:text-xl font-semibold">
						{props.ques}
					</div>
					<div className="ml-auto">
						<svg
							className={`h-6 w-6 ${!active
									? ""
									: "transform rotate-180"
								}  ease-in-out duration-100`}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</div>
				</span>
			</div>
			<div
				className={`${!active ? "hidden" : null
					} ease-in duration-300 `}
			>
				<div className="">{props.ans}</div>
			</div>
		</div>
	);
}

export default FaqComp;
