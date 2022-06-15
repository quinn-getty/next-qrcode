import {
  AbstractProvider,
  HttpProvider,
  IpcProvider,
  WebsocketProvider,
} from "web3-core";
import Web3 from "web3";

declare global {
  interface Window {
    web3?: Web3;
    ethereum?: {
      on: EventHandler;
      request: $TSFixMeFunc;
      networkVersion: string;
    };
  }
}
