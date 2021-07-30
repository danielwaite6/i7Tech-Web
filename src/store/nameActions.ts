export interface ILoginSuccess {
    readonly type: 'LOGIN_SUCCESS';
    data: {
        name: string,
        email: string,
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