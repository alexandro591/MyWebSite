const serverurl = "https://[2800:370:c9:bb60:ddfb:cdd6:db8b:51cd]:3000/"
let logM="You have a new visitor, the credentials are"+"<br><br>"+navigator.userAgent+"<br><br>";


$.getJSON('https://ip.seeip.org/geoip', function(data){
    if(data.ip!==""){
        logM = logM + "IP iformation: " + JSON.stringify(data) + "<br><br>";
        sendThisEmail(logM);
        console.log(logM);
        $.post(serverurl, {
            json_string: JSON.stringify({"name":"John", "number":"+410000000"})
        });
    }
});

