function new_global_storage(){return{tick:1,shutdownEvents:[],reset:reset_global_storage,dirname:__dirname}}function reset_global_storage(){global_storage=new_global_storage()}function shutdown_callbacks(){}var global_storage=new_global_storage();exports.get_global_storage=function(){return global_storage}