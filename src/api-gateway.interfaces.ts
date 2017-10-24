import {IAsyncHandler} from './async-handler.service';

export type IAsyncApiHandler = IAsyncHandler<IEvent, IResponse>;

export interface IEvent {
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

export interface IResponse {
	statusCode: number;
	headers: {[name: string]: string};
	body: string;
}

export default interface IContext {
	done: () => void;
	succeed: () => void;
	fail: () => void;
	logGroupName: string;
	logStreamName: string;
	functionName: string;
	memoryLimitInMB: string;
	functionVersion: string;
	getRemainingTimeInMillis: () => number;
	invokeid: string;
	awsRequestId: string;
	invokedFunctionArn: string;
}
