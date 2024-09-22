
public class Math {

    public static void main(String[] args) {
        Math math = new Math();
        // System.out.println(Integer.toString(-));1534236469
        int x = math.reverse(1563847412);
        System.out.println("X");
        System.out.println(x);
    }

    // convert integer to sting.
    // convert string to array of digits.
    // reverse array
    //[0,1,2,3,4]
    public int reverse(int x) {
        boolean sign = false;
        if(x<=0){
            System.out.println(x);
            System.out.println("D");
            sign = true;
            x = -x;
        }
        String numString = Integer.toString(x);
        // System.out.println(numString);
        int[] digits = new int[numString.length()];
        // System.out.println(numString.length());
        // System.out.println("numString");
        for(int i=0;i<digits.length;i++){
            digits[i] = numString.charAt(i) - '0';//ASCII Code
            // System.out.println(digits[i]);
        }
        int startPointer = 0;
        int endPointer = digits.length - 1;
        if(digits.length == 2){
            int temp1 = 0;
            temp1 = digits[0];
            digits[0] = digits[1];
            digits[1] =temp1;
        }else{
            while (startPointer<endPointer) {
                // System.out.println(startPointer);
                // System.out.println(endPointer);
                int temp = 0;
                if(digits[startPointer]!=digits[endPointer]){
                    // System.out.println(digits[startPointer]);
                    // System.out.println(digits[endPointer]);
                    // System.out.println("befor");
                    temp = digits[startPointer];
                    digits[startPointer] = digits[endPointer];
                    digits[endPointer] =temp;

                }

                startPointer++;
                endPointer--;
                if(endPointer<0){
                    break ;
                }

            }
        }
        int number = 0;
        for (int i = 0; i < digits.length; i++) {
            number = number * 10 + digits[i]; 
            System.out.println(number);
            if(number<0){
                number = 0;
                break;
            }
            if(i==6&&number>2147483&&digits.length>9){
                number = 0;
                break;
            }
        }
        if(sign&&number>0){
            number = - number;
        }
        for(int d=0;d<digits.length;d++){
            System.out.println(digits[d]);
        }
        x  = number;
        return x;
    }
    
}

