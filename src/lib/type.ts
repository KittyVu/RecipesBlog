export type LoginType = {
    open: Boolean;
    onClose: () => void;
    onLoginSuccess: (user: UserSessionType) => void;
}

export type UserSessionType = {
    exp: number;
    id: number;
    username:string;
}