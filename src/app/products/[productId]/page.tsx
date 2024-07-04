import { Metadata } from "next";

type Props = {
	params :{
		productId:string,
	};
};

export const generateMetadata = ({params}:Props) : Metadata => {
	return {
		title : `Product ${params.productId}`,
	};
}

export default function product({params,}:{params:{productId:string}}) {
	return <h1>Details about Product {params.productId}</h1>
}