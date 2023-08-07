export interface User {
    id : number;
    first_name : string;
    last_name : string;
    email : string;
    access_token : string | null;
    refresh_token : string | null;
    expire_in : number;
    created_at : string;
    updated_at : string;
}

export interface UserData {
    id: string;
    first_name : string;
    last_name : string;
    is_email_verified : boolean;
    email : string;
    created_at : string;
    updated_at : string;
}