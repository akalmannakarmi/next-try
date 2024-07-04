export default function review({params,}:{params:{productId:String,reviewId:String}}) {
	return <h1> Review {params.reviewId} for product {params.productId} </h1>
}