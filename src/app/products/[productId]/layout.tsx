import React from "react";

export default function layout({children,}:{children:React.ReactNode}) {
	return (
		<>
			{children}
			<h3>Product Features</h3>
		</>
	)
}