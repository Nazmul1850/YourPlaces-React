import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Max Schwarz',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 3
    },
    {
      id: 'u2',
      name: 'Nazmul Hasan',
      image:
        'https://lh3.googleusercontent.com/Vc7o2Chd80B_ijJnaAbgjCPZhp5JiQuLeKHV0XkozmS_M4OR-G7laC3Q8_B1mMjJHgC-b_8i1ktFjHF_YltSj_SLAicVb5Xz-V_iaNY1kEyduahKE0z7brdDu5BN9ftctCcdg7RIUCzN_TFT1mms5N44cWNEkzK2PWAP4PgKlEJSyH3CWPuLXuvRZkkJcRXkqR2AdVIqywYtxCBwpce8iw2roLFYgiWYaD9vNCS_GKJdjB4zyqw8tRMTjshCQlHJLze6Hcm2oOCbwwYjt_OnoTNliYJz5t89Fl1t_YxP8lNT3hJDpu4viFBDtblKBxukx_zFzIni8RIHF91sR2k-iJ6QrWT1KbFEHPnwjk4Pm9ANx1IE4WCCXBIS4IvQUHyRTKKAjK78-xFYb2BxrGyqdVHuJqeMY97oGn-LivihA0QNjD9HPQvYtDs442qopd_H-dUVZo0knlq8JdXN9NpyDDhwFtP7OxMsvF13jwbP8EzumoQMUQ4Pyi1_YfVDQ0dmwOj9uJQNoYIJ3sisIZdMOJG1SgfNdQIOYMdw7IDvnygP49mMsWi8_eJ8a_s5Ov2eoGq6bgqT6Jg9heLEfL-G_VqLYlx5aWt3bZUSF1MaADydnk2fh8TD3urrgDbHzvC8IZRkgH7hJv1X2iqOZvQyaoEKotQU9ic1yn9R52aYV4iTPKz5GxMfJbtK296HdA=w1296-h972-no?authuser=0',
      places: 33
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
