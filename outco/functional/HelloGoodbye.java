public class HelloGoodbye { 
    public static void main(String[] args){
        if (args.length >= 2){
            String name1Str = args[0];
            String name2Str = args[1];
            System.out.println("Hello, " + name1Str + " " + name2Str);
            System.out.println("Goodbye, " + name1Str + " " + name2Str);
        } else {
            System.out.println("Please provide two names.");
        }
        
        
    }
}

