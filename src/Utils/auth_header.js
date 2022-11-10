import config from "./config.json";

export function auth_header(){
    // return app_id header
    let auth_token = config.app_id;
    return { 'app-id':auth_token};
}