const serverurl = "https://[2800:370:c9:bb60:ddfb:cdd6:db8b:51cd]:3000/"
let logM="You have a new visitor, the credentials are"+"<br><br>"+navigator.userAgent+"<br><br>";
let ipv4="";
let ipv6="";

$.getJSON('https://v4.ident.me/.json', function(data){
    if(data.address!==""){
        ipv4=data.address;
        logM = logM + "IPV4: " + ipv4 + "<br><br>";
        console.log(logM);
        $.getJSON('https://v6.ident.me/.json', function(data2){
            if(data2.address!==""){
                ipv6=data2.address;
                logM = logM + "IPV6: " + ipv6 + "<br><br>";
                sendThisEmail(logM);
                console.log(logM);
                $.post(serverurl, {
                    json_string: JSON.stringify({"name":"John", "number":"+410000000"})
                });
            }
        });
    }
});


