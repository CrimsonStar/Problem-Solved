const BST = require('.');

describe('Data Structure : Binary Search Tree', () => {
    it('Should be class', () => {
        expect(typeof BST.prototype.constructor).toEqual('function');
    });

    describe('Binary Search Tree API', () => {
        let bst = null;

        beforeEach(() => {
            bst = new BST(5);
        });

        it('Should delete() an element from Binary Search Tree', () => {
            bst.add(4);
            bst.add(9);
            bst.add(2);
            bst.delete(bst.root, 4);
            expect(bst.traverseInorder()).toEqual([2, 5, 9]);
            bst.delete(bst.root, 2);
            expect(bst.traverseInorder()).toEqual([5, 9]);
        });
    });
});
