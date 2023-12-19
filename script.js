let input = document.querySelector("#name");
let fb = document.querySelector("#fb");
let insta = document.querySelector("#insta");
let whatsapp = document.querySelector("#whatsapp");
let fpara = document.querySelectorAll(".fpara");
let text = Array.from(document.querySelectorAll(".text"));
let button = document.querySelector("button");

button.addEventListener('click', hacked);

async function hacked(){
    if((input.value !== "") && (fb.checked || insta.checked || whatsapp.checked)){
        let para = setInterval(()=>{
            fpara[0].innerHTML = randomNum();
            fpara[0].style.fontSize = "14.9px";
        }, 250);
        let para1 = setInterval(()=>{
            fpara[1].innerHTML = randomNum();
            fpara[1].style.fontSize = "14.9px";
        }, 300);
        let data = await initializeHacking();
        console.log(data); 
    }
    else if((input.value !== "") && (!fb.checked || !insta.checked || !whatsapp.checked)){
        alert("Please choose atleast one option below.");
    }
}
hacked();

const randomNum = () => {
   let num = "";
   while(num.length < 1000){
    num = num.concat(Math.floor(Math.random() * 2));
   }
   return num;
}


const initializeHacking = async () => {    

    for (let i = 0; i < text.length; i++) {
        const element = text[i];

        let hackData = await new Promise((resolve)=>{
            setTimeout(()=>{
                text[0].innerHTML = "Initialiazing hacking...";
                resolve(1);
            }, 1000);
        });
    
        let readFiles = await new Promise((resolve)=>{
            setTimeout(()=>{
                text[1].innerHTML = "reading files...";
                resolve(1);
            }, 1300);
        });
    
        let detect = await new Promise((resolve)=>{
            setTimeout(()=>{
                text[2].innerHTML = "user located...";
                resolve(1);
            }, 2000);
        });
    
        let userName = await new Promise((resolve)=>{
            setTimeout(()=>{
                text[3].innerHTML = `username: ${input.value}`;
                resolve(1);
            }, 3500);
        });
        
        let password = await new Promise((resolve)=>{
            setTimeout(()=>{
                text[4].innerHTML = "trying a combination of 1.5 trillion password...";
                resolve(1);
            }, 3800);
        });
    
        let passDetect = await new Promise((resolve)=>{
            setTimeout(()=>{
                text[5].innerHTML = "password detect successfully...";
                resolve(1);
            }, 4000);
        });
    
        let passD = await new Promise((resolve)=>{
            setTimeout(()=>{
                text[6].innerHTML = "password: XXXXXXX";
                resolve(1);
            }, 5000);
        });
    
        if(fb.checked && insta.checked && whatsapp.checked){
            let h = await new Promise((resolve)=>{
                setTimeout(()=>{
                    text[7].innerHTML = `${input.value}'s phone hacked!`;
                    resolve(1);
                }, 5000);
            });
        }
        else if(fb.checked){
            let h = await new Promise((resolve)=>{
                setTimeout(()=>{
                    text[7].innerHTML = `${input.value}'s facebook hacked!`;
                    resolve(1);
                }, 5000);
            });
        }
        else if(insta.checked){
            let h = await new Promise((resolve)=>{
                setTimeout(()=>{
                    text[7].innerHTML = `${input.value}'s instagram hacked!`;
                    resolve(1);
                }, 5000);
            });
        }
        else if(whatsapp.checked){
            let h = await new Promise((resolve)=>{
                setTimeout(()=>{
                    text[7].innerHTML = `${input.value}'s whatsapp hacked!`;
                    resolve(1);
                }, 5000);
            });
        }

    }
}

  
