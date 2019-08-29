// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// export const environment = {
//   production: false,
//   authenticationUrl: 'http://localhost:8081/authenticate',
//   articleUrl: 'http://localhost:8081/articles'
// };
export const environment = {
  production: false,
  authenticationUrl: 'https://trinhkien.herokuapp.com/authenticate',
  articleUrl: 'https://trinhkien.herokuapp.com/articles'
};