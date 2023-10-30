import { NextResponse } from "next/server";
const axios = require('axios');


export async function GET(request) {
    const options = {
        method: 'GET',
        url: 'https://unogsng.p.rapidapi.com/genres',
        headers: {
          'X-RapidAPI-Key': '53c76e9de5mshcbc3fb667eaa704p1b2a3fjsne912c74eaf98',
          'X-RapidAPI-Host': 'unogsng.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
    return NextResponse.json(response,{status:200})

      } catch (error) {
          console.error(error);
      }


}