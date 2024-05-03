import winston from 'winston';

const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: "info",

  format: combine(timestamp(), json()),
  transports: [
    //
    // - Escribe todos los logs con nivel de importancia `error` o menos en `error.log`
    // - Escribe todos los logs con nivel de importancia `info` o menos en `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }), // Escribe logs de nivel `error` en error.log
    new winston.transports.File({ filename: "combined.log" }), // Escribe logs de nivel `info` en combined.log
  ],
});

//para desarrollo
logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);

console.log();

export const buildLogger = (servicio:string) => {
  return {
    log: (message:string) => {
      logger.log("info", { message, servicio });
    },
    error: (message:string) => {
      logger.error("error", {
        message,
        servicio,
        //at: new Date().toISOString(),
      });
    },
  };
};
