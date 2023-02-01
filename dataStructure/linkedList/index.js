class LinkedNode{
    constructor(object,next){
        this._object = object;
        this._next = next;
    }
    /**
     * @public 
     * @param {void} void
     * @returns {value} object
     */
    getObject(){
        return this._object;
    }
    /** 
     * @public
     * @param {any} object
     * @returns {LinkedNode} linkedNode
    */
    setObject(object){
        this._object = object;
        return this;
    }


    /**
     * 
     * @param {LinkedNode} next 
     * @returns {LinkedNode}
     */
    setNext(next){
        if (next && ! (next instanceof LinkedNode))
            throw new Error('setNext must be a linkedNode or NULL.');
        this._next = next || null;
        return this;
    }
    /**
     * @public
     * @param {void} void
     * @returns {LinkedNode} next
     */
    getNext(){
        return this._next;
    }

    /**
     * @public
     * @returns {boolean}
     */
    hasNext(){
        return this._next instanceof LinkedNode;
    }

};