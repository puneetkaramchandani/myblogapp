import { auth_header } from "./auth_header";
import config from "./config.json";
import { API_CALL_METHODS } from "./constants";

export const getPostPreviewList = () =>
  fetch(`${config.backend_uri}/post`, {
    method: API_CALL_METHODS.GET,
    headers: auth_header(),
  });

export const getPostDetailByPostId = (post_id) =>
  fetch(`${config.backend_uri}/post/${post_id}`, {
    method: API_CALL_METHODS.GET,
    headers: auth_header(),
  });
