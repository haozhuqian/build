import chalk from 'chalk';
import logSymbols from 'log-symbols';

export const r = (msg: string, showIcon = true): void =>
  console.log(showIcon ? logSymbols.error : '', chalk.red(msg));

export const g = (msg: string, showIcon = true): void =>
  console.log(showIcon ? logSymbols.success : '', chalk.green(msg));

export const b = (msg: string, showIcon = true): void =>
  console.log(showIcon ? logSymbols.info : '', chalk.blue(msg));
