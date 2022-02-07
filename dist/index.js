"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Matematica = __importStar(require("./Matematica"));
const validator_1 = __importDefault(require("validator"));
let n1 = 11;
let n2 = 2;
console.log(`Aritimétia sobre os números: ${n1} e ${n2}`);
console.log(`Soma: ${Matematica.somar(n1, n2)}`);
console.log(`Subtração: ${Matematica.subtrair(n1, n2)}`);
console.log(`Multiplicação: ${Matematica.multiplicar(n1, n2)}`);
console.log(`Divisão: ${Matematica.dividir(n1, n2)}`);
console.log(validator_1.default.isEmail('roberto@tenil.com.br'));
