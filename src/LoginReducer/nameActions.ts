/**export interface ILoginSuccess {
    readonly type: 'LOGIN_SUCCESS';
    data: {
        name: string,
        email: string,
        token: string,
    }
} */
//export type ActionsLoginSuccess = | ILoginSuccess;
////////////////////////////////////////////////////


export type Action = {
    type: "LOGIN_SUCCESS"; payload: {
        name: string, email: string, token: string
    }
};

export const addNote = (note: { name: string, email: string, token: string }): Action => ({
    type: "LOGIN_SUCCESS",
    payload: note,
});


