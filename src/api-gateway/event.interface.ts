export default interface IEvent {
	pathParameters: {[key: string]: string};
	body: string;
	requestContext: {
		authorizer: {
			principalId: string;
		};
		apiId: string;
		stage: string;
		requestId: string;
		resourceId: string;
		accountId: string;
	};
}
