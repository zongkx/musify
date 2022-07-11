import { v4 as uuidv4 } from "uuid";
import nullcover from "./null.jpg";

import Mojito from "./audio/Mojito.flac";
import 最伟大的作品 from "./audio/最伟大的作品.mp3";




function chillHop() {
  return [

    {
      name: "Mojito",
      cover:
        "https://img.alicdn.com/bao/uploaded/i1/2172427566/O1CN01kf4vBN25lHBrauwWP_!!0-item_pic.jpg",
      artist: "周杰伦",
      audio: Mojito,
      color: ["#F6F6EE", "#888984"],
      id: uuidv4(),
      active: false,
    },
     {
          name: "最伟大的作品",
          cover:
            "https://img.alicdn.com/bao/uploaded/i1/2172427566/O1CN01kf4vBN25lHBrauwWP_!!0-item_pic.jpg",
          artist: "周杰伦",
          audio: 最伟大的作品,
          color: ["#F6F6EE", "#888984"],
          id: uuidv4(),
          active: false,
        },
  ];
}

export default chillHop;
