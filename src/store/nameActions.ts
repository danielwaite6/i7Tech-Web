export type AccessTypes = 'driver' | 'manager';

export interface ILoginSuccess {
    readonly type: 'LOGIN_SUCCESS';
    data: {
        name: string,
        email: string,
        token: string,
        //access: AccessTypes,
    }
}
//export interface IDecrementCountAction {
//readonly type: 'DECREMENT';
//}
export type ActionsLoginSuccess =
    | ILoginSuccess
    //| IDecrementCountAction



//export type CountActions =
//| ILoginSuccess
//| IDecrementCountAction