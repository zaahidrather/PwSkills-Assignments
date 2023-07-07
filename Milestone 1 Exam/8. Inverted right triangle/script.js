
let i,j,pattern= "";
    for(i=1;i<=6;i++){
        for(j=1;j<=6;j++){
            if(j<=7-i){
                pattern+="*";
            }else
                pattern+=" "
        }
        pattern+="\n";
    }
console.log(pattern);