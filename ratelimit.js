class Ratelimit{
    constructor(){
     this.maxtoken = 10;
     this.array = [];
     this.consumedToken = 0; 
    }

    allowRequest(request,token){
     let {userID, timestamp} = request;

     if(this.array.length > 0){
        while(this.array.length > 0){
            if(timestamp - this.array[0] > 1m){
                this.consumedToken -= this.array[i].token;
                this.array.shift();
            } else{
                break;
            }
        }
        let possibleTokenConsumsion = this.consumedToken + token;
        if(possibleTokenConsumsion > this.maxtoken){
            return false;
        } else {
            let entryObj = {userID, timestamp, token};
            this.consumedToken += token;
            this.array.push(entryObj);
            return true;
        }
     } else {
        let entryObj = {userID, timestamp, token};
        this.consumedToken += token;
        this.array.push(entryObj);
        return true;
     }

    }
}
