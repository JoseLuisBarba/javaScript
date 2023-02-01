const {LinkedNode} = require('./LinKedNode');

/**
 * @author Jose Luis Barba
 * @public
 * @class
 */

class LinkedList{

    /**
     * @public
     * @constructor LinkedList
     */
    constructor(){
        this.#head = NULL;
        this.#lenght = 0;
    }

    /**
     * @public
     * @returns {boolean}
     */
    isEmpty(){
        return this.#head == NULL;
    }
    
    /**
     * @public
     * @returns {number}
     */
    getlenght(){
        return this.#lenght;
    }

    /**
     * @public 
     * @param {Object} object 
     * @returns {LinkedNode} 
     */
    putFirst(object){
        this.#head = new LinkedNode(object,this.#head);
        this.#lenght ++;
        return this.#head;
    }

    removeFirst(){
        if (this.isEmpty())
            return null;
        const x = this.#head;
        this.#head = this.#head.getNext();
        this.#lenght--;
        return this.x.setNext(null); 
    }


    /**
     * Put a Node at the end of linkedList.
     * @param {Object} object 
     * @param {LinkedNode} startNode 
     * @returns {LinkedNode}
     */
    putLast(object, startNode){
        if(this.isEmpty())
           return  this.putFirst(object);
        if(starNode && !(startNode instanceof LinkedNode))
            throw new Error('startNode must be LinkedNode');
        let current = startNode || this.#head;
        while(current.hasNext())
            current = current.getNext();
        current.setNext(new LinkedNode(object,null));
        this.#lenght++;
        return current.getNext();
    }

    /**
     * Remove the last node of the linked list.
     * @public 
     * @returns {LinkedNode} 
     */
    removeLast(){
        if(this.isEmpty())
            return null;
        if(this.getlenght() == 1){
            return this.removeFirst();
        }
        let previous = null;
        let current = this.#head;
        while(current.hasNext()){
            previous = current;
            current = current.getNext();
        }
        previous.setNext(null);
        this.#lenght --;
        return current;
    }

    insert(position,object){
        
    }



};