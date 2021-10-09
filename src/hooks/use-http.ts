import { useReducer, useCallback } from 'react';

interface IHTTPState {
	data: unknown;
	error: string | null;
	status: 'pending' | 'completed' | null;
}

type Action = {
	type: HTTPReducerActions;
	responseData?: unknown;
	errorMessage?: string;
};

type HTTPReducerActions = 'SUCCESS' | 'ERROR' | 'SEND';

function httpReducer(state: IHTTPState, action: Action): IHTTPState {
	if (action.type === 'SEND') {
		return {
			data: null,
			error: null,
			status: 'pending',
		};
	}

	if (action.type === 'SUCCESS') {
		return {
			data: action.responseData || [],
			error: null,
			status: 'completed',
		};
	}

	if (action.type === 'ERROR') {
		return {
			data: null,
			error: action.errorMessage ? action.errorMessage : null,
			status: 'completed',
		};
	}

	return state;
}

const useHttp = <T>(
	requestFunction: (requestData?: unknown) => Promise<T>,
	startWithPending = false
) => {
	const [httpState, dispatch] = useReducer(httpReducer, {
		status: startWithPending ? 'pending' : null,
		data: null,
		error: null,
	});

	const sendRequest = useCallback(
		async function (requestData?: unknown) {
			dispatch({ type: 'SEND' });
			try {
				const responseData = await requestFunction(requestData);

				dispatch({ type: 'SUCCESS', responseData });
			} catch (error) {
				if (error instanceof Error) {
					dispatch({
						type: 'ERROR',
						errorMessage: error.message || 'Something went wrong!',
					});
				}
			}
		},
		[requestFunction]
	);

	return {
		sendRequest,
		...httpState,
		data: httpState.data as T | null,
	};
};

export default useHttp;
