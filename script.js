let nums=document.querySelectorAll(".digit");
let vals=document.querySelector("#value");
let signs=document.querySelectorAll(".sign");
nums.forEach((val)=>{
    val.addEventListener("click",()=>{
        if(val.innerText=="1"|| val.innerText=="2" || val.innerText=="3" || val.innerText=="4" || val.innerText=="5" || val.innerText=="6" || val.innerText=="7" || val.innerText=="8" || val.innerText=="9" || val.innerText=="0"){
            if(vals.innerText.length<17){
                if(vals.innerText=="0"){
                vals.innerText=val.innerText;
                }else{
                vals.append(val.innerText);
                }
            }
        }
        else if(val.innerText=="+/-"){
            if(vals.innerText.indexOf("-")<0){
                vals.prepend("-");
            }else{
                let str=vals.innerText;
                let splits=str.split("");
                splits.shift();
                let joins=splits.join("");
                vals.innerText=joins;
            }
        }
        else if(val.innerText=="DEL"){
            if(vals.innerText!=0){
                let str=vals.innerText;
                let splits=str.split("");
                splits.pop();
                let joins=splits.join("");
                if(joins==""){
                    vals.innerText="0";
                }else{
                    vals.innerText=joins;
                }
            }
        }
        else if(val.innerText=="+"){
            if(vals.innerText!=0){
                let str=vals.innerText;
                let splits=str.split("");
                let end=splits.at(-1);
                if(end!="+"){
                    vals.append(val.innerText);
                }
            }
        }
        else if(val.innerText=="-"){
            if(vals.innerText!=0){
                let str=vals.innerText;
                let splits=str.split("");
                let end=splits.at(-1);
                if(end!="-"){
                    vals.append(val.innerText);
                }
            }
        }
        else if(val.innerText=="*"){
            if(vals.innerText!=0){
                let str=vals.innerText;
                let splits=str.split("");
                let end=splits.at(-1);
                if(end!="*"){
                    vals.append(val.innerText);
                }
            }
        }
        else if(val.innerText=="/"){
            if(vals.innerText!=0){
                let str=vals.innerText;
                let splits=str.split("");
                let end=splits.at(-1);
                if(end!="/"){
                    vals.append(val.innerText);
                }
            }
        }
        else if(val.innerText=="."){
            let str=vals.innerText;
            let splits=str.split("");
            console.log(splits);
            let end=splits.at(-1);
            if(end!="."){
                vals.append(val.innerText);
            }
        }
        else if(val.innerText=="AC"){
            vals.innerText="0";
        }
        else if(val.innerText=="="){
            try{
            let value=eval(vals.innerText);
            vals.innerText=value;
            }
            catch(err){
            }
        }
    })
})