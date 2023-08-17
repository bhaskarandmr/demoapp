import React from 'react'
import { useRouter } from "next/router";

export default function api({ detailData }, props) {
  const router = useRouter();
  const [jsondata, setJsondata] = React.useState(detailData[0]);

  return (
    <div align="center">
      
      {jsondata.name}
      <br/>
      {jsondata.email}
      <br/>
      {jsondata.body}

      <br/>
    </div>
  )
}
export async function getServerSideProps(context) {
  const collegeId = context.query.college
  try{

    let getData = await fetch (`https://jsonplaceholder.typicode.com/comments?postId=1`);
    let res = await getData.json();
    return {
      props : {
        detailData : res

      }
    }
    }
    catch{
      console.log("something error");
    }
}
