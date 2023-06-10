import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function Room() {
    const{roomID} = useParams();
    let myMeeting = async (element) =>{
        const appID = 562077617 ;
        const serverSecret = "#";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "satyajit" );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: 'Copy link',
                url:
                 window.location.protocol + '//' + 
                 window.location.host + window.location.pathname +
                  '?roomID=' +
                  roomID,
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
          });

    }
  return (
    <div ref={myMeeting} > Room</div>
  )
}

export default Room