const Todo = require('./todo');

Todo.methods(['get','post','put','delete']);

/**
 * Quando feito uma atualização, o node-restful irá retornar o dado atualizado
 * e não o antigo.
 * 
 * o runValidators é usado para validar as atualizações, já que por padrão validators
 * não são executado com ocorre um PUT
 */
Todo.updateOptions({new:true,runValidators:true});


module.exports = Todo;