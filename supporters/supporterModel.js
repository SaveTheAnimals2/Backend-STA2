const db = require("../database/dbConfig.js");

module.exports = {
    find,
    findBy,
    findById,
    add
  };
  
  function find() {
    return db('supporter').select(
        'id', 
        'username', 
        'email',
        'password',
        'created_at',
        'updated_at'
    );
  }
  
  function findBy(filter) {
    return db('supporter').where(filter);
  }
  
  function findById(id) {
    return db('supporter')
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
    const [id] = await db('supporter')
      .insert(user);
  
      return findById(id);
  }