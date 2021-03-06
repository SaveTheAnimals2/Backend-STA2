const db = require("../database/dbConfig.js");

module.exports = {
    find,
    findBy,
    findById,
    add
  };
  
  function find() {
    return db('users').select(
        'id', 
        'username', 
        'email',
        'password',
        'created_at',
        'updated_at'
    );
  }
  
  function findBy(filter) {
    return db('users').where(filter);
  }
  
  function findById(id) {
    return db('users')
      .where({ id })
      .select(
          'id',
          'username',
          'email',
          'password',
          'created_at',
          'updated_at'
      )
      .first();
  }

  async function add(user) {
    const [id] = await db('users')
      .insert(user);
  
      return findById(id);
  }