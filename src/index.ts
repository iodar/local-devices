import find from "local-devices";

find().then(device => {
    console.log(device);
})