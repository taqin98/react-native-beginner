const routeApi = {
    login: 'auth/login',
    list_karyawan: 'main/list_karyawan',
    detail_karyawan: 'main/detail_karyawan',
    add_karyawan: 'main/add_karyawan',
    update_karyawan: 'main/update_karyawan',
    delete_karyawan: 'main/delete_karyawan',
  };
  const baseURL = 'https://gmedia.bz/DemoCase/';

  let sessionKey = '@session';

  export { routeApi, baseURL, sessionKey };