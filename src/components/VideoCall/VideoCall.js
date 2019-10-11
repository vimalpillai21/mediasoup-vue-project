import * as mediasoupClient from "mediasoup-client";
import { async } from "q";
var protooClient = require('protoo-client');

const transport = new protooClient.WebSocketTransport('ws://localhost:4443');
const peer = new protooClient.Peer(transport);


export default {
  name: 'VideoCall',
  props: {
    msg: String,
    // disable: Boolean
  },
  data: function(){
    return {
        name: "Hello Name !",
        disable: false
    }
  },

  mounted: function(){
      console.log("Hello world mounted");  
      console.log(mediasoupClient.vesion);
      const device = new mediasoupClient.Device();
      console.log("Device has been loaded - " + device.loaded);
      setTimeout(() => {
       peer.notify('lalala', { foo: 'bar' });
      },4000)     
      
      // funct : async () => {
      //       const data = await peer.request('chicken', { foo: 'bar' })
      //       console.log("data : - " + data);
      //       this.disable = true;
      //       console.log("async function called");
      //       peer.notify('lalala', { foo: 'bar' });
      //       console.log('got response data:', data);
      //   }
      //   const h = await this.funct();
        
  },

  methods:{
    hello(){
      peer.notify('lalala', { foo: 'bar' });

        peer.on('request', (request, accept, reject) =>
        {

            if (something in request)
                accept({ foo: 'bar' });
            else
                reject(400, 'Not Here');
        });
        peer.on('notification', (notification) =>
        {
            // Do something.
            console.log("hello world");
            console.log(notification);
        });
    }
  }
}