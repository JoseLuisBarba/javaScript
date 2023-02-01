/**
 * @author Jose Luis Barba Farro
 * @class 
 */

class LinkedNode {
    constructor(object, next) {
        this._object = object;
        this.setNext(next);
    }
    /**
     * @public 
     * @param {void} void
     * @returns {value} object
     */
    getObject() {
        return this._object;
    }

    /** 
     * @public
     * @param {any} object
     * @returns {LinkedNode} linkedNode
    */
    setObject(object) {
        this._object = object;
        return this;
    }


    /**
     * 
     * @param {LinkedNode} next 
     * @returns {LinkedNode}
     */
    setNext(next) {
        if (next === null || (next instanceof LinkedNode)) {
            this._next = next;
            return this;
        }
        throw new Error('setNext must be a linkedNode or NULL.');

    }
    /**
     * @public
     * @param {void} void
     * @returns {LinkedNode} next
     */
    getNext() {
        return this._next;
    }

    /**
     * @public
     * @returns {boolean}
     */
    hasNext() {
        return this._next instanceof LinkedNode;
    }

    static printNode(node) {
        console.log(node.getObject());
        if (node.hasNext())
            console.log(node.getNext());
    }

};

exports.LinkedNode = LinkedNode;




