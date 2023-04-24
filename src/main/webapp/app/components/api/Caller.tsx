import React from 'react';
import {Config} from "../commons/Config";
const {BASE_URL, METHOD_POST, HEADER} = Config;
export class Caller {
    callnow = async (endpoint, method, body = null, type = null) => {
        // console.log("Endpoint ", endpoint)
      const baseUrl = BASE_URL
      const generatedHeader =
          this.generateHeader(method, body, type);
        // console.log("url ", `${baseUrl}/${endpoint}`, " headers ", generatedHeader)
      return await fetch(`${baseUrl}/${endpoint}`/*, generatedHeader*/)
    }

  generateAccessToken = () => {
        return null;
  }

  generateHeader = (method, body=null, type=null) => {
      const accessToken = this.generateAccessToken;
      let requestParameters = {
          method: `${method}`,
          redirect: 'follow',
          mode: 'no-cors'
      };
      if(type === HEADER)
          requestParameters.headers= {
               'Authorization': `Bearer ${accessToken}`,
               'content-Type': 'Application/json'
      }
      if (method === METHOD_POST)
          requestParameters.body = body;
      return requestParameters;
  }
}



