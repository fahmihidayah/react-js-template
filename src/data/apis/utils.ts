export const BASE_URL = "http://localhost:3001/"
export const BASE_API_URL = `${BASE_URL}api/v1/`;

export function getUrl(path : string) {
    return `${BASE_API_URL}${path}`;
}
