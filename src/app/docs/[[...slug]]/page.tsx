export default function docs({params}:{params:{slug:String[]}}) {
	if (params.slug?.length ==1 ){
		return <h1>Docs for {params.slug[0]}</h1>;
	}
	if (params.slug?.length == 2){
		return <h1>Docs for {params.slug[0]} in {params.slug[1]} </h1>;
	}
	return <h1>Docs Home page</h1>
}