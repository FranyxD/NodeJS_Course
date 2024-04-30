const winston = require('winston');

const logger = winston.createLogger({
  // Define el nivel de logueo como 'info'
  level: 'info',
  // Establece el formato de logueo como JSON
  format: winston.format.json(),
  // Define los metadatos por defecto como el servicio 'user-service'
  //! defaultMeta: { service: 'user-service' },
  // Define los transportes para el logueo
  transports: [
    //
    // - Escribe todos los logs con nivel de importancia `error` o menos en `error.log`
    // - Escribe todos los logs con nivel de importancia `info` o menos en `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }), // Escribe logs de nivel `error` en error.log
    new winston.transports.File({ filename: 'combined.log' }), // Escribe logs de nivel `info` en combined.log
  ],
});

//para desarrollo
logger.add(new winston.transports.Console({
  format: winston.format.simple(),
}));

console.log();

module.exports = function buildLogger(servicio){
  return {
    log:(message) => {
      logger.log('info',{ message, servicio});
    }
  }
}