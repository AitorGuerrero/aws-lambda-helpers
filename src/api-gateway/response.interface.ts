export default interface IResponse {
	statusCode: number;
	headers: {[name: string]: string};
	body: string;
}
