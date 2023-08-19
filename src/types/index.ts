export interface IMaster {
	_id: string;
	name: string;
	avatar: string;
}

export interface IService {
	_id: string;
	masters: Array<string>;
	service: string;
	time: number;
	price: number;
}

export interface IUserInfo {
	customerName: string;
	email: string;
	phone: number;
}
