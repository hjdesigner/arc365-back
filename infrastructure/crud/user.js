const bcrypt = require('bcryptjs');
const executeQuery = require('../database/queries')

class User {
  add(item) {
    const {
      name_user,
      lastname_user,
      email_user,
      password_user,
      permission_user,
    } = item

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password_user, salt);
    
    const sql = `INSERT INTO user(
      name_user,
      lastname_user,
      email_user,
      password_user,
      permission_user
    ) VALUES(
      '${name_user}',
      '${lastname_user}',
      '${email_user}',
      '${hash}',
      '${permission_user}'
    )`
    return executeQuery(sql).then((response) => ({
      id_user: response.id,
      name_user,
      lastname_user,
      email_user,
      permission_user,
    }))
  }
}

module.exports = new User
