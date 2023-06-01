
class Matrix{

    // keep
    constructor(mInt, nInt){
        this.mInt = mInt;
        this.nInt = nInt;
        this.storage = Array(this.mInt)
        let xInt = 0
        while (xInt < mInt){
            this.storage[xInt] = Array(this.nInt)
            xInt++
        }
    }

    // keep 
    isValid(iInt, jInt){
            if (iInt < 0 || jInt < 0 || iInt > this.mInt || jInt > this.nInt){
                return false
            }
            return true;
    }
    
    // keep
    print(){
            console.log(this.storage)
    }
    
    // keep
    insert(iInt, jInt, valueInt){
            
            if (this.isValid(iInt, jInt)){
                this.storage[iInt][jInt] = valueInt;
                return true;
            }
    
            if (!this.isValid(iInt, jInt)){
                return false;
            } 
    }
    
    // keep
    retrieve(iInt, jInt){
            if (this.isValid(iInt, jInt)){
                return this.storage[iInt][jInt];
            }
            if (!this.isValid(iInt, jInt)){
                return -Infinity;
            }
    }

    multiply(inputMatrix){
        /* 
        if the originalMatrix is mInt by nInt
        and the inputMatrix is nInt by kInt
        multipliedMatrix must be mInt by kInt
        */
        
        // ensure the number of columns in the originalMatrix equals 
        // the number of rows in the inputMatrix
        if (inputMatrix.length !== this.nInt){
            return 'The input matrix may not be multiplied by the original matrix in a valid way.';
        }
    
        let multipliedMatrix = Array(this.mInt);
        let kInt = inputMatrix[0].length;
        let iInt = 0;
    
        while (iInt < kInt){
            multipliedMatrix[iInt] = Array(kInt);
            iInt++;
        }
    
        let xInt = 0;
        let yInt = 0;
        let gInt = 0
        while (xInt < this.mInt){
            yInt = 0;
            let multipliedValueInt = 0;
            while (yInt < this.nInt){
                let originalValueInt = this.retrieve(xInt, yInt);
                while (gInt < inputMatrix.length){
                    let inputValueInt = inputMatrix[gInt][xInt];
                    multipliedValueInt += originalValueInt * inputValueInt;
                    gInt++;
                }
                multipliedMatrix[xInt][yInt] = multipliedValueInt;
                yInt++;
            }
            xInt++
        }
        return multipliedValueInt;
    }
    
}

