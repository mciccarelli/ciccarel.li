export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://ciccarel.li/api'
    : 'http://localhost:3000/api';

export const GITHUB_API_URL = 'https://api.github.com/users/mciccarelli';

export const INSTAGRAM_API_URL =
  'https://www.instagram.com/minorvillain/?__a=1';

export const TWITTER_SCREEN_NAME = 'mciccarelli';
export const TWITTER_TOKEN_API_URL =
  'https://api.twitter.com/oauth2/token?grant_type=client_credentials';
export const TWITTER_TIMELINE_API_URL =
  'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=mciccarelli&exclude_replies=false&include_rts=true&count=50';
export const TWITTER_LIKES_API_URL =
  'https://api.twitter.com/1.1/favorites/list.json?screen_name=mciccarelli&count=50';
