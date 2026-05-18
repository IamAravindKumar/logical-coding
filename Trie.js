class Node{
    constructor(){
        this.keys = new Map();
        this.end = false;
    }
    
    setEnd(){
        this.end = true;
    }
    
    isEnd(){
        return this.end;
    }
}

class Trie{
    constructor(){
        this.root = new Node();
    }
    
    add(str, node=this.root){
        if(str.length == 0){
            node.setEnd();
            return;
        }
        if(!node.keys.get(str[0])){
            node.keys.set(str[0], new Node())
            return add(str.substr(1), node.keys.get(str[0]))
        } else{
            return add(str.substr(1), node.keys.get(str[0]))
        }
    }
    
    isWord(word){
        let node = this.root;
        while(word.length > 1){
            if(!node.keys.get(word[0])){
                return false;
            } else {
                node = node.keys.get(word[0]);
                word = word.substr(1);
            }
        }
        
        return node.keys.has(word[0]) && node.keys.get(word[0]).isEnd() ? true : false;
    }
}
